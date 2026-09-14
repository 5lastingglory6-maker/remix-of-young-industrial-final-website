import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type Role = 'user' | 'bot' | 'error';

interface ChatMessage {
  id: string;
  role: Role;
  text: string;
}

const SESSION_KEY = 'chat_session_id';
const MESSAGES_KEY = 'chat_messages';

function newId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hydrate session id + history from localStorage after mount (SSR-safe).
  useEffect(() => {
    try {
      let stored = localStorage.getItem(SESSION_KEY);
      if (!stored) {
        stored = newId();
        localStorage.setItem(SESSION_KEY, stored);
      }
      setSessionId(stored);

      const saved = localStorage.getItem(MESSAGES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setMessages(parsed as ChatMessage[]);
      }
    } catch {
      // localStorage unavailable (private mode) — chat still works in-memory.
    }
    setHydrated(true);
  }, []);

  // Persist history on every change.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch {
      // ignore quota/availability errors
    }
  }, [messages, hydrated]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { id: newId(), role: 'user', text }]);
    setInput('');
    setLoading(true);

    try {
      const url = import.meta.env['VITE_N8N_WEBHOOK_URL'] as string | undefined;
      if (!url) throw new Error('Chat webhook URL is not configured.');

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatInput: text, sessionId }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      const raw = await res.text();
      let reply = '';
      try {
        const data = raw ? JSON.parse(raw) : {};
        const payload = Array.isArray(data) ? data[0] : data;
        reply = payload?.output ?? payload?.message ?? payload?.text ?? '';
      } catch {
        reply = raw;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: 'bot',
          text: reply || "I didn't catch a reply for that. Could you try rephrasing?",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: 'error',
          text: "Sorry — that message couldn't be sent. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-safety-600 text-white shadow-xl transition-transform hover:bg-safety-700 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-4 left-4 z-[60] flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-2xl sm:left-auto sm:w-[380px] sm:max-h-[520px]">
          <div className="flex items-center justify-between gap-3 bg-navy-900 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Chat with us</p>
              <p className="text-[11px] text-navy-100">We usually reply in a moment</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1 text-navy-100 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-steel-50 px-4 py-4">
            {hydrated && messages.length === 0 && !loading && (
              <p className="rounded-xl bg-white px-3 py-2 text-sm text-steel-600 shadow-sm">
                Hi there — how can we help you today?
              </p>
            )}

            {messages.map((m) => (
              <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm shadow-sm ${
                    m.role === 'user'
                      ? 'bg-safety-600 text-white'
                      : m.role === 'error'
                        ? 'border border-red-200 bg-red-50 text-red-700'
                        : 'bg-white text-navy-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-steel-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-steel-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-steel-400" />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
            className="flex items-center gap-2 border-t border-steel-200 bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Type your message…"
              aria-label="Message"
              className="min-w-0 flex-1 rounded-full border border-steel-200 bg-white px-4 py-2 text-sm text-navy-800 placeholder:text-steel-500 focus:border-safety-600 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-safety-600 text-white transition-colors hover:bg-safety-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
