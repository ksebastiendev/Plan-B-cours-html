const STORAGE_KEY = 'planb_locale'
const SUPPORTED_LOCALES = ['fr', 'en']

const UI_TRANSLATIONS = {
  fr: {
    technicalNotes: 'Notes techniques',
    libraryTitle: 'Bibliothèque de notes de cours',
    libraryIntro:
      'Résumés de cours techniques structurés pour une lecture rapide, claire et orientée implémentation.',
    searchLabel: 'Rechercher un cours',
    searchPlaceholder: 'Ex: bitcoin, consensus, sécurité...',
    categoryLabel: 'Catégorie',
    allCategories: 'Toutes',
    openNotes: 'Ouvrir les notes',
    noCourseTitle: 'Aucun cours trouvé',
    noCourseDescription: 'Ajuste la recherche ou le filtre de catégorie.',
    resultsCount: (count, total) => `${count} résultat(s) sur ${total} cours`,
    backToLibrary: 'Retour à la bibliothèque',
    courseNotes: 'Notes de cours',
    contents: 'Sommaire',
    seeAlso: 'Voir aussi',
    nextSteps: 'Prochaines étapes',
    courseNotFound: 'Cours introuvable',
    missingSlug: (slug) => `Aucun contenu trouvé pour le slug: ${slug}`,
    languageSwitch: 'Changer de langue',
    langBadge: 'FR',
  },
  en: {
    technicalNotes: 'Technical Notes',
    libraryTitle: 'Course Notes Library',
    libraryIntro:
      'Technical course summaries designed for fast reading, clean structure, and implementation-focused learning.',
    searchLabel: 'Search courses',
    searchPlaceholder: 'e.g. bitcoin, consensus, security...',
    categoryLabel: 'Category',
    allCategories: 'All',
    openNotes: 'Open notes',
    noCourseTitle: 'No course found',
    noCourseDescription: 'Adjust your query or category filter.',
    resultsCount: (count, total) => `${count} result(s) out of ${total} course(s)`,
    backToLibrary: 'Back to library',
    courseNotes: 'Course Notes',
    contents: 'Contents',
    seeAlso: 'See also',
    nextSteps: 'Next steps',
    courseNotFound: 'Course not found',
    missingSlug: (slug) => `No content found for slug: ${slug}`,
    languageSwitch: 'Switch language',
    langBadge: 'EN',
  },
}

export function getLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (SUPPORTED_LOCALES.includes(stored)) {
    return stored
  }

  const browserLocale = navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
  return browserLocale
}

export function setLocale(locale) {
  const next = SUPPORTED_LOCALES.includes(locale) ? locale : 'fr'
  localStorage.setItem(STORAGE_KEY, next)
  window.dispatchEvent(new CustomEvent('localechange', { detail: { locale: next } }))
}

export function toggleLocale(currentLocale) {
  return currentLocale === 'fr' ? 'en' : 'fr'
}

export function t(locale, key, ...args) {
  const lang = UI_TRANSLATIONS[locale] ?? UI_TRANSLATIONS.fr
  const value = lang[key]

  if (typeof value === 'function') {
    return value(...args)
  }

  return value ?? key
}

export function localeBadge(locale) {
  return t(locale, 'langBadge')
}
