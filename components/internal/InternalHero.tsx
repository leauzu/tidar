import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";
export function InternalHero({variant="split",eyebrow,title,intro,image="/assets/home/hero-video-poster.jpg",imageAlt="Dokumentasi TIDAR",breadcrumbs=[]}:{variant?:"cinematic"|"split"|"structured";eyebrow:string;title:string;intro:string;image?:string;imageAlt?:string;breadcrumbs?:readonly [string,string][]}){
  return <section className={`internal-hero internal-hero--${variant}`}>
    <div className="internal-hero__inner page-width">
      <div className="internal-hero__copy"><Breadcrumbs items={breadcrumbs}/><p className="internal-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="internal-hero__intro">{intro}</p></div>
      {variant!=="structured"&&<div className="internal-hero__media"><Image src={image} alt={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 48vw"/></div>}
    </div>
  </section>
}
