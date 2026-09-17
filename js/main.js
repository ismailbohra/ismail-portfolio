// Ismail Bohra Portfolio — interactivity: nav, scrollspy, reveal, typed text, back-to-top
// Content (skills/experience/education) is rendered from js/data.js so it can be edited in one place.
(() => {
  const escapeHtml = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const renderSkills = () => {
    const parent = document.getElementById('skillsGrid');
    if (!parent || typeof skillCategories === 'undefined') return;
    parent.innerHTML = skillCategories
      .map(
        (category) => `
          <div class="skill-card reveal">
            <h3>${category.title}</h3>
            <div class="tag-row">
              ${category.skills.map((skill) => `<span class="chip">${skill}</span>`).join('')}
            </div>
          </div>`
      )
      .join('');
  };

  const renderExperience = () => {
    const parent = document.getElementById('experienceTimeline');
    if (!parent || typeof experienceList === 'undefined') return;
    parent.innerHTML = experienceList
      .map(
        (job) => `
          <li class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <span class="timeline-date">${job.duration}</span>
              <h3>${escapeHtml(job.role)} <span>— ${escapeHtml(job.company)}</span></h3>
              <p class="timeline-loc">${escapeHtml(job.location)}</p>
              <ul>
                ${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
              </ul>
            </div>
          </li>`
      )
      .join('');
  };

  const renderEducation = () => {
    const parent = document.getElementById('educationList');
    if (!parent || typeof qualifications === 'undefined') return;
    parent.innerHTML = qualifications
      .map(
        (quali) => `
          <div class="edu-card reveal">
            <h3>${escapeHtml(quali.degree)}</h3>
            <p class="edu-sub">${escapeHtml(quali.institution.name)} &bull; ${escapeHtml(quali.duration)}</p>
          </div>`
      )
      .join('');
  };

  renderSkills();
  renderExperience();
  renderEducation();

  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('navToggle');
  const navPanel = document.getElementById('navPanel');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const backToTop = document.getElementById('backToTop');

  // Sticky header shadow/blur on scroll
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    backToTop.style.opacity = window.scrollY > 400 ? '1' : '.5';
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  navToggle.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scrollspy: highlight active nav link based on section in view
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((section) => spyObserver.observe(section));

  // Scroll-reveal animations
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // Typed-text hero role cycling
  const typedEl = document.getElementById('typed');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typedEl && !prefersReducedMotion) {
    const roles = ['AI Engineer', 'GenAI Solutions Builder', 'Python Developer', 'Full Stack Developer'];
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true; // start by deleting the "AI Engineer" already shown in the markup

    const tick = () => {
      const current = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      typedEl.textContent = current.slice(0, charIndex);

      let delay = deleting ? 45 : 75;

      if (!deleting && charIndex === current.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
      }

      setTimeout(tick, delay);
    };

    setTimeout(tick, 1600);
  }
})();
