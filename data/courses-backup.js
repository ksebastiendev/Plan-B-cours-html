export const courses = [
  {
    slug: 'bitcoin-foundations',
    title: 'Bitcoin Foundations — WHY / HOW / WHERE',
    subtitle: 'Fonctions de la monnaie, souveraineté et modèle de rupture monétaire',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '24 min read',
    category: 'Foundations',
    tags: ['WHY', 'HOW', 'WHERE'],
    description:
      'Synthèse structurée des bases: pourquoi Bitcoin existe, comment il répond techniquement, et où son utilité devient stratégique.',
    href: '/courses/bitcoin-foundations.html',
  },
  {
    slug: 'bitcoin-protocol',
    title: 'Bitcoin Protocol & Bitcoin Core',
    subtitle: 'Lire la spécification vivante dans le code: validation, mempool, réseau, chainstate',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '38 min read',
    category: 'Blockchain',
    tags: ['Bitcoin Core', 'Validation', 'UTXO'],
    description:
      'Carte d\'architecture de Bitcoin Core: démarrage, transactions, script, PoW, validation, P2P et frontière consensus/policy.',
    href: '/courses/bitcoin-protocol.html',
  },
  {
    slug: 'internet-structure',
    title: 'Internet Structure for Bitcoin Builders',
    subtitle: 'BGP, ASN, peering, incidents et sécurité du routage mondial',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '32 min read',
    category: 'Networking',
    tags: ['BGP', 'ASN', 'RPKI'],
    description:
      'Fiche réseau orientée pratique: routage Internet, risques de hijack/leak, défenses opérationnelles et lien direct avec Bitcoin.',
    href: '/courses/internet-structure.html',
  },
  {
    slug: 'lightning-network',
    title: 'Lightning Network Notes',
    subtitle: 'Canaux, HTLC, routage probabiliste, liquidité et nouvelles primitives',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '40 min read',
    category: 'Layer 2',
    tags: ['HTLC', 'Liquidity', 'BOLTs'],
    description:
      'Vue complète Lightning: sécurité de canal, gestion de liquidité, UX, BOLT 11/12, swaps, splicing, L402 et Taproot Assets.',
    href: '/courses/lightning-network.html',
  },
  {
    slug: 'masterclass-synthesis',
    title: 'Masterclass Synthesis — Exam 3',
    subtitle: 'Internet, Bitcoin Core et Lightning réunis dans une seule carte mentale',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '19 min read',
    category: 'Synthesis',
    tags: ['Exam', 'Architecture', 'Strategy'],
    description:
      'Résumé transversal des notions critiques à mémoriser: infrastructure Internet, pipeline Bitcoin Core et enjeux Layer 2.',
    href: '/courses/masterclass-synthesis.html',
  },
  {
    slug: 'arkprotocol',
    title: 'ARK — Bitcoin Advanced Layer',
    subtitle: "Liquidité mutuelle et coordination simplifiée au-delà de Lightning",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '28 min read',
    category: 'Layer 2',
    tags: ['ARK', 'UX', 'Liquidity'],
    description:
      "ARK regroupe utilisateurs dans une pool off-chain avec coordination serveur: paiements rapides, onboarding simple, souveraineté Bitcoin préservée.",
    href: '/courses/ark.html',
  },
  {
    slug: 'bitcoin-offline-resilience',
    title: 'Bitcoin Offline & Résilience Réseau',
    subtitle: "Transmission hors-ligne, mesh, radio et paiements Cashu",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '35 min read',
    category: 'Infrastructure',
    tags: ['Offline', 'LoRa', 'Cashu'],
    description:
      "Transactions Bitcoin signées transportées offline via Bluetooth, LoRa, SMS ou papier; Cashu pour paiements instantanés hors-ligne; résilience en conditions dégradées.",
    href: '/courses/bitcoin-offline-resilience.html',
  },
  {
    slug: 'building-on-rgb',
    title: 'Building on RGB — Smart Contracts & Assets',
    subtitle: "Validation côté client et actifs sur Bitcoin sans modification du protocole",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '32 min read',
    category: 'Protocols',
    tags: ['RGB', 'Smart Contracts', 'Assets'],
    description:
      "RGB permet actifs, tokens et smart contracts sur Bitcoin via validation client-side: confidentialité élevée, scalabilité, ancrage Taproot.",
    href: '/courses/building-on-rgb.html',
  },
  {
    slug: 'connecting-bitcoin-layers',
    title: 'Connecting Bitcoin Layers',
    subtitle: "Architecture multi-couches: Bitcoin → Lightning → Assets → Wallet",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '42 min read',
    category: 'Architecture',
    tags: ['Layers', 'Lightning', 'Taproot', 'HTLC'],
    description:
      "Vision holistique de l\'écosystème multi-layer: mainchain, Lightning, Liquid, sidechain; SegWit, Taproot, MuSig2; convergence vers paiements programmables.",
    href: '/courses/connecting-bitcoin-layers.html',
  },
]

export const courseDetails = {
  'bitcoin-foundations': {
    title: 'Bitcoin Foundations — WHY / HOW / WHERE',
    subtitle:
      'Reconstruction logique: fonctions monétaires, architecture technique et contexte géopolitique.',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '24 min read',
    intro:
      'Ces notes réorganisent un contenu initial non uniforme en 3 axes pédagogiques. Objectif: passer d\'une liste brute d\'idées à une progression claire pour révision et publication.',
    sections: [
      {
        id: 'why-money-functions',
        title: '1. WHY — Pourquoi Bitcoin ?',
        paragraphs: [
          'Le WHY repose sur les 4 fonctions monétaires: store of value, medium of exchange, unit of account et system of control.',
          'Le constat de départ est que le fiat se dégrade via inflation, centralisation du crédit, risque de confiscation et surveillance financière.',
        ],
        bullets: [
          'Store of Value: rareté et préservation du pouvoir d\'achat dans le temps.',
          'Medium of Exchange: convergence vers l\'actif le plus liquide via effet réseau.',
          'Unit of Account: abstraction croissante de la monnaie moderne.',
          'System of Control: qui contrôle la monnaie influence la société.',
        ],
        badges: ['Scarcity', 'Cantillon Effect', 'Sovereignty'],
      },
    ],
    references: [
      'Plan B internal notes — Foundations module',
      'Foundations slides (mentionnées dans les notes)',
      'Developer Track context: Lightning, Liquid, Ark, RGB',
    ],
    nextSteps: [
      'Ajouter des exemples concrets par pays/secteur pour le WHERE.',
      'Créer une version ultra-condensée 1 page examen.',
      'Lier chaque terme du vocabulaire à un exemple opérationnel.',
    ],
  },
  'arkprotocol': {
    title: "ARK — Bitcoin Advanced Layer",
    subtitle: "Protocole de paiement pour UX simplifiée sans perte de souveraineté.",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '28 min read',
    intro:
      "ARK résout les limites UX de Lightning en mutualisant la liquidité via un serveur coordinateur. Transactions rapides, onboarding simple, mais avec préservation de la souveraineté Bitcoin.",
    sections: [
      {
        id: 'ark-definition',
        title: "1. Qu\'est-ce qu\'ARK ?",
        paragraphs: [
          "ARK est un protocole de paiement off-chain qui regroupe plusieurs utilisateurs dans une pool de liquidité coordonnée.",
          "Contrairement aux canaux Lightning bilatéraux, ARK mutualise la liquidité pour simplifier l\'UX et l\'onboarding.",
        ],
        bullets: [
          "Transactions rapides sans canal individuel.",
          "Liquidité mutualisée plutôt que gérée individuellement.",
          "Onboarding accessible sans notion technique.",
          "Coordination par un serveur ARK mais sans custodie complète.",
        ],
        badges: ['Pooled Liquidity', 'UX-First', 'Sovereign'],
      },
    ],
    references: [
      'Plan B internal notes — ARK module',
      'ARK whitepaper',
      'Contrast avec Lightning Network',
    ],
    nextSteps: [
      'Ajouter un runbook d\'intégration ARK client.',
      'Comparer empiriquement ARK vs Lightning UX pour onboarding.',
      'Créer exemple mini-ARK serveur en Python.',
    ],
  },
  'bitcoin-offline-resilience': {
    title: 'Bitcoin Offline & Résilience Réseau',
    subtitle: "Transactions signées hors-ligne et paiements sans connexion Internet.",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '35 min read',
    intro:
      "Bitcoin permet créer et signer transactions sans Internet. Les transférer offline (SMS, Bluetooth, LoRa, papier), les relayer quand internet revient. Cashu ajoute paiements instantanés offline.",
    sections: [
      {
        id: 'offline-principle',
        title: "1. Principe fondamental",
        paragraphs: [
          "Une transaction Bitcoin est simplement un message signé: structure de données + clé privée signature.",
          "Elle peut transiter par n\'importe quel canal: Internet, SMS, radio, papier.",
        ],
        bullets: [
          "Transactions = fichier hex sérialisé et signé.",
          "Bitcoin n\'a besoin Internet que pour broadcast et inclusion bloc.",
          "Création signature est 100% offline.",
          "Transport peut être SMS, Bluetooth mesh, LoRa, fichier, QR code, papier.",
        ],
        badges: ['Signed Data', 'Transport-Agnostic', 'Resilience'],
      },
    ],
    references: [
      'Plan B internal notes — Offline & Resilience module',
      'Cashu protocol spec',
      'Mesh networking resources',
    ],
    nextSteps: [
      'Créer démo: LoRa tx relay entre deux zones.',
      'Tester Cashu token generation et redemption.',
      'Runbook: transaction offline setup par wallet.',
    ],
  },
  'building-on-rgb': {
    title: 'Building on RGB — Smart Contracts & Assets',
    subtitle: "Validation côté client et écosystème d\'actifs sur Bitcoin.",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '32 min read',
    intro:
      "RGB est un protocole permettant créer actifs, tokens et smart contracts sur Bitcoin sans modifier le protocole. Repose sur validation côté client et commitments Taproot.",
    sections: [
      {
        id: 'rgb-definition',
        title: "1. Qu\'est-ce que RGB ?",
        paragraphs: [
          "RGB permet créer assets, tokens et smart contracts sur Bitcoin sans fork.",
          "Innovation clé: données et logique off-chain, validées localement plutôt que globalement.",
        ],
        bullets: [
          "Crée des actifs (tokens, stablecoins) sur Bitcoin.",
          "Crée smart contracts custom.",
          "Données stockées côté client, pas sur blockchain.",
          "Bitcoin fournit sécurité et horodatage seulement.",
        ],
        badges: ['Client-Side', 'Trustless', 'Confidential'],
      },
    ],
    references: [
      'Plan B internal notes — RGB module',
      'RGB whitepaper',
      'RGB SDK documentation',
    ],
    nextSteps: [
      'Créer un mini token RGB de test.',
      'Implémenter validator RGB simple.',
      'Ajouter exemple Cashu + RGB combo.',
    ],
  },
  'connecting-bitcoin-layers': {
    title: 'Connecting Bitcoin Layers',
    subtitle: "Architecture multi-couches et paiements programmables.",
    date: '2026-03-22',
    author: 'Plan B Notes',
    duration: '42 min read',
    intro:
      "Bitcoin évolue d\'une simple blockchain vers un écosystème multi-layer interconnecté. Lightning, Liquid, RGB, Ark partagent base sécurité Bitcoin tout en offrant propriétés différentes.",
    sections: [
      {
        id: 'bitcoin-evolution',
        title: "1. Bitcoin comme système modulaire",
        paragraphs: [
          "Mainchain Bitcoin fournit sécurité et décentralisation max, mais lent et coûteux.",
          "Layers compensent: paiements rapides (Lightning), confidentialité (Liquid), smart contracts (RGB), UX (Ark).",
        ],
        bullets: [
          "Mainchain: sécurité max, lenteur acceptable, coûts élevés.",
          "Lightning: paiements instantanés, trustless, off-chain.",
          "Liquid: sidechain, actifs rapides, confidentiel.",
          "RGB: smart contracts, assets, validation client.",
          "Ark: UX simplifié, liquidité mutualisée.",
        ],
        badges: ['Mainchain', 'Sidechains', 'State Channels', 'Off-Chain'],
      },
    ],
    references: [
      'Plan B internal notes — Layers architecture',
      'BOLT specifications',
      'RGB whitepaper',
    ],
    nextSteps: [
      'Mapper physiquement chaque layer à composants Software.',
      'Créer scenario payments traversant multiple layers.',
      'Documenter trade-offs layer par use case.',
    ],
  },
}
