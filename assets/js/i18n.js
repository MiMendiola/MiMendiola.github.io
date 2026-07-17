/*==================== TRANSLATIONS ====================*/
const translations = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", qualification: "Qualification", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      badge: "Available for work",
      greeting: "I'm Miguel",
      roles: ["Software Developer", "Web Developer", "42 Madrid Student"],
      description: "Software developer focused on automation, cloud and web development — from Java & Spring Boot to React and PHP.",
      contactBtn: "Contact Me",
      workBtn: "View Work",
      cvBtn: "Download CV"
    },
    about: {
      title: "About Me",
      subtitle: "Introduction",
      description: "Software developer with experience in automation, cloud and web development. Specialized in Java, PHP, Python and modern frameworks like React and Angular. Focused on building scalable solutions, improving processes through automation and applying agile methodologies to deliver efficient, reliable software.",
      location: "Spain",
      languages: "Spanish (native) · English (advanced) · Italian (basic)",
      current: "Currently: 42 Madrid — Telefónica"
    },
    skills: {
      title: "Skills",
      subtitle: "What I work with",
      frontend: "Frontend",
      backend: "Backend & Languages",
      tools: "Tools & Methodology"
    },
    qualification: {
      title: "Qualification",
      subtitle: "My personal journey",
      education: "Education",
      work: "Work",
      edu1: { title: "Software Developer", date: "Sep 2022 – Present" },
      edu2: { title: "Web Development", date: "Dec 2021 – Jan 2023" },
      edu3: { title: "Computer Security Certificate", date: "Apr 2021 – Aug 2021" },
      edu4: { title: "Cross-platform Application Development", date: "Sep 2018 – Jul 2020" },
      work1: { title: "Service Operations Automation", date: "Jul 2024 – Jun 2025", desc: "Built version 2.0 of the Telefónica Tech portal with PHP, MySQL and Python, and automated cloud & cybersecurity processes with Java and Spring Boot." },
      work2: { title: "Frontend Developer", date: "Dec 2021 – Apr 2023", desc: "Built internal platforms with React 17 and MUI 5, TypeScript CRUD screens, working in agile sprints with Jira and Confluence." },
      work3: { title: "Web Developer", date: "Aug 2020 – Nov 2020" }
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Most recent work",
      transcendence: "Real-time multiplayer Pong platform with OAuth2 authentication, live chat and tournaments. Built with Django, PostgreSQL and vanilla JavaScript, deployed with Docker.",
      inception: "Containerized services infrastructure built with Docker Compose: NGINX, WordPress and MariaDB, configuring networks, volumes and environment variables on a virtual machine.",
      viewGithub: "View on GitHub",
      visitDemo: "Visit demo",
      checklife: "Migrated the site from Wix to WordPress quickly and efficiently, with improvements along the way.",
      vapeo: "A WordPress storefront built from scratch, paired with an improved PrestaShop backend for sales.",
      menara: "Website for a Spanish construction company, with periodic improvements built in WordPress.",
      dashboardTitle: "Admin Dashboard",
      dashboard: "An admin dashboard built with React, Material UI, Formik, FullCalendar and Nivo Charts.",
      spaTitle: "Angular SPA",
      spa: "A single-page application built in Angular for a perfume shop."
    },
    contact: {
      title: "Contact Me",
      subtitle: "Get in touch",
      talk: "Talk to me",
      emailMe: "Email me",
      phone: "Phone",
      callMe: "Call me",
      textMe: "Text me",
      send: "Send a message",
      name: "Name",
      namePh: "Enter your name",
      emailPh: "Enter your email",
      message: "Message",
      messagePh: "Write what you need",
      submit: "Send Message"
    },
    footer: { rights: "All rights reserved" }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", skills: "Habilidades", qualification: "Trayectoria", portfolio: "Portafolio", contact: "Contacto" },
    hero: {
      badge: "Disponible para trabajar",
      greeting: "Soy Miguel",
      roles: ["Desarrollador Software", "Desarrollador Web", "Estudiante en 42 Madrid"],
      description: "Desarrollador de software enfocado en automatización, cloud y desarrollo web — desde Java y Spring Boot hasta React y PHP.",
      contactBtn: "Contáctame",
      workBtn: "Ver proyectos",
      cvBtn: "Descargar CV"
    },
    about: {
      title: "Sobre mí",
      subtitle: "Introducción",
      description: "Desarrollador de software con experiencia en automatización, cloud y desarrollo web. Especializado en Java, PHP, Python y frameworks modernos como React y Angular. Enfocado en construir soluciones escalables, mejorar procesos mediante automatización y aplicar metodologías ágiles para entregar software eficiente y fiable.",
      location: "España",
      languages: "Español (nativo) · Inglés (avanzado) · Italiano (básico)",
      current: "Actualmente: 42 Madrid — Telefónica"
    },
    skills: {
      title: "Habilidades",
      subtitle: "Con qué trabajo",
      frontend: "Frontend",
      backend: "Backend y lenguajes",
      tools: "Herramientas y metodología"
    },
    qualification: {
      title: "Trayectoria",
      subtitle: "Mi recorrido personal",
      education: "Educación",
      work: "Experiencia",
      edu1: { title: "Desarrollador de Software", date: "Sep 2022 – Actualidad" },
      edu2: { title: "Desarrollo Web", date: "Dic 2021 – Ene 2023" },
      edu3: { title: "Certificado en Seguridad Informática", date: "Abr 2021 – Ago 2021" },
      edu4: { title: "Desarrollo de Aplicaciones Multiplataforma", date: "Sep 2018 – Jul 2020" },
      work1: { title: "Automatización de Operaciones de Servicio", date: "Jul 2024 – Jun 2025", desc: "Desarrollo de la versión 2.0 del portal de Telefónica Tech con PHP, MySQL y Python, y automatización de procesos cloud y de ciberseguridad con Java y Spring Boot." },
      work2: { title: "Desarrollador Frontend", date: "Dic 2021 – Abr 2023", desc: "Desarrollo de plataformas internas con ReactJS v17 y MUI v5, pantallas CRUD con TypeScript, trabajando en sprints ágiles con Jira y Confluence." },
      work3: { title: "Desarrollador Web", date: "Ago 2020 – Nov 2020" }
    },
    portfolio: {
      title: "Portafolio",
      subtitle: "Trabajo más reciente",
      transcendence: "Plataforma web multijugador de Pong en tiempo real con autenticación OAuth2, chat en vivo y torneos. Desarrollada con Django, PostgreSQL y JavaScript vanilla, desplegada con Docker.",
      inception: "Infraestructura de servicios contenerizados con Docker Compose: NGINX, WordPress y MariaDB, configurando redes, volúmenes y variables de entorno en una máquina virtual.",
      viewGithub: "Ver en GitHub",
      visitDemo: "Ver demo",
      checklife: "Migración del sitio de Wix a WordPress de forma rápida y eficiente, con mejoras adicionales.",
      vapeo: "Tienda online en WordPress creada desde cero, junto a un backend de PrestaShop mejorado para las ventas.",
      menara: "Web para una constructora española, con mejoras periódicas hechas en WordPress.",
      dashboardTitle: "Panel de administración",
      dashboard: "Panel de administración hecho con React, Material UI, Formik, FullCalendar y Nivo Charts.",
      spaTitle: "Angular SPA",
      spa: "Aplicación de página única (SPA) hecha en Angular para una tienda de perfumes."
    },
    contact: {
      title: "Contáctame",
      subtitle: "Hablemos",
      talk: "Hablemos",
      emailMe: "Escríbeme",
      phone: "Teléfono",
      callMe: "Llámame",
      textMe: "Escríbeme",
      send: "Envía un mensaje",
      name: "Nombre",
      namePh: "Escribe tu nombre",
      emailPh: "Escribe tu email",
      message: "Mensaje",
      messagePh: "Cuéntame qué necesitas",
      submit: "Enviar mensaje"
    },
    footer: { rights: "Todos los derechos reservados" }
  }
};

/*==================== I18N ENGINE ====================*/
function lookup(lang, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, translations[lang]);
}

function applyI18n(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = lookup(lang, el.getAttribute('data-i18n'));
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = lookup(lang, el.getAttribute('data-i18n-placeholder'));
    if (typeof value === 'string') el.setAttribute('placeholder', value);
  });

  const cvLink = document.getElementById('cv-download-link');
  if (cvLink) {
    cvLink.href = lang === 'es' ? 'assets/cv/MiguelMendiola_CV_ES.pdf' : 'assets/cv/MiguelMendiola_CV_EN.pdf';
    cvLink.title = lang === 'es' ? 'PDF, Español' : 'PDF, English';
  }
}

function detectLang() {
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'es') return stored;
  return (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

let currentLang = detectLang();

function updateToggleLabel() {
  const label = document.getElementById('lang-toggle-label');
  if (label) label.textContent = currentLang === 'en' ? 'ES' : 'EN';
}

/*==================== TYPEWRITER ====================*/
let typewriterTimeout = null;

function startTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  clearTimeout(typewriterTimeout);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const roles = lookup(currentLang, 'hero.roles') || [];

  if (reducedMotion || !roles.length) {
    el.textContent = roles[0] || '';
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        typewriterTimeout = setTimeout(tick, 1800);
        return;
      }
      typewriterTimeout = setTimeout(tick, 65);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typewriterTimeout = setTimeout(tick, 400);
        return;
      }
      typewriterTimeout = setTimeout(tick, 30);
    }
  }

  tick();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyI18n(lang);
  updateToggleLabel();
  startTypewriter();
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang);
  updateToggleLabel();
  startTypewriter();

  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.addEventListener('click', () => {
      setLang(currentLang === 'en' ? 'es' : 'en');
    });
  }
});
