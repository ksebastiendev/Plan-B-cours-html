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
      'Carte d’architecture de Bitcoin Core: démarrage, transactions, script, PoW, validation, P2P et frontière consensus/policy.',
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
      'Ces notes réorganisent un contenu initial non uniforme en 3 axes pédagogiques. Objectif: passer d’une liste brute d’idées à une progression claire pour révision et publication.',
    sections: [
      {
        id: 'why-money-functions',
        title: '1. WHY — Pourquoi Bitcoin ?',
        paragraphs: [
          'Le WHY repose sur les 4 fonctions monétaires: store of value, medium of exchange, unit of account et system of control.',
          'Le constat de départ est que le fiat se dégrade via inflation, centralisation du crédit, risque de confiscation et surveillance financière.',
        ],
        bullets: [
          'Store of Value: rareté et préservation du pouvoir d’achat dans le temps.',
          'Medium of Exchange: convergence vers l’actif le plus liquide via effet réseau.',
          'Unit of Account: abstraction croissante de la monnaie moderne.',
          'System of Control: qui contrôle la monnaie influence la société.',
        ],
        badges: ['Scarcity', 'Cantillon Effect', 'Sovereignty'],
      },
      {
        id: 'how-core-mechanics',
        title: '2. HOW — Comment Bitcoin répond',
        paragraphs: [
          'Le HOW combine cryptographie asymétrique, fonctions de hash, preuve de travail, blockchain et incitations économiques.',
          'La sécurité est économique: produire des blocs coûte cher, vérifier est peu coûteux, et réécrire l’historique exige de refaire le travail.',
        ],
        bullets: [
          'Clé privée = contrôle effectif des fonds (self-custody).',
          'PoW = protection contre la duplication et le double spending.',
          'UTXO + consensus = registre partagé sans autorité centrale.',
          'Layer 2 (Lightning) = scalabilité transactionnelle hors chaîne.',
        ],
        callout:
          'Ultra-simple memory trick: WHY = Economic Theory, HOW = Cryptography + Engineering, WHERE = Power + Politics + Strategy.',
      },
      {
        id: 'where-strategic',
        title: '3. WHERE — Où Bitcoin s’inscrit',
        paragraphs: [
          'Le WHERE est géo-économique: environnements inflationnistes, exclusion bancaire, contrôle des capitaux, régimes autoritaires ou surveillance forte.',
          'Bitcoin se positionne comme digital commodity money, settlement network et couche monétaire programmable.',
        ],
        bullets: [
          'Monetary evolution: shells → metals → banknotes → digital credit.',
          'Positionnement: base layer + réserve numérique + règlement global.',
          'Pour builders: infrastructure de paiement, API settlement, produit fintech.',
        ],
      },
      {
        id: 'foundations-vocabulary',
        title: '4. Essential Vocabulary',
        paragraphs: [
          'Le corpus inclut un vocabulaire clé à maîtriser pour l’examen et la compréhension des débats monétaires.',
        ],
        table: {
          headers: ['Term', 'Meaning', 'Axis'],
          rows: [
            ['Store of Value', 'Actif qui conserve le pouvoir d’achat', 'WHY'],
            ['Proof of Work', 'Travail computationnel sécurisant le réseau', 'HOW'],
            ['Censorship Resistance', 'Capacité à limiter le blocage des transactions', 'WHERE'],
            ['Fractional Reserve', 'Prêts supérieurs aux réserves détenues', 'WHY'],
            ['Layer 2', 'Protocoles au-dessus de Bitcoin (ex: Lightning)', 'HOW'],
          ],
        },
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
  'bitcoin-protocol': {
    title: 'Bitcoin Protocol & Bitcoin Core',
    subtitle:
      'Le code comme spécification: architecture du daemon, pipeline de validation et logique réseau.',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '38 min read',
    intro:
      'Ces notes reprennent la fiche “Bitcoin Protocol” et transforment le contenu en parcours lisible: de l’entrée du daemon à la frontière consensus/policy.',
    sections: [
      {
        id: 'source-is-spec',
        title: '1. Why read the source',
        paragraphs: [
          'Le principe central est explicite: dans Bitcoin, le code accepté par le réseau fait autorité sur la documentation.',
          'La lecture efficace consiste à suivre des chemins techniques précis plutôt que parcourir le dépôt de manière linéaire.',
        ],
        bullets: [
          'Entrée daemon: src/bitcoind.cpp puis init dans src/init.cpp.',
          'Constantes réseau et genesis: src/kernel/chainparams.cpp.',
          'Point de méthode: “Use the Source, Luke”.',
        ],
        badges: ['bitcoind.cpp', 'init.cpp', 'chainparams.cpp'],
      },
      {
        id: 'protocol-primitives',
        title: '2. Primitives: transactions, script, blocks, merkle, pow',
        paragraphs: [
          'Les structures transactionnelles sont définies dans src/primitives/transaction.h (COutPoint, CTxIn, CTxOut, CTransaction).',
          'Script est exécuté dans src/script/interpreter.cpp; les blocs et en-têtes sont dans src/primitives/block.h; merkle dans src/consensus/merkle.cpp; difficulté/PoW dans src/pow.cpp.',
        ],
        bullets: [
          'Sérialisation: src/serialize.h et macro READWRITE(obj).',
          'Header 80 bytes: nVersion, prev hash, merkle root, nTime, nBits, nNonce.',
          'Ajustement de difficulté: CalculateNextWorkRequired() tous les 2016 blocs.',
        ],
        callout:
          'Consensus et sécurité dépendent de règles identiques entre nœuds; une divergence d’implémentation au mauvais endroit peut provoquer un comportement de chaîne incompatible.',
      },
      {
        id: 'validation-pipeline',
        title: '3. Validation pipeline & chainstate',
        paragraphs: [
          'Le cœur opérationnel est dans src/validation.cpp, notamment AcceptToMemoryPool(), CheckBlock() et ConnectBlock().',
          'Le UTXO set et le chainstate reposent notamment sur src/coins.h et CCoinsViewCache.',
        ],
        bullets: [
          'CheckBlock: vérifications structurelles et PoW (hors contexte).',
          'ConnectBlock: vérifications contextuelles (UTXO, signatures, dépenses).',
          'AcceptToMemoryPool: admission transactionnelle côté mempool.',
        ],
        table: {
          headers: ['Area', 'Example file', 'Responsibility'],
          rows: [
            ['Validation', 'src/validation.cpp', 'Checks de blocs/tx et état de chaîne'],
            ['UTXO', 'src/coins.h', 'Vue des sorties non dépensées'],
            ['Mempool', 'src/txmempool.cpp', 'Stockage et priorisation des transactions'],
            ['Mining', 'src/node/miner.cpp', 'Assemblage bloc candidat via CreateNewBlock()'],
          ],
        },
      },
      {
        id: 'network-policy-boundary',
        title: '4. P2P layer and consensus/policy boundary',
        paragraphs: [
          'Le plan réseau se répartit entre src/net.cpp (sockets/peers), src/net_processing.cpp (traitement des messages) et handshake VERSION/VERACK.',
          'La frontière critique du dépôt: consensus (accord absolu) vs policy (règles locales de relay).',
        ],
        bullets: [
          'Consensus: zone ultra sensible, modifications à risque systémique.',
          'Policy: souple et locale, utile pour la santé opérationnelle du réseau.',
          'Top 10 files de départ: validation, net_processing, interpreter, tx/block primitives, coins, txmempool, net, miner, init.',
        ],
      },
    ],
    references: [
      'Plan B internal notes — Bitcoin Protocol module',
      'Bitcoin Core source tree (src/*)',
      'Processus BIP et notes de déploiement soft forks',
    ],
    nextSteps: [
      'Créer une lecture guidée fonction par fonction (AcceptToMemoryPool → ConnectBlock).',
      'Ajouter un chapitre “soft-fork activation path” (SegWit/Taproot).',
      'Transformer la liste Top 10 files en roadmap hebdomadaire.',
    ],
  },
  'internet-structure': {
    title: 'Internet Structure for Bitcoin Builders',
    subtitle:
      'Comprendre BGP, ASN et sécurité du routage pour mieux opérer des systèmes Bitcoin.',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '32 min read',
    intro:
      'Le contenu d’origine a été réordonné pour passer de l’histoire Internet à l’opérationnel moderne: routage, menaces, défenses, puis implications directes pour Bitcoin.',
    sections: [
      {
        id: 'internet-vs-web',
        title: '1. Internet architecture fundamentals',
        paragraphs: [
          'Internet est un réseau mondial de réseaux autonomes (AS), distinct du Web qui représente des services applicatifs.',
          'Le routage inter-domaines repose sur BGP4, fondation stable depuis 1995.',
        ],
        bullets: [
          'Commutation de paquets: résilience et reroutage dynamique.',
          'Backbone majoritairement sous-marin, satellites en rôle complémentaire.',
          'Un FAI donne un accès à Internet, il n’est pas Internet.',
        ],
        badges: ['ASN', 'BGP4', 'Packet Switching'],
      },
      {
        id: 'routing-economics',
        title: '2. Routing economics and control plane',
        paragraphs: [
          'Les opérateurs échangent des routes via peering et transit avec des contraintes économiques (capacité, 95e percentile, coûts de transport).',
          'Le trafic sortant se contrôle mieux que le trafic entrant, qui dépend des choix de réseaux distants.',
        ],
        bullets: [
          'AS Path, local preference et “more specific wins”.',
          'RIB = connaissance des routes, FIB = route active de forwarding.',
          'IXP + route servers simplifient les interconnexions multiples.',
        ],
      },
      {
        id: 'bgp-security',
        title: '3. Incidents and security posture',
        paragraphs: [
          'BGP fonctionne historiquement sur la confiance; route leaks et hijacks restent possibles et parfois massifs.',
          'Les incidents historiques montrent qu’une erreur locale peut avoir une propagation globale.',
        ],
        bullets: [
          'Cas cités: Pakistan/YouTube, Telecom Malaysia, Facebook 2021.',
          'Défenses: filtering, max-prefix, bogon filtering, BCP38.',
          'RPKI/ROA: validation cryptographique de l’origine des annonces.',
        ],
        callout:
          'Le modèle “trust, don’t verify” progresse vers “verify more”, mais l’adoption de protections reste partielle et asymétrique.',
      },
      {
        id: 'bitcoin-link',
        title: '4. Why this matters for Bitcoin',
        paragraphs: [
          'Les services Bitcoin dépendent du réseau Internet réel: routage, latence, diversité topologique et résilience opérateur.',
          'ASMap dans Bitcoin Core aide à éviter la concentration des peers dans un même ASN.',
        ],
        table: {
          headers: ['Concept', 'Internet Meaning', 'Bitcoin Impact'],
          rows: [
            ['ASN Diversity', 'Multiplicité d’opérateurs', 'Réduction du risque d’isolement réseau'],
            ['Anycast', 'Même IP multi-sites', 'Résilience de services exposés'],
            ['RPKI', 'Validation des origines BGP', 'Moins de détournements de trafic potentiels'],
            ['Route Leak', 'Annonce erronée propagée', 'Dégradation possible de connectivité nœud'],
          ],
        },
      },
    ],
    references: [
      'Plan B internal notes — Internet Structure module',
      'RFC ecosystem (analogie BIP)',
      'Operational NOG / BGP public tools',
    ],
    nextSteps: [
      'Ajouter un runbook “incident réseau” orienté nœud Bitcoin.',
      'Cartographier les peers par ASN pour ton propre nœud.',
      'Créer une checklist RPKI/filtrage pour un mini-AS lab.',
    ],
  },
  'lightning-network': {
    title: 'Lightning Network — Review Notes',
    subtitle:
      'Layer 2 Bitcoin: canaux, HTLC, routage, liquidité, UX et extensions multi-actifs/API.',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '40 min read',
    intro:
      'Synthèse opérationnelle du Lightning Network pour comprendre rapidement les mécanismes de paiement, de routage et de gestion de liquidité.',
    sections: [
      {
        id: 'ln-core-model',
        title: '1. Core model: channels and state security',
        paragraphs: [
          'Lightning ouvre des canaux on-chain puis effectue des mises à jour off-chain; seul le règlement final retourne sur Bitcoin.',
          'La sécurité repose sur l’état le plus récent, timelocks, scripts et mécanismes de pénalité.',
        ],
        bullets: [
          'Cycle: open channel → multiple updates → close/settle.',
          'Ancien état publié = risque de justice transaction.',
          'Watchtowers aident quand le nœud local est hors ligne.',
        ],
        badges: ['Channel State', 'Justice Tx', 'Timelocks'],
      },
      {
        id: 'htlc-routing',
        title: '2. HTLC, preimage and routed payments',
        paragraphs: [
          'Les paiements routés utilisent HTLC pour garantir atomicité: soit la route entière réussit, soit les fonds reviennent.',
          'Le préimage révélé au destinataire déverrouille les étapes de paiement le long du chemin.',
        ],
        bullets: [
          'Onion routing: chaque hop connaît seulement son voisinage immédiat.',
          'Gossip expose la capacité totale des canaux, pas la balance exacte.',
          'Routage probabiliste: plusieurs tentatives peuvent être nécessaires.',
        ],
      },
      {
        id: 'liquidity-ops',
        title: '3. Liquidity operations and failures',
        paragraphs: [
          'La liquidité est directionnelle: outbound pour envoyer, inbound pour recevoir.',
          'De nombreux échecs de paiement viennent d’une mauvaise distribution de liquidité plutôt que d’une panne réseau.',
        ],
        bullets: [
          'Loop in/out et submarine swaps pour rebalance on-chain ↔ off-chain.',
          'Splicing: ajuster capacité canal sans fermer complètement.',
          'Backups: SCB utile, mais restaurer un état ancien reste risqué.',
        ],
        callout:
          'L’UX est un enjeu de premier ordre: sans abstraction de la liquidité et des échecs, l’adoption reste limitée.',
      },
      {
        id: 'ln-extensions',
        title: '4. Ecosystem extensions: BOLTs, ARC, Taproot Assets, L402',
        paragraphs: [
          'Les BOLTs standardisent l’interopérabilité des implémentations Lightning (BOLT 1/2/3/4/7/11/12).',
          'Le réseau évolue au-delà du paiement BTC simple: adressage humain, actifs, API paywall et flux machine-to-machine.',
        ],
        table: {
          headers: ['Primitive', 'Purpose', 'Notable point'],
          rows: [
            ['BOLT 11', 'Facture Lightning classique', 'Fortement déployé'],
            ['BOLT 12', 'Offer plus flexible', 'Adoption en cours'],
            ['Taproot Assets', 'Actifs sur Bitcoin routés via Lightning', 'Potentiel multi-devises'],
            ['L402', 'Accès API contre paiement Lightning', 'Pertinent pour agents IA'],
          ],
        },
      },
    ],
    references: [
      'Plan B internal notes — Lightning Network module',
      'BOLTs specifications',
      'LND operational concepts (SCB, loop)',
    ],
    nextSteps: [
      'Ajouter un module “playbook de liquidité” par profil de wallet.',
      'Créer des scénarios d’échec/récupération et décisions associées.',
      'Relier chaque concept à une commande/outillage concret.',
    ],
  },
  'masterclass-synthesis': {
    title: 'Masterclass Synthesis — Internet + Core + Lightning',
    subtitle:
      'Synthèse transversale pour examen: de la couche réseau aux primitives applicatives.',
    date: '2026-03-08',
    author: 'Plan B Notes',
    duration: '19 min read',
    intro:
      'Vue d’ensemble structurée de l’écosystème Bitcoin: infrastructure Internet, moteur Bitcoin Core et architecture Lightning.',
    sections: [
      {
        id: 'three-pillars',
        title: '1. Three pillars of the ecosystem',
        paragraphs: [
          'Le socle d’analyse est tripartite: Internet infrastructure, Bitcoin Core internals, Layer 2 (Lightning).',
          'La valeur de la synthèse est de relier des couches souvent étudiées séparément.',
        ],
        bullets: [
          'Internet: interconnexion de 100k+ AS via BGP.',
          'Bitcoin Core: code de référence et pipeline de validation.',
          'Lightning: routage off-chain sous contraintes de liquidité.',
        ],
      },
      {
        id: 'security-map',
        title: '2. Security map across layers',
        paragraphs: [
          'Chaque couche a son modèle de risque: détournement BGP, bug/écart consensus, stale state Lightning.',
          'La robustesse provient d’une défense en profondeur et non d’un mécanisme unique.',
        ],
        bullets: [
          'BGP: max-prefix, bogon filtering, RPKI.',
          'Core: discipline forte sur code consensus.',
          'Lightning: watchtowers, backup strategy, liquidité active.',
        ],
      },
      {
        id: 'future-primitives',
        title: '3. Emerging primitives and product strategy',
        paragraphs: [
          'Taproot Assets et L402 étendent Lightning vers une couche programmable multi-actifs et API-native.',
          'ARK/ARC explorent d’autres compromis UX/coordination autour de la liquidité.',
        ],
        bullets: [
          'L402: accès service conditionné à preuve de paiement.',
          'Taproot Assets: unité de compte stable possible sur réseau Lightning.',
          'ASMap: diversité connectivité pour limiter risques d’isolement.',
        ],
      },
      {
        id: 'exam-memory',
        title: '4. Memory board (top concepts to retain)',
        paragraphs: [
          'Ce tableau condense les notions stratégiques à revoir avant examen ou entretien technique.',
        ],
        table: {
          headers: ['Layer', 'Concept', 'Why it matters'],
          rows: [
            ['Internet', 'Longest Prefix Match', 'Explique hijack/leak et ingénierie de trafic'],
            ['Core', 'CheckBlock → ConnectBlock', 'Pipeline mental de validation'],
            ['Core', 'UTXO / CCoinsViewCache', 'État monétaire effectif du nœud'],
            ['Lightning', 'Liquidity directionality', 'Cause première d’échecs de paiement'],
            ['Lightning', 'Gossip limits', 'Routage nécessairement probabiliste'],
            ['Product', 'L402', 'Monétisation API native paiements'],
          ],
        },
      },
    ],
    references: [
      'Plan B internal notes — Masterclass synthesis',
      'Sections consolidées: Internet + Bitcoin Core + Lightning',
      'Checklist notions critiques (20 concepts)',
    ],
    nextSteps: [
      'Créer une version flashcard (question/réponse) à partir de cette synthèse.',
      'Ajouter un mode “1 page” imprimable pour révision rapide.',
      'Associer chaque notion à un mini exercice pratique.',
    ],
  },
}
