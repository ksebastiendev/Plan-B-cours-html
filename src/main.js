import './style.css'
import { courses } from '../data/courses.js'
import { localizeCourseCard, translateCategory } from '../data/translations.js'
import { getLocale, localeBadge, setLocale, t, toggleLocale } from './i18n.js'

const app = document.querySelector('#app')
const state = {
  locale: getLocale(),
  query: '',
  category: 'all',
}

function getLocalizedCourses() {
  return courses.map((course) => localizeCourseCard(course, state.locale))
}

function matchesQuery(course, query) {
  if (!query) {
    return true
  }

  const haystack = [
    course.title,
    course.subtitle,
    course.description,
    course.category,
    ...course.tags,
  ]
    .join(' ')
    .toLowerCase()

  return haystack.includes(query.toLowerCase())
}

function renderCards(filteredCourses) {
  const coursesGrid = document.querySelector('#coursesGrid')

  if (!filteredCourses.length) {
    coursesGrid.innerHTML = `
      <article class="panel p-6">
        <h2 class="text-lg font-semibold text-textMain">${t(state.locale, 'noCourseTitle')}</h2>
        <p class="mt-2 text-sm text-textMuted">${t(state.locale, 'noCourseDescription')}</p>
      </article>
    `
    return
  }

  coursesGrid.innerHTML = filteredCourses
    .map(
      (course) => `
      <article class="panel flex h-full flex-col p-6">
        <div class="mb-4 flex flex-wrap gap-2">
          ${course.tags.map((tag) => `<span class="badge">${tag}</span>`).join('')}
        </div>

        <h2 class="text-xl font-semibold text-accentSoft">${course.title}</h2>
        <p class="mt-1 text-sm text-textMuted">${course.subtitle}</p>

        <div class="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-textMuted">
          <span>${course.date}</span>
          <span>${course.duration}</span>
          <span>${course.author}</span>
        </div>

        <p class="mt-4 flex-1 text-sm text-textMain/90">${course.description}</p>

        <div class="mt-5 flex items-center justify-between">
          <span class="rounded-md border border-borderSubtle px-2 py-1 text-xs text-textMuted">${course.categoryLabel}</span>
          <a href="${course.href}" class="rounded-lg border border-blue-300/40 bg-blue-400/10 px-3 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-400/20">
            ${t(state.locale, 'openNotes')} →
          </a>
        </div>
      </article>
    `,
    )
    .join('')
}

function applyFilters() {
  const localizedCourses = getLocalizedCourses()

  const filteredCourses = localizedCourses.filter((course) => {
    const categoryMatch = state.category === 'all' || course.category === state.category
    return categoryMatch && matchesQuery(course, state.query)
  })

  const resultsMeta = document.querySelector('#resultsMeta')
  resultsMeta.textContent = t(state.locale, 'resultsCount', filteredCourses.length, localizedCourses.length)
  renderCards(filteredCourses)
}

function renderHome() {
  const categories = ['all', ...new Set(courses.map((course) => course.category))]

  app.innerHTML = `
    <header class="border-b border-borderSubtle/80 bg-bg/95 backdrop-blur">
      <div class="shell py-10 sm:py-14">
        <div class="mb-6 flex justify-end">
          <button id="langToggle" class="lang-switch" type="button" aria-label="${t(state.locale, 'languageSwitch')}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20"></path>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>${localeBadge(state.locale)}</span>
          </button>
        </div>
        <p class="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-textMuted">${t(state.locale, 'technicalNotes')}</p>
        <h1 class="mx-auto max-w-4xl text-center text-4xl font-semibold text-accentSoft sm:text-5xl">${t(state.locale, 'libraryTitle')}</h1>
        <p class="mx-auto mt-4 max-w-2xl text-center text-base text-textMuted sm:text-lg">${t(state.locale, 'libraryIntro')}</p>
      </div>
    </header>

    <main class="shell mt-10 space-y-8">
      <section class="panel p-5 sm:p-6">
        <div class="grid gap-4 md:grid-cols-[1fr_auto]">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-textMuted">${t(state.locale, 'searchLabel')}</span>
            <input id="searchInput" type="search" placeholder="${t(state.locale, 'searchPlaceholder')}"
              class="w-full rounded-xl border border-borderSubtle bg-surfaceSoft px-4 py-3 text-sm text-textMain placeholder:text-textMuted/70 focus:border-blue-300/60 focus:outline-none" value="${state.query}" />
          </label>

          <label class="block md:min-w-56">
            <span class="mb-2 block text-sm font-medium text-textMuted">${t(state.locale, 'categoryLabel')}</span>
            <select id="categoryFilter"
              class="w-full rounded-xl border border-borderSubtle bg-surfaceSoft px-4 py-3 text-sm text-textMain focus:border-blue-300/60 focus:outline-none">
              ${categories
                .map((category) => {
                  const selected = state.category === category ? 'selected' : ''
                  const label =
                    category === 'all'
                      ? t(state.locale, 'allCategories')
                      : translateCategory(category, state.locale)
                  return `<option value="${category}" ${selected}>${label}</option>`
                })
                .join('')}
            </select>
          </label>
        </div>
      </section>

      <section>
        <div id="resultsMeta" class="mb-4 text-sm text-textMuted"></div>
        <div id="coursesGrid" class="grid gap-5 md:grid-cols-2 xl:grid-cols-3"></div>
      </section>
    </main>
  `

  const searchInput = document.querySelector('#searchInput')
  const categoryFilter = document.querySelector('#categoryFilter')
  const langToggle = document.querySelector('#langToggle')

  searchInput.addEventListener('input', (event) => {
    state.query = event.target.value.trim()
    applyFilters()
  })

  categoryFilter.addEventListener('change', (event) => {
    state.category = event.target.value
    applyFilters()
  })

  langToggle.addEventListener('click', () => {
    const nextLocale = toggleLocale(state.locale)
    setLocale(nextLocale)
  })

  applyFilters()
}

window.addEventListener('localechange', (event) => {
  state.locale = event.detail.locale
  renderHome()
})

renderHome()
