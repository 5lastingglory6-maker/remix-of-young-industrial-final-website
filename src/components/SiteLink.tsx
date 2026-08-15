import { Link as RouterLink, useRouterState } from"@tanstack/react-router";
import type { ReactNode } from"react";

/**
 * Thin wrappers so the ported pages can keep passing plain string paths
 * (including runtime-built ones like `/projects/${slug}`) to a link.
 */

interface LinkProps {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;"aria-label"?: string;
}

export function Link({ to, className, children, onClick, ...rest }: LinkProps) {
  return (
    <RouterLink to={to as never} className={className} onClick={onClick} {...rest}>
      {children}
    </RouterLink>
  );
}

interface NavLinkProps {
  to: string;
  className: string | ((state: { isActive: boolean }) => string);
  children: ReactNode;
}

export function NavLink({ to, className, children }: NavLinkProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = pathname === to || pathname.startsWith(`${to}/`);
  const resolved = typeof className ==="function" ? className({ isActive }) : className;

  return (
    <RouterLink to={to as never} className={resolved}>
      {children}
    </RouterLink>
  );
}

export default Link;
