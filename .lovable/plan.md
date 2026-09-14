# Floating chat bubble widget

A live chat bubble that follows visitors on every page, remembers the conversation, and sends messages to your n8n workflow.

## What visitors see

- A round chat button fixed in the bottom-right corner of every page.
- Clicking it opens a compact chat panel: a header with the title and a close button, the scrolling conversation, and a message box with a send button at the bottom.
- Their own messages appear on the right in the site blue; replies appear on the left in light grey.
- While the assistant is thinking, three animated dots show as a "typing" bubble.
- If the message can't get through, a clear error bubble appears in the chat instead of the page breaking.
- The panel keeps its conversation when they move between pages or reload the site.

## Styling

Uses the site's existing palette and fonts — navy header, blue send button and user bubbles, steel grey borders — so it matches the rest of the website. Panel sits above all page content, full-width-friendly on phones, fixed 380px panel on larger screens.

## The n8n connection

The widget posts each message to the webhook address stored in your project settings. That address is not set yet, so I'll need it from you (or the widget will show its error bubble on every send). Each visitor gets a unique conversation ID that is sent with every message, so your workflow can keep track of who it's talking to.

## Technical details

- New `src/components/ChatWidget.tsx`, rendered once in `src/routes/__root.tsx` inside the layout wrapper so it never unmounts on navigation.
- Session ID: read `chat_session_id` from `localStorage`; if absent, generate with `crypto.randomUUID()` and store it.
- Messages: state shape `{ id, role: 'user' | 'bot' | 'error', text }[]`, hydrated from `localStorage.chat_messages`, persisted via `useEffect` on every change.
- All `localStorage` and `crypto` reads happen inside `useEffect` (not in `useState` initializers) to avoid SSR/hydration mismatch on this stack; the panel body renders after hydration.
- Send: `POST` to `import.meta.env.VITE_N8N_WEBHOOK_URL` with `Content-Type: application/json` and body `{ chatInput, sessionId }`.
- Reply extraction: `data.output ?? data.message ?? data.text`, with a fallback string if none present; non-OK responses and network failures are caught in `try/catch/finally` and rendered as an error bubble.
- Loading flag disables the input and send button and renders the typing indicator; the message list auto-scrolls to the newest message.
- `VITE_N8N_WEBHOOK_URL` added to the project environment (client-visible by design, as specified).
