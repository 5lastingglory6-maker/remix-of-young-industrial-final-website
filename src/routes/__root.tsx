import { QueryClient, QueryClientProvider } from"@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from"@tanstack/react-router";
import { ArrowLeft } from"lucide-react";
import { useEffect, type ReactNode } from"react";

import appCss from"../styles.css?url";
import { reportLovableError } from"../lib/lovable-error-reporting";
import { Link } from"@/components/SiteLink";
import Header from"@/components/Header";
import Footer from"@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="container-8xl py-32 text-center">
      <p className="eyebrow mb-3">404 Error</p>
      <h1 className="text-5xl font-bold text-navy-800 md:text-6xl">Page Not Found</h1>
      <p className="mt-4 text-lg text-steel-600 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary:"tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-8xl py-32 text-center">
      <h1 className="text-3xl font-bold text-navy-800">This page didn't load</h1>
      <p className="mt-4 text-steel-600">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-primary"
        >
          Try again
        </button>
        <a href="/" className="btn-secondary">
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet:"utf-8" },
      { name:"viewport", content:"width=device-width, initial-scale=1" },
      { title:"Young's Industrial Refrigeration Limited" },
      {
        name:"description",
        content:"Industrial fabrication, refrigeration and HVAC services across Atlantic Canada.",
      },
    ],
    links: [
      { rel:"stylesheet", href: appCss },
      { rel:"icon", type:"image/png", href:"/favicon.png" },
      { rel:"preconnect", href:"https://fonts.googleapis.com" },
      { rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin:"anonymous" },
      {
        rel:"stylesheet",
        href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Archivo:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
