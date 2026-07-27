(() => {
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const heroMedia = document.getElementById('heroMedia');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navGroups = [...document.querySelectorAll('.nav-group:not(.nav-group--single)')];
  const navParents = [...document.querySelectorAll('button.nav-parent')];

  const isMobile = () => window.innerWidth <= 900;
  const setMenuState = open => {
    mainNav?.classList.toggle('is-open', open);
    menuToggle?.classList.toggle('is-open', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  };

  const closeAllGroups = (preserveFirstMobile = false) => {
    navGroups.forEach((group, index) => {
      const open = preserveFirstMobile && isMobile() && index === 0;
      group.classList.toggle('is-open', open);
      group.querySelector('.nav-parent')?.setAttribute('aria-expanded', String(open));
    });
  };

  const setGroupState = (group, open) => {
    group.classList.toggle('is-open', open);
    group.querySelector('.nav-parent')?.setAttribute('aria-expanded', String(open));
  };

  const openGroupExclusive = group => {
    navGroups.forEach(item => setGroupState(item, item === group));
  };

  const onScroll = () => {
    header.classList.toggle('is-solid', window.scrollY > 32 && !mainNav?.classList.contains('is-open'));
    if (!reduced && heroMedia && window.scrollY < window.innerHeight * 1.2) {
      heroMedia.style.transform = `translate3d(0, ${window.scrollY * 0.16}px, 0)`;
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  menuToggle?.addEventListener('click', () => {
    const willOpen = !mainNav.classList.contains('is-open');
    setMenuState(willOpen);
    if (willOpen) closeAllGroups(true);
  });
  mobileNavClose?.addEventListener('click', () => setMenuState(false));

  navParents.forEach(parent => {
    const group = parent.closest('.nav-group');
    parent.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile()) {
        const willOpen = !group.classList.contains('is-open');
        navGroups.forEach(item => setGroupState(item, item === group ? willOpen : false));
      } else {
        const willOpen = !group.classList.contains('is-open');
        navGroups.forEach(item => setGroupState(item, false));
        if (willOpen) setGroupState(group, true);
      }
    });
  });

  mainNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    setMenuState(false);
    closeAllGroups(false);
  }));

  document.addEventListener('click', e => {
    if (!mainNav?.contains(e.target) && !menuToggle?.contains(e.target)) {
      if (!isMobile()) closeAllGroups(false);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setMenuState(false);
      closeAllGroups(false);
    }
  });

  window.addEventListener('resize', () => {
    setMenuState(false);
    closeAllGroups(isMobile());
    onScroll();
  });

  document.documentElement.classList.add('motion-enabled');

  // Apply the same lightweight entrance treatment to the main content and
  // reusable cards on every page, without changing their HTML structure.
  const automaticRevealTargets = document.querySelectorAll([
    'main > section:not(.hero):not(.page-hero)',
    '.news-modern-card',
    '.related-post-card',
    '.news-card',
    '.feature-card',
    '.love-card',
    '.doc-card',
    '.book-card',
    '.bio-fact',
    '.mission-modern-list li'
  ].join(','));
  automaticRevealTargets.forEach(el => el.classList.add('reveal'));

  // The Pengurus Pusat directory is much taller than a mobile viewport. A
  // percentage-based IntersectionObserver threshold can therefore keep the
  // entire section transparent. Keep this data-heavy section immediately
  // visible while retaining motion on the rest of the website.
  const orgDirectorySection = document.getElementById('orgTable')?.closest('main > section');
  if (orgDirectorySection) {
    orgDirectorySection.classList.remove('reveal');
    orgDirectorySection.classList.add('in-view');
    orgDirectorySection.style.removeProperty('transition-delay');
  }

  const revealElements = [...document.querySelectorAll('.reveal')];
  if (reduced || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold:.08, rootMargin:'0px 0px -24px'});
    revealElements.forEach((el,i) => {
      el.style.transitionDelay = el.classList.contains('program-card') ? '0ms' : `${Math.min((i%4)*30,90)}ms`;
      revealObserver.observe(el);
    });
  }

  const easeOut = t => 1 - Math.pow(1-t, 4);
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = Number(el.dataset.target || 0), start = performance.now(), duration = reduced ? 1 : 1500;
      const tick = now => {
        const p = Math.min((now-start)/duration,1);
        el.textContent = String(Math.floor(target*easeOut(p)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, {threshold:.5});
  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  const track = document.getElementById('storyTrack');
  const cards = track ? [...track.children] : [];
  const dots = document.getElementById('storyDots');
  let active = 0, timer;
  cards.forEach((_,i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Tampilkan pesan ${i+1}`);
    b.addEventListener('click', () => go(i));
    dots?.appendChild(b);
  });
  const dotButtons = dots ? [...dots.children] : [];
  function go(i){
    active = (i + cards.length) % cards.length;
    if (track) track.style.transform = `translateX(-${active*100}%)`;
    cards.forEach((c,j) => c.classList.toggle('is-active', j===active));
    dotButtons.forEach((d,j) => d.classList.toggle('is-active', j===active));
    restart();
  }
  function restart(){ clearInterval(timer); if (!reduced) timer = setInterval(() => go(active+1), 30000); }
  document.getElementById('prevStory')?.addEventListener('click', () => go(active-1));
  document.getElementById('nextStory')?.addEventListener('click', () => go(active+1));
  if (cards.length) go(0);
  let touchX = 0;
  track?.addEventListener('touchstart', e => touchX = e.touches[0].clientX, {passive:true});
  track?.addEventListener('touchend', e => {
    const d = e.changedTouches[0].clientX - touchX;
    if (Math.abs(d) > 50) go(active + (d < 0 ? 1 : -1));
  }, {passive:true});
  document.querySelectorAll('[data-fullscreen]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.fullscreen);
      if (!target) return;
      try {
        if (target.requestFullscreen) await target.requestFullscreen();
        else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
      } catch (_) {}
    });
  });
  const orgSearch = document.getElementById('orgSearch');
  if (orgSearch) orgSearch.addEventListener('input', () => {
    const q = orgSearch.value.toLowerCase().trim();
    document.querySelectorAll('#orgTable tbody tr:not(.group-row)').forEach(row => {
      row.hidden = Boolean(q && !row.textContent.toLowerCase().includes(q));
    });
  });

})();

// Filter kategori berita.
(() => {
  const initialiseNewsFilter = () => {
    const filter = document.getElementById('newsFilter');
    const grid = document.getElementById('newsGrid');
    const cards = [...document.querySelectorAll('#newsGrid [data-news-category]')];
    const empty = document.getElementById('newsFilterEmpty');
    if (!filter || !grid || !cards.length) return;

    const normaliseCategory = (value) => String(value || '').trim().toLowerCase();

    const applyNewsFilter = () => {
      const selected = normaliseCategory(filter.value);
      let visible = 0;

      cards.forEach((card) => {
        const category = normaliseCategory(card.getAttribute('data-news-category'));
        const shouldShow = selected === 'semua' || category === selected;

        card.classList.toggle('is-filtered-out', !shouldShow);
        card.hidden = !shouldShow;
        card.setAttribute('aria-hidden', String(!shouldShow));
        if (shouldShow) visible += 1;
      });

      grid.classList.toggle('is-filtered', selected !== 'semua');
      if (empty) {
        empty.hidden = visible !== 0;
        empty.setAttribute('aria-live', 'polite');
      }
    };

    filter.addEventListener('change', applyNewsFilter);
    filter.addEventListener('input', applyNewsFilter);
    applyNewsFilter();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseNewsFilter, { once: true });
  } else {
    initialiseNewsFilter();
  }
})();
