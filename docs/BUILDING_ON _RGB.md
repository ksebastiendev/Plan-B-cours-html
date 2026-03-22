COURS : BUILDING ON RGB (BITCOIN)
1. Introduction : qu’est-ce que RGB
Définition

RGB est un protocole qui permet de créer :

des actifs (tokens, stablecoins)

des smart contracts

sur Bitcoin, sans modifier le protocole Bitcoin.

Idée centrale

RGB repose sur un principe fondamental :

Les données et la logique ne sont pas stockées sur la blockchain, mais validées côté client.

Positionnement

RGB est différent des autres solutions :

Technologie	Approche
Lightning	Paiements off-chain
Liquid	Sidechain fédérée
RGB	Validation côté client
2. Concept clé : Client-Side Validation
Principe

Dans RGB :

chaque utilisateur valide les données lui-même

les données ne sont pas globalement publiées

Comparaison avec Bitcoin classique
Bitcoin

Toutes les données sont on-chain

Tout le monde valide tout

Transparence totale

RGB

Données off-chain

Validation locale

Accès limité aux participants

Résultat

forte confidentialité

scalabilité élevée

réduction de la charge sur Bitcoin

3. Rôle de Bitcoin dans RGB

Bitcoin n’exécute pas RGB.

Il sert uniquement à :

sécuriser

horodater

ancrer les états

Mécanisme

RGB utilise des commitments :

un hash est inséré dans une transaction Bitcoin

ce hash représente un état RGB

Conséquence

Bitcoin ne “comprend” pas RGB
mais garantit son intégrité.

4. RGB et Taproot

RGB dépend fortement de Taproot.

Pourquoi

Taproot permet :

d’insérer des commitments

de cacher les données

de réduire les coûts

Résumé

Taproot rend possible une intégration discrète de RGB dans Bitcoin.

5. Modèle de données RGB

RGB repose sur trois éléments principaux :

State (état)

balances

propriété d’un actif

Contract

règles de fonctionnement

logique du token

Consignment

paquet de données envoyé entre participants

contient l’historique nécessaire à la validation

Logique

Le receveur valide lui-même les données reçues.

6. Transfert d’un actif RGB
Étapes

Alice possède un actif RGB

Elle crée une transaction Bitcoin avec un commitment

Elle envoie les données RGB à Bob (hors chaîne)

Bob valide localement

Bob accepte ou rejette

Important

La blockchain ne contient pas :

les balances

les règles

les actifs

7. RGB vs autres approches
RGB vs Lightning
RGB	Lightning
Actifs	Paiements
Smart contracts	HTLC
Validation locale	Canaux
RGB vs Liquid
RGB	Liquid
Trustless	Fédéré
Off-chain data	Sidechain
Privacy élevée	Privacy modérée
8. Cas d’usage RGB
Tokens

stablecoins

tokens utilitaires

NFTs

objets numériques

identités

Smart contracts

règles personnalisées

logique conditionnelle

Finance

prêts

produits dérivés

9. Architecture technique
Composants

Bitcoin (base layer)

Taproot (commitments)

RGB library / SDK

Wallet RGB

Architecture simplifiée

Frontend (wallet)
→ RGB SDK
→ Bitcoin node

10. Wallet RGB

Un wallet RGB doit :

stocker les données off-chain

vérifier les états

gérer les consignments

Contraintes

perte de données = perte de preuve

nécessité de sauvegarde fiable

11. Avantages de RGB
Scalabilité

Très peu de données on-chain

Confidentialité

Seuls les participants voient les données

Flexibilité

Smart contracts avancés

Compatibilité

Aucune modification de Bitcoin requise

12. Limites de RGB
Complexité

Difficile à comprendre et à implémenter

Expérience utilisateur

Encore peu mature

Adoption

Écosystème encore en développement

13. RGB et Lightning

RGB peut être combiné avec Lightning.

Objectif

Permettre :

transfert rapide

actifs personnalisés

Exemple

stablecoin RGB

transféré via Lightning

Résultat

Paiements instantanés avec des actifs non natifs Bitcoin

14. Vision globale

Bitcoin devient une stack :

Bitcoin : sécurité
Lightning : paiements
RGB : actifs et smart contracts

15. Compréhension finale

RGB propose :

de déplacer la logique hors de la blockchain

de garder Bitcoin comme couche de sécurité

16. Application concrète

Dans un système comme Izichange :

dépôt d’actif RGB

validation côté client

swap vers Lightning

paiement instantané

Conclusion

RGB est une évolution importante de l’écosystème Bitcoin :

il apporte les fonctionnalités des smart contracts

sans compromettre la sécurité de Bitcoin

en améliorant fortement la scalabilité et la confidentialité