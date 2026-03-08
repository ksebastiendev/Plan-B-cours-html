const categoryTranslations = {
  fr: {
    Foundations: 'Fondations',
    Blockchain: 'Blockchain',
    Networking: 'Réseau',
    'Layer 2': 'Layer 2',
    Synthesis: 'Synthèse',
  },
  en: {
    Foundations: 'Foundations',
    Blockchain: 'Blockchain',
    Networking: 'Networking',
    'Layer 2': 'Layer 2',
    Synthesis: 'Synthesis',
  },
}

const cardTranslations = {
  en: {
    'bitcoin-foundations': {
      title: 'Bitcoin Foundations — WHY / HOW / WHERE',
      subtitle: 'Money functions, sovereignty, and monetary disruption model',
      description:
        'Structured synthesis of the basics: why Bitcoin exists, how it works technically, and where its strategic utility emerges.',
    },
    'bitcoin-protocol': {
      title: 'Bitcoin Protocol & Bitcoin Core',
      subtitle: 'Reading the living spec in code: validation, mempool, networking, chainstate',
      description:
        'Architecture map of Bitcoin Core: startup flow, transactions, script, PoW, validation, P2P, and consensus/policy boundary.',
    },
    'internet-structure': {
      title: 'Internet Structure for Bitcoin Builders',
      subtitle: 'BGP, ASN, peering, incidents, and global routing security',
      description:
        'Practical networking review: Internet routing, hijack/leak risks, defensive operations, and direct impact on Bitcoin services.',
    },
    'lightning-network': {
      title: 'Lightning Network Notes',
      subtitle: 'Channels, HTLCs, probabilistic routing, liquidity, and emerging primitives',
      description:
        'Complete Lightning overview: channel security, liquidity operations, UX, BOLT 11/12, swaps, splicing, L402, and Taproot Assets.',
    },
    'masterclass-synthesis': {
      title: 'Masterclass Synthesis — Exam 3',
      subtitle: 'Internet, Bitcoin Core, and Lightning on one unified map',
      description:
        'Cross-domain summary of critical concepts to retain: Internet infrastructure, Bitcoin Core validation pipeline, and Layer 2 strategy.',
    },
  },
}

const detailTranslations = {
  en: {
    'bitcoin-foundations': {
      subtitle:
        'Structured framework across monetary functions, technical architecture, and geopolitical context.',
      intro:
        'Foundational notes designed to move from concepts to operational understanding, with a clear WHY/HOW/WHERE progression.',
      sectionTitles: {
        'why-money-functions': '1. WHY — Why Bitcoin?',
        'how-core-mechanics': '2. HOW — How Bitcoin responds',
        'where-strategic': '3. WHERE — Strategic contexts',
      },
    },
    'bitcoin-protocol': {
      subtitle:
        'Code as specification: daemon architecture, validation pipeline, and peer-to-peer behavior.',
      intro:
        'Technical walkthrough of Bitcoin Core with a practical reading path from process startup to consensus-critical boundaries.',
    },
    'internet-structure': {
      subtitle:
        'BGP, ASN, and routing security foundations for operating resilient Bitcoin infrastructure.',
      intro:
        'Operational review of Internet routing mechanics, risk patterns, and practical implications for Bitcoin services.',
    },
    'lightning-network': {
      title: 'Lightning Network — Review Notes',
      subtitle:
        'Bitcoin Layer 2: channels, HTLCs, routing, liquidity management, UX, and protocol extensions.',
      intro:
        'Operational Lightning notes focused on payment mechanics, routing constraints, and production-grade liquidity strategy.',
    },
    'masterclass-synthesis': {
      subtitle:
        'Exam-oriented synthesis from networking layer to protocol internals and Layer 2 application design.',
      intro:
        'Compact map of the modern Bitcoin stack, connecting Internet infrastructure, Bitcoin Core internals, and Lightning evolution.',
    },
  },
}

export function translateCategory(category, locale) {
  return categoryTranslations[locale]?.[category] ?? category
}

export function localizeCourseCard(course, locale) {
  const translation = cardTranslations[locale]?.[course.slug] ?? {}

  return {
    ...course,
    title: translation.title ?? course.title,
    subtitle: translation.subtitle ?? course.subtitle,
    description: translation.description ?? course.description,
    categoryLabel: translateCategory(course.category, locale),
  }
}

export function localizeCourseDetail(course, locale) {
  const translation = detailTranslations[locale]?.[course.slug] ?? {}
  const sectionTitleMap = translation.sectionTitles ?? {}

  return {
    ...course,
    title: translation.title ?? course.title,
    subtitle: translation.subtitle ?? course.subtitle,
    intro: translation.intro ?? course.intro,
    sections: course.sections.map((section) => ({
      ...section,
      title: sectionTitleMap[section.id] ?? section.title,
    })),
  }
}
