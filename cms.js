(function () {
  const root = document.querySelector('[data-content-page]');
  const content = window.ATELIER_CONTENT;
  if (!root || !content) return;

  const page = content[root.dataset.contentPage];
  if (!page || !Array.isArray(page.sections)) return;

  if (content.site?.title) document.title = content.site.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && content.site?.description) metaDescription.content = content.site.description;

  root.innerHTML = page.sections.map(renderSection).join('');
})();

function renderSection(section) {
  switch (section.type) {
    case 'hero':
      return renderHero(section);
    case 'manifesto':
      return renderManifesto(section);
    case 'gallery':
      return renderGallery(section);
    case 'editorial':
      return renderEditorial(section);
    case 'process':
      return renderProcess(section);
    case 'booking':
      return renderBooking(section);
    default:
      return '';
  }
}

function renderHero(section) {
  return `
    <section class="cms-hero" id="${escapeHtml(section.id || 'hero')}">
      <div class="container cms-hero-grid">
        <div class="cms-hero-copy">
          ${textTag('div', section.kicker, 'kicker')}
          <h1>${escapeHtml(section.title || '')}</h1>
          ${textTag('span', section.stamp, 'hero-stamp')}
          ${textTag('p', section.body, 'hero-copy')}
          ${renderActions(section.actions)}
        </div>
        <div class="cms-collage" aria-label="${escapeHtml(section.primaryAlt || '')}">
          ${imageTag(section.primaryImage, section.primaryAlt, 'cms-collage-main')}
          ${imageTag(section.secondaryImage, section.secondaryAlt, 'cms-collage-card')}
        </div>
      </div>
    </section>
    ${renderMarquee()}
  `;
}

function renderManifesto(section) {
  return `
    <section class="section cms-manifesto" id="${escapeHtml(section.id || '')}">
      <div class="container">
        <div class="section-head">
          <div>
            ${textTag('div', section.kicker, 'kicker')}
            <h2>${lineBreakTitle(section.title)}</h2>
          </div>
          ${textTag('p', section.body)}
        </div>
        <div class="cms-card-strip">
          ${(section.cards || []).map((card, index) => `
            <article class="cms-info-card">
              <div class="smallcaps">${escapeHtml(card.label || `0${index + 1}`)}</div>
              <h3>${escapeHtml(card.title || '')}</h3>
              <p>${escapeHtml(card.text || '')}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderGallery(section) {
  return `
    <section class="section ink cms-gallery" id="${escapeHtml(section.id || 'work')}">
      <div class="container">
        <div class="section-head">
          <div>
            ${textTag('div', section.kicker, 'kicker')}
            <h2>${lineBreakTitle(section.title)}</h2>
          </div>
          ${textTag('p', section.body)}
        </div>
        <div class="cms-gallery-grid">
          ${(section.items || []).map(item => `
            <article class="cms-gallery-card">
              <figure>${imageTag(item.image, item.alt, '')}</figure>
              <div class="card-body">
                <div class="meta"><span>${escapeHtml(item.category || '')}</span><span>Atelier Koka</span></div>
                <h3>${escapeHtml(item.title || '')}</h3>
                <p>${escapeHtml(item.text || '')}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderEditorial(section) {
  return `
    <section class="section cms-editorial" id="${escapeHtml(section.id || '')}">
      <div class="container split">
        <div>
          ${textTag('div', section.kicker, 'kicker')}
          <h2>${lineBreakTitle(section.title)}</h2>
          ${textTag('p', section.body, 'lede')}
          <ul class="cms-note-list">
            ${(section.notes || []).map(note => `<li>${escapeHtml(note)}</li>`).join('')}
          </ul>
          ${section.action ? renderActions([section.action]) : ''}
        </div>
        <figure class="cms-editorial-image">${imageTag(section.image, section.alt, '')}</figure>
      </div>
    </section>
  `;
}

function renderProcess(section) {
  return `
    <section class="section red cms-process" id="${escapeHtml(section.id || '')}">
      <div class="container">
        ${textTag('div', section.kicker, 'smallcaps')}
        <h2>${lineBreakTitle(section.title)}</h2>
        <div class="cms-process-grid">
          ${(section.items || []).map((item, index) => `
            <article>
              <span>${String(index + 1).padStart(2, '0')}</span>
              <h3>${escapeHtml(item.title || '')}</h3>
              <p>${escapeHtml(item.text || '')}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderBooking(section) {
  return `
    <section class="section cms-booking" id="${escapeHtml(section.id || 'booking')}">
      <div class="container split">
        <div>
          ${textTag('div', section.kicker, 'kicker')}
          <h2>${lineBreakTitle(section.title)}</h2>
          ${textTag('p', section.body, 'lede')}
          ${section.action ? renderActions([{ ...section.action, style: 'accent', external: true }]) : ''}
        </div>
        <form class="form-grid" data-contact-form>
          <div class="field"><label>First name</label><input required name="firstName"></div>
          <div class="field"><label>Last name</label><input name="lastName"></div>
          <div class="field full"><label>Email</label><input required type="email" name="email"></div>
          <div class="field full"><label>Project</label><select name="subject"><option>New tattoo project</option><option>Flash</option><option>Artwork / collaboration</option><option>General question</option></select></div>
          <div class="field full"><label>Idea / placement / size</label><textarea required name="message"></textarea></div>
          <div class="field full"><button class="btn primary" type="submit">Prepare request</button><p class="notice" data-form-status>Demo form: no message is transmitted until a mail or form backend is connected.</p></div>
        </form>
      </div>
    </section>
  `;
}

function renderMarquee() {
  return '<div class="marquee"><div class="marquee-track"><span>Tattoo <b>✶</b> Drawing <b>✶</b> Flash <b>✶</b> Fribourg <b>✶</b> Atelier Koka <b>✶</b> AKASTEVE <b>✶</b> Tattoo <b>✶</b> Drawing <b>✶</b> Flash <b>✶</b> Fribourg <b>✶</b> Atelier Koka <b>✶</b> AKASTEVE <b>✶</b></span></div></div>';
}

function renderActions(actions = []) {
  if (!actions.length) return '';
  return `
    <div class="btn-row">
      ${actions.map(action => `
        <a class="btn ${action.style === 'accent' ? 'accent' : ''}" href="${escapeHtml(action.href || '#')}" ${action.external || /^https?:/i.test(action.href || '') ? 'target="_blank" rel="noopener"' : ''}>${escapeHtml(action.label || 'Open')}</a>
      `).join('')}
    </div>
  `;
}

function imageTag(src, alt, className) {
  if (!src) return '';
  return `<img class="${escapeHtml(className || '')}" src="${escapeHtml(src)}" alt="${escapeHtml(alt || '')}" loading="lazy">`;
}

function textTag(tag, text, className = '') {
  if (!text) return '';
  return `<${tag}${className ? ` class="${escapeHtml(className)}"` : ''}>${escapeHtml(text)}</${tag}>`;
}

function lineBreakTitle(title = '') {
  return escapeHtml(title).replace(/\n/g, '<br>');
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
