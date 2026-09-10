import { news } from "@/data/home";

export function RecentNews() {
  return (
    <section className="featured-stories recent-news featured-card-container news-section page-width" aria-labelledby="news-title">
      <div className="news-grid">
        <a
          className="news-title-cell"
          href="https://www.tidar.or.id/berita/"
          target="_blank"
          rel="noreferrer"
          aria-labelledby="news-title"
        >
          <div className="news-title-cell__content">
            <p>KABAR ORGANISASI</p>
            <h2 id="news-title">Berita TIDAR.</h2>
            <span className="news-title-cell__cta">LIHAT SEMUA BERITA <b aria-hidden="true">›</b></span>
          </div>
        </a>

        {news.slice(0, 5).map((item) => (
          <a className="news-card" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
            <img src={item.image} alt="" loading="lazy" />
            <div className="news-card__wash" />
            <div className="news-card__normal">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <small>BACA SELENGKAPNYA <b>›</b></small>
            </div>
            <div className="news-card__hover" aria-hidden="true">
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-arrow"><strong>BACA SELENGKAPNYA</strong><i><b /></i></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
