const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (btn && links) {
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}

const translations = {
  fr: {
    "Menu": "Menu",
    "Atelier Koka logo": "Logo Atelier Koka",
    "Atelier Koka red vintage logo": "Logo rouge vintage d'Atelier Koka",
    "AKASTEVE • Tattoo & visual work": "AKASTEVE • Tatouage & travail visuel",
    "Fribourg • Switzerland": "Fribourg • Suisse",
    "Artist / AKASTEVE": "Artiste / AKASTEVE",
    "AKASTEVE / Artist profile": "AKASTEVE / Profil artiste",
    "Drawings • references • process": "Dessins • références • processus",
    "Atelier Koka Archive": "Archives Atelier Koka",
    "Dates / guest spots / flash updates": "Dates / invités / flash",
    "Appointments • artwork • collaborations": "Rendez-vous • art • collaborations",
    "Artist": "Artiste",
    "Work": "Œuvres",
    "Dates": "Dates",
    "Archive": "Archives",
    "Contact": "Contact",
    "Instagram ↗": "Instagram ↗",
    "Independent tattoo atelier": "Atelier de tatouage indépendant",
    "Tattoo, drawing and visual culture with a raw vintage spirit — made in Fribourg, Switzerland.": "Tatouage, dessin et culture visuelle avec un esprit vintage brut — créé à Fribourg, en Suisse.",
    "Discover AKASTEVE": "Découvrir AKASTEVE",
    "Tattoo ✶ Drawing ✶ Flash ✶ Fribourg ✶ Atelier Koka ✶ AKASTEVE ✶ Tattoo ✶ Drawing ✶ Flash ✶ Fribourg ✶ Atelier Koka ✶ AKASTEVE ✶": "Tatouage ✶ Dessin ✶ Flash ✶ Fribourg ✶ Atelier Koka ✶ AKASTEVE ✶ Tatouage ✶ Dessin ✶ Flash ✶ Fribourg ✶ Atelier Koka ✶ AKASTEVE ✶",
    "The atelier": "L'atelier",
    "Old print energy.": "Énergie d'imprimerie ancienne.",
    "New skin.": "Peau nouvelle.",
    "The site is built like a vintage art publication rather than a standard tattoo template: warm paper, faded red ink, strong editorial type and room for photography, drawings and flash.": "Le site est conçu comme une publication d'art vintage plutôt qu'un modèle de tatouage standard : papier chaud, encre rouge passée, typographie éditoriale forte et de l'espace pour la photo, les dessins et les flashs.",
    "01 / Identity": "01 / Identité",
    "A compact visual world centered on AKASTEVE, the work, and the objects or images around the practice.": "Un univers visuel compact centré sur AKASTEVE, le travail, et les objets ou images autour de la pratique.",
    "02 / Place": "02 / Lieu",
    "Switzerland. Appointments, updates and availability can be announced directly through the studio’s Instagram.": "Suisse. Les rendez-vous, actualités et disponibilités peuvent être annoncés directement sur l'Instagram du studio.",
    "Selected work": "Œuvres sélectionnées",
    "Tattoo / Drawing / Flash": "Tatouage / Dessin / Flash",
    "These are intentionally neutral placeholders. Replace them with AKASTEVE’s real photos and drawings when you send the portfolio images.": "Ces blocs sont volontairement neutres. Remplacez-les par les vraies photos et dessins d'AKASTEVE lorsque les images du portfolio seront disponibles.",
    "Tattoo": "Tatouage",
    "Drawing": "Dessin",
    "Skin": "Peau",
    "Finished work, healed pieces and close-up details.": "Pièces terminées, tatouages cicatrisés et détails en gros plan.",
    "Paper": "Papier",
    "Sketches, illustrations and artwork beyond tattooing.": "Croquis, illustrations et travaux graphiques au-delà du tatouage.",
    "Available": "Disponible",
    "Flash designs, one-off ideas and future drops.": "Flashs, idées uniques et prochaines séries.",
    "Open artist page": "Ouvrir la page artiste",
    "One artist.": "Un artiste.",
    "One visual language.": "Un langage visuel.",
    "The artist page is now centered entirely on AKASTEVE instead of a fictional multi-artist roster. It can grow into a full portfolio with tattoo work, drawings, available flash and process shots.": "La page artiste est maintenant entièrement centrée sur AKASTEVE au lieu d'une fausse équipe d'artistes. Elle peut devenir un portfolio complet avec tatouages, dessins, flashs disponibles et images de processus.",
    "Artist profile": "Profil artiste",
    "Follow the current work": "Suivre le travail actuel",
    "Instagram is the main live channel for new pieces, flash, availability and studio updates.": "Instagram est le canal principal pour les nouvelles pièces, les flashs, les disponibilités et les actualités du studio.",
    "Appointments": "Rendez-vous",
    "Start with the idea.": "Commencez par l'idée.",
    "For now, the safest real contact route is Instagram. The request form is kept as a ready-to-connect website feature for later.": "Pour l'instant, le contact réel le plus sûr est Instagram. Le formulaire reste prêt à connecter plus tard au site.",
    "Message on Instagram ↗": "Écrire sur Instagram ↗",
    "First name": "Prénom",
    "Last name": "Nom",
    "Email": "Email",
    "Project": "Projet",
    "New tattoo project": "Nouveau projet de tatouage",
    "Flash": "Flash",
    "Artwork / collaboration": "Art / collaboration",
    "General question": "Question générale",
    "Idea / placement / size": "Idée / emplacement / taille",
    "Prepare request": "Préparer la demande",
    "Demo form: no message is transmitted until a mail or form backend is connected.": "Formulaire de démonstration : aucun message n'est transmis tant qu'un email ou backend n'est pas connecté.",
    "Tattoo & visual work.": "Tatouage & travail visuel.",
    "Studio": "Studio",
    "Switzerland": "Suisse",
    "Online": "En ligne",
    "© 2026 Atelier Koka / AKASTEVE.": "© 2026 Atelier Koka / AKASTEVE.",
    "Tattoo and visual work based in Fribourg, Switzerland.": "Tatouage et travail visuel basés à Fribourg, en Suisse.",
    "Open the full artist page and portfolio structure.": "Ouvrir la page artiste complète et la structure du portfolio.",
    "Artist profile ↗": "Profil artiste ↗",
    "Studio location": "Ville du studio",
    "Current work and booking updates are published through Atelier Koka’s Instagram.": "Le travail actuel et les infos de réservation sont publiés sur l'Instagram d'Atelier Koka.",
    "Tattoo / drawing / flash": "Tatouage / dessin / flash",
    "Tattoo / drawing / visual archive.": "Tatouage / dessin / archive visuelle.",
    "Work first.": "Le travail d'abord.",
    "Noise later.": "Le bruit ensuite.",
    "This profile is intentionally minimal until we add AKASTEVE’s real biography, tattoo specialties and portfolio images. The structure is ready for both tattoo work and drawings, so the site can feel like an artist archive instead of only a booking page.": "Ce profil reste volontairement minimal jusqu'à l'ajout de la vraie biographie d'AKASTEVE, de ses spécialités et des images du portfolio. La structure est prête pour les tatouages et les dessins, afin que le site ressemble à une archive d'artiste plutôt qu'à une simple page de réservation.",
    "Based in Fribourg, Switzerland. Follow": "Basé à Fribourg, en Suisse. Suivez",
    "for current work and updates.": "pour le travail actuel et les actualités.",
    "Send me AKASTEVE’s tattoo and drawing images and these placeholders can be replaced with a real curated gallery.": "Envoyez-moi les images de tatouages et dessins d'AKASTEVE, et ces blocs pourront être remplacés par une vraie galerie éditée.",
    "© 2026 Atelier Koka / AKASTEVE — Fribourg, Switzerland.": "© 2026 Atelier Koka / AKASTEVE — Fribourg, Suisse.",
    "Beyond the tattoo grid.": "Au-delà de la grille tatouage.",
    "A place for drawings, flash sheets, references, process photographs and longer notes around AKASTEVE’s work.": "Un espace pour les dessins, planches de flash, références, photos de processus et notes plus longues autour du travail d'AKASTEVE.",
    "Coming soon": "Bientôt",
    "Paper archive": "Archives papier",
    "Original drawings and studies can live here.": "Les dessins originaux et études peuvent vivre ici.",
    "Flash archive": "Archives flash",
    "Available and previously tattooed designs.": "Motifs disponibles et déjà tatoués.",
    "Atelier notes": "Notes d'atelier",
    "Process, references and things that shape the work.": "Processus, références et éléments qui façonnent le travail.",
    "Where / when.": "Où / quand.",
    "No fake events are published here. Use this page for confirmed flash days, guest spots, exhibitions or special studio dates when you have them.": "Aucun faux événement n'est publié ici. Utilisez cette page pour les flash days confirmés, guest spots, expositions ou dates spéciales lorsque vous les aurez.",
    "Current updates": "Actualités",
    "Instagram first": "Instagram d'abord",
    "For current availability and announcements, follow @atelier.koka.": "Pour les disponibilités et annonces actuelles, suivez @atelier.koka.",
    "Coming later": "À venir",
    "Confirmed dates": "Dates confirmées",
    "Flash days, guest sessions and events can appear here once supplied.": "Les flash days, sessions invitées et événements pourront apparaître ici une fois fournis.",
    "NOW": "NOW",
    "Bring the idea.": "Apportez l'idée.",
    "Atelier Koka / AKASTEVE — Fribourg, Switzerland. Current enquiries can go directly through Instagram.": "Atelier Koka / AKASTEVE — Fribourg, Suisse. Les demandes actuelles peuvent passer directement par Instagram.",
    "Start a project.": "Démarrer un projet.",
    "Include placement, approximate size, references and anything important about the idea.": "Ajoutez l'emplacement, la taille approximative, les références et tout ce qui compte pour l'idée.",
    "Instagram": "Instagram",
    "Location": "Lieu",
    "Subject": "Sujet",
    "Message": "Message",
    "Demo mode: connect this form to an email service before launch.": "Mode démonstration : connectez ce formulaire à un service email avant le lancement.",
    "Studio city": "Ville du studio",
    "Fribourg.": "Fribourg.",
    "A precise street address has not been added because you only gave me the city. Once you provide the studio address, this section can include directions and a proper map.": "L'adresse précise n'a pas été ajoutée, car seule la ville a été fournie. Une fois l'adresse du studio disponible, cette section pourra inclure un itinéraire et une vraie carte.",
    "Tattoo, drawing and visual culture with a raw vintage spirit.": "Tatouage, dessin et culture visuelle avec un esprit vintage brut.",
    "Tattoo, drawing and visual culture with a raw vintage spirit — built as an artist archive, booking path and living image wall.": "Tatouage, dessin et culture visuelle avec un esprit vintage brut — construit comme archive d'artiste, chemin de réservation et mur d'images vivant.",
    "Book a tattoo": "Réserver un tatouage",
    "View work": "Voir les œuvres",
    "A sharper visual home for skin, paper and process.": "Une maison visuelle plus forte pour la peau, le papier et le processus.",
    "The website now behaves like a small editorial system: every major homepage section can be reviewed, duplicated and rewritten from the control room.": "Le site fonctionne maintenant comme un petit système éditorial : chaque grande section de la page d'accueil peut être revue, dupliquée et réécrite depuis le control room.",
    "01 / Tattoo": "01 / Tatouage",
    "Finished work": "Travaux finis",
    "A place for healed pieces, close-up details and future portfolio photography.": "Un espace pour les pièces cicatrisées, les détails en gros plan et les futures photos de portfolio.",
    "02 / Flash": "02 / Flash",
    "Available ideas": "Idées disponibles",
    "Drops, one-off drawings and recurring visual motifs can be announced quickly.": "Les drops, dessins uniques et motifs récurrents peuvent être annoncés rapidement.",
    "03 / Archive": "03 / Archive",
    "Process notes": "Notes de processus",
    "Sketches, references and studio fragments give the work a fuller atmosphere.": "Les croquis, références et fragments d'atelier donnent au travail une atmosphère plus complète.",
    "Selected visual world": "Univers visuel sélectionné",
    "These are original mood assets for the first version. Replace them from the control room when real AKASTEVE portfolio images are ready.": "Ce sont des visuels d'ambiance originaux pour la première version. Remplacez-les depuis le control room lorsque les vraies images du portfolio AKASTEVE seront prêtes.",
    "Skin direction": "Direction peau",
    "Use this slot for finished and healed tattoo photographs.": "Utilisez cet emplacement pour les photos de tatouages finis et cicatrisés.",
    "Flash wall": "Mur de flash",
    "A section for available sheets and recurring symbols.": "Une section pour les planches disponibles et les symboles récurrents.",
    "Tools": "Outils",
    "Ink table": "Table d'encre",
    "Process and workspace images add trust and atmosphere.": "Les images de processus et d'espace de travail ajoutent confiance et atmosphère.",
    "Paper studies": "Études papier",
    "A home for sketches, references and scanned drawings.": "Un espace pour les croquis, références et dessins scannés.",
    "The site is ready to grow around the actual practice: tattoos, drawings, flash, references and special dates. The control room can now reshape this homepage without touching code.": "Le site est prêt à grandir autour de la pratique réelle : tatouages, dessins, flashs, références et dates spéciales. Le control room peut maintenant remodeler cette page d'accueil sans toucher au code.",
    "Add new editorial sections": "Ajouter de nouvelles sections éditoriales",
    "Duplicate existing blocks": "Dupliquer des blocs existants",
    "Swap images after upload": "Remplacer les images après upload",
    "Rewrite the whole homepage structure": "Réécrire toute la structure de la page d'accueil",
    "What visitors should feel": "Ce que les visiteurs doivent ressentir",
    "Less template. More atelier.": "Moins template. Plus atelier.",
    "Immediate identity": "Identité immédiate",
    "Logo, city and visual tone are visible in the first viewport.": "Le logo, la ville et le ton visuel sont visibles dès le premier écran.",
    "Clear booking path": "Chemin de réservation clair",
    "Visitors can move from inspiration to contact without guessing.": "Les visiteurs peuvent passer de l'inspiration au contact sans deviner.",
    "Image-led editing": "Édition guidée par l'image",
    "The admin can manage the visual wall as the real portfolio arrives.": "L'admin peut gérer le mur visuel au fur et à mesure que le vrai portfolio arrive.",
    "For now, Instagram is the safest real contact route. The request form remains ready for a future mail or backend connection.": "Pour l'instant, Instagram est le contact réel le plus sûr. Le formulaire reste prêt pour une future connexion mail ou backend.",
    "Thanks — your request is ready to be connected to your email/API backend.": "Merci — votre demande est prête à être connectée à un backend email/API."
  }
};

const pageMeta = {
  fr: {
    "/index.html": {
      title: "Atelier Koka — tatouage AKASTEVE, Fribourg",
      description: "Atelier Koka — tatouage et travail visuel par AKASTEVE à Fribourg, Suisse."
    },
    "/artists/index.html": { title: "Artiste — AKASTEVE / Atelier Koka" },
    "/artists/akasteve.html": {
      title: "AKASTEVE — Atelier Koka",
      description: "AKASTEVE — tatouage et travail visuel à Atelier Koka, Fribourg, Suisse."
    },
    "/blog/index.html": { title: "Archives — Atelier Koka" },
    "/events/index.html": { title: "Dates — Atelier Koka" },
    "/contact/index.html": { title: "Contact — Atelier Koka / AKASTEVE" }
  }
};

const originalPageMeta = {
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content || ''
};

let currentLanguage = getInitialLanguage();

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  const storedLanguage = getStoredLanguage();
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  return ['en', 'fr'].includes(queryLanguage) ? queryLanguage : storedLanguage || browserLanguage;
}

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem('atelierKokaLanguage');
    return ['en', 'fr'].includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem('atelierKokaLanguage', language);
  } catch {
    /* Local storage can be unavailable in private or embedded contexts. */
  }
}

function getPageKey() {
  let path = window.location.pathname;
  if (path === '/' || path.endsWith('/')) path += 'index.html';
  return path;
}

function translateString(text, language) {
  if (language === 'en') return text;
  return translations[language]?.[text] || text;
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('.lang-switch,script,style,template,noscript')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!node.__atelierSourceText) node.__atelierSourceText = node.nodeValue;
    const source = node.__atelierSourceText;
    const key = source.trim();
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translateString(key, language)}${trailing}`;
  });
}

function translateAttributes(language) {
  document.querySelectorAll('[aria-label], img[alt]').forEach(element => {
    ['aria-label', 'alt'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      const sourceName = `atelierSource${attribute.replace('-', '')}`;
      if (!element.dataset[sourceName]) element.dataset[sourceName] = element.getAttribute(attribute);
      element.setAttribute(attribute, translateString(element.dataset[sourceName], language));
    });
  });
}

function updatePageMeta(language) {
  const metaDescription = document.querySelector('meta[name="description"]');
  const meta = pageMeta[language]?.[getPageKey()];
  document.title = meta?.title || originalPageMeta.title;
  if (metaDescription) metaDescription.content = meta?.description || originalPageMeta.description;
}

function createLanguageSwitcher() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks || navLinks.querySelector('.lang-switch')) return;

  const switcher = document.createElement('div');
  switcher.className = 'lang-switch';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', 'Language');
  switcher.innerHTML = `
    <button type="button" data-lang-choice="en">EN</button>
    <button type="button" data-lang-choice="fr">FR</button>
  `;
  navLinks.appendChild(switcher);

  switcher.addEventListener('click', event => {
    const button = event.target.closest('[data-lang-choice]');
    if (!button) return;
    applyLanguage(button.dataset.langChoice, true);
  });
}

function updateLanguageSwitcher(language) {
  document.querySelectorAll('[data-lang-choice]').forEach(button => {
    const isActive = button.dataset.langChoice === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function applyLanguage(language, shouldStore = false) {
  currentLanguage = ['en', 'fr'].includes(language) ? language : 'en';
  if (shouldStore) setStoredLanguage(currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.body.dataset.language = currentLanguage;
  translateTextNodes(currentLanguage);
  translateAttributes(currentLanguage);
  updatePageMeta(currentLanguage);
  updateLanguageSwitcher(currentLanguage);
}

createLanguageSwitcher();
applyLanguage(currentLanguage);

document.querySelectorAll('[data-contact-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) {
      status.textContent = translateString('Thanks — your request is ready to be connected to your email/API backend.', currentLanguage);
      if (status.firstChild) status.firstChild.__atelierSourceText = 'Thanks — your request is ready to be connected to your email/API backend.';
    }
    form.reset();
  });
});
