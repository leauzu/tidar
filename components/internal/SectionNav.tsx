import Link from "next/link";
export function SectionNav({title,links}:{title:string;links:readonly (readonly [string,string])[]}){return <aside className="section-nav"><p>{title}</p>{links.map(([label,href])=><Link key={href} href={href}>{label}<span>↗</span></Link>)}</aside>}
