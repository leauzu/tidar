import type { ReactNode } from "react";

export function ArrowLink({ children, href = "#", light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`arrow-link ${light ? "arrow-link--light" : ""}`} href={href}>
      <span>{children}</span>
      <span className="arrow-line" aria-hidden="true"><span className="arrow-head" /></span>
    </a>
  );
}
