import './style.css'
import { courseDetails } from '../data/courses.js'
import { localizeCourseDetail } from '../data/translations.js'
import { getLocale, localeBadge, setLocale, t, toggleLocale } from './i18n.js'

const root = document.querySelector('#course-root')
const slug = document.body.dataset.courseSlug
const state = {
  locale: getLocale(),
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatRichText(value) {
  let text = escapeHtml(value)

  text = text.replace(
    /\bsrc\/[A-Za-z0-9_./-]+(?:\.(?:cpp|h|md|js|ts))?\b/g,
    (match) => `<span class="pill-file">${match}</span>`,
  )

  text = text.replace(/\b[A-Za-z_]\w*\(\)/g, (match) => `<span class="pill-fn">${match}</span>`)

  text = text.replace(
    /\b(?:UTXO|HTLC|BGP|RPKI|ROA|ASMAP|VERSION|VERACK|CHECKBLOCK|CONNECTBLOCK|MEMPOOL|POW|BOLT\s?\d+|L402|X402|CLTV|CSV|OP_[A-Z0-9_]+)\b/gi,
    (match) => `<span class="pill-blue">${match}</span>`,
  )

  return text
}

function badgeClass(value) {
  if (/src\/|\.cpp$|\.h$|\.md$|\.js$|\.ts$/.test(value)) {
    return 'pill-file'
  }

  if (/\w+\(\)/.test(value)) {
    return 'pill-fn'
  }

  return 'pill-code'
}

function renderCourse() {
  const baseCourse = courseDetails[slug]

  if (!baseCourse) {
    root.innerHTML = `
      <main class="shell py-14">
        <section class="panel p-6">
          <h1 class="text-2xl font-semibold text-accentSoft">${t(state.locale, 'courseNotFound')}</h1>
          <p class="mt-3 text-textMuted">${t(state.locale, 'missingSlug', slug)}</p>
          <a href="/index.html" class="mt-6 inline-block rounded-lg border border-blue-300/40 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-400/20">${t(state.locale, 'backToLibrary')}</a>
        </section>
      </main>
    `

    return
  }

  const course = localizeCourseDetail({ ...baseCourse, slug }, state.locale)

  const tocItems = course.sections
    .map(
      (section) => `
      <li>
        <a class="toc-link" href="#${section.id}">${section.title}</a>
      </li>
    `,
    )
    .join('')

  const sectionsHtml = course.sections
    .map((section) => {
      const badges = section.badges?.length
        ? `<div class="mt-4 flex flex-wrap gap-2">${section.badges.map((badge) => `<span class="${badgeClass(badge)}">${badge}</span>`).join('')}</div>`
        : ''

      const bullets = section.bullets?.length
        ? `<ul class="mt-4">${section.bullets.map((item) => `<li>${formatRichText(item)}</li>`).join('')}</ul>`
        : ''

      const callout = section.callout ? `<blockquote class="mt-5">${formatRichText(section.callout)}</blockquote>` : ''

      const table = section.table
        ? `
          <div class="mt-5 overflow-x-auto">
            <table class="data-table">
              <thead>
                <tr>${section.table.headers.map((header) => `<th>${header}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${section.table.rows
                  .map((row) => `<tr>${row.map((col) => `<td>${formatRichText(col)}</td>`).join('')}</tr>`)
                  .join('')}
              </tbody>
            </table>
          </div>
        `
        : ''

      return `
        <section id="${section.id}" class="scroll-mt-24">
          <h2 class="text-2xl font-semibold text-accentSoft">${section.title}</h2>
          <div class="course-copy mt-4 space-y-4">
            ${section.paragraphs.map((paragraph) => `<p class="max-w-reading">${formatRichText(paragraph)}</p>`).join('')}
            ${bullets}
            ${badges}
            ${callout}
            ${table}
          </div>
        </section>
      `
    })
    .join('')

  root.innerHTML = `
    <header class="border-b border-borderSubtle/80 bg-bg/95 backdrop-blur">
      <div class="shell py-10 sm:py-14">
        <div class="mb-4 flex items-center justify-between gap-4">
          <a href="/index.html" class="text-sm text-textMuted transition hover:text-blue-200">← ${t(state.locale, 'backToLibrary')}</a>
          <button id="langToggle" class="lang-switch" type="button" aria-label="${t(state.locale, 'languageSwitch')}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>${localeBadge(state.locale)}</span>
          </button>
        </div>
        <p class="mt-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-textMuted">${t(state.locale, 'courseNotes')}</p>
        <h1 class="mx-auto mt-3 max-w-5xl text-center text-4xl font-semibold text-accentSoft sm:text-5xl">${course.title}</h1>
        <p class="mx-auto mt-4 max-w-3xl text-center text-base text-textMuted sm:text-lg">${course.subtitle}</p>
        <div class="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-textMuted">
          <span>${course.date}</span>
          <span>•</span>
          <span>${course.author}</span>
          <span>•</span>
          <span>${course.duration}</span>
        </div>
      </div>
    </header>

    <main class="shell mt-8 pb-20 lg:mt-10">
      <div class="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <aside class="lg:sticky lg:top-6">
          <div class="panel p-4">
            <h2 class="px-3 text-sm font-semibold uppercase tracking-wide text-blue-200">${t(state.locale, 'contents')}</h2>
            <ol class="mt-3 space-y-1">${tocItems}</ol>
          </div>
        </aside>

        <article class="space-y-8">
          <section class="panel p-6 sm:p-7">
            <p class="max-w-reading text-base text-textMain/95">${formatRichText(course.intro)}</p>
          </section>

          <section class="panel space-y-10 p-6 sm:p-7">${sectionsHtml}</section>

          <section class="grid gap-5 xl:grid-cols-2">
            <div class="panel p-6">
              <h3 class="text-lg font-semibold text-blue-200">${t(state.locale, 'seeAlso')}</h3>
              <ul class="mt-4 ml-5 list-disc space-y-2 text-sm text-textMain/90">
                ${course.references.map((ref) => `<li>${formatRichText(ref)}</li>`).join('')}
              </ul>
            </div>

            <div class="panel p-6">
              <h3 class="text-lg font-semibold text-blue-200">${t(state.locale, 'nextSteps')}</h3>
              <ul class="mt-4 ml-5 list-disc space-y-2 text-sm text-textMain/90">
                ${course.nextSteps.map((step) => `<li>${formatRichText(step)}</li>`).join('')}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  `

  const tocLinks = Array.from(document.querySelectorAll('.toc-link'))
  const observedSections = tocLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        const activeLink = document.querySelector(`.toc-link[href="#${id}"]`)

        if (entry.isIntersecting) {
          tocLinks.forEach((link) => link.classList.remove('toc-link-active'))
          activeLink?.classList.add('toc-link-active')
        }
      })
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    },
  )

  observedSections.forEach((section) => observer.observe(section))

  const langToggle = document.querySelector('#langToggle')
  langToggle?.addEventListener('click', () => {
    const nextLocale = toggleLocale(state.locale)
    setLocale(nextLocale)
  })
}

window.addEventListener('localechange', (event) => {
  state.locale = event.detail.locale
  renderCourse()
})

renderCourse()
