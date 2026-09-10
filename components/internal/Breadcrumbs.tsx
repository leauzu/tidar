import Link from "next/link";
export function Breadcrumbs({ items }: { items: readonly [string, string][] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Beranda</Link>{items.map(([label, href], i)=><span key={href}><i>/</i>{i===items.length-1?<b>{label}</b>:<Link href={href}>{label}</Link>}</span>)}</nav>;
}
