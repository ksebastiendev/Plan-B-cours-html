1. Philosophie de conception de Bitcoin
1.1 Script non Turing complet

Bitcoin Script est volontairement limité :

pas de boucles

pas de récursion

Objectifs :

exécution déterministe

éviter les attaques par déni de service

garantir la vérification rapide par tous les nœuds

1.2 Désactivation des opcodes

Satoshi a désactivé plusieurs opcodes pour :

éviter des comportements imprévisibles

réduire les vulnérabilités

Conclusion :
Bitcoin privilégie la sécurité et la stabilité plutôt que la complexité.

2. Cryptographie appliquée à Bitcoin
2.1 ECDSA et Schnorr

ECDSA utilisé initialement (Schnorr était breveté)

Schnorr (introduit plus tard avec Taproot) permet :

agrégation de signatures

meilleure confidentialité

scripts plus compacts

2.2 HASH160

Formule :
HASH160 = RIPEMD160(SHA256(data))

Pourquoi :

réduit la taille des adresses

garde une sécurité suffisante

2.3 Arbre de Merkle

Permet de prouver qu’une transaction est incluse dans un bloc avec :

le hash de la transaction

les hashes voisins (preuve de Merkle)

Avantage :

vérification légère (SPV)

3. Consensus et sécurité
3.1 Ajustement de difficulté

ajuste la difficulté du minage tous les 2016 blocs

maintient un temps moyen de 10 minutes

Sans cela :

production de blocs trop rapide

inflation incontrôlée

3.2 Proof of Work

nécessite un coût énergétique réel

protège contre les attaques

Contrairement au Proof of Stake :

évite le problème du "nothing at stake"

3.3 Immutabilité

La sécurité repose sur :

preuve de travail cumulée

chaîne la plus longue

Modifier un bloc implique de recalculer tous les suivants.

4. Réseau Bitcoin (P2P)
4.1 Réseau à commutation de paquets

transmission rapide et flexible

faible latence

Avantage :

propagation rapide des blocs et transactions

4.2 Résilience du réseau

chaque nœud a plusieurs connexions

pas de point central

Résultat :

résistance aux attaques réseau (ex : hijacking)

4.3 Mempool

chaque nœud maintient son propre mempool

pas de synchronisation globale

Important :

le mempool ne fait pas partie du consensus

5. Transactions et scripts avancés
5.1 SegWit

sépare signatures et données

empêche la malléabilité des transactions

Essentiel pour :

Lightning Network

5.2 Taproot

permet des signatures agrégées

cache la complexité des scripts

Avantages :

confidentialité

réduction des coûts

efficacité

5.3 HTLC (Hash Time Locked Contract)

Composé de :

un hash lock

un time lock

Permet :

paiements conditionnels

atomic swaps

Lightning Network

6. Lightning Network
6.1 Nature du système

réseau off-chain

pas de consensus global

innovation rapide

6.2 États de canal

chaque mise à jour dépend de la précédente

non parallélisable

6.3 Protection contre la triche

timelocks asymétriques

pénalités si ancien état publié

6.4 Gossip

publie :

capacité totale des canaux

ne publie pas :

balances internes

7. Liquid (sidechain Bitcoin)
7.1 Caractéristiques

blocs rapides (~1 minute)

pas de Replace-by-Fee

finalité rapide

7.2 Confidential Transactions

masque :

montants

types d’actifs

7.3 Peg-in (102 confirmations)

protège contre les réorganisations de chaîne

sécurise le transfert BTC → Liquid

7.4 Dépendance aux services

Lightning ↔ Liquid via swap (ex : Boltz)

si le service tombe :

les swaps échouent temporairement

8. RGB (client-side validation)
8.1 Principe

validation côté client

Bitcoin utilisé comme ancrage

8.2 Scalabilité

chaque utilisateur valide uniquement ses données

pas de charge globale

8.3 Lien avec les UTXO

les assets sont attachés aux UTXO

peuvent utiliser des UTXO anciens

8.4 Transferts partiels

création d’un output de "change"

similaire à Bitcoin

8.5 Confidentialité

les mineurs ne voient pas les transferts RGB

8.6 Validation complète

Le receveur doit :

vérifier toute l’historique

éviter l’inflation frauduleuse

9. eCash (Chaumian / Cashu)
9.1 Fonctionnement

basé sur des signatures aveugles

le mint ne peut pas relier émission et dépense

9.2 Double dépense

empêchée via :

liste des tokens déjà dépensés

9.3 Centralisation

le mint peut :

faire de la réserve fractionnaire

risque de confiance

9.4 Dénominations

chaque valeur correspond à une clé publique différente

9.5 Frais obligatoires

sans identité :

seul moyen de limiter le spam

10. Interopérabilité et swaps
10.1 Atomic swaps

reposent sur :

même hash (preimage)

garantissent :

exécution atomique

10.2 Lightning comme couche d’interconnexion

relie :

Bitcoin

Liquid

eCash

10.3 Risques

scripts mal vérifiés → perte de fonds

mauvaise gestion des timelocks

11. Minage et économie
11.1 Stratum v2

redonne le contrôle aux mineurs

réduit la centralisation

11.2 Facturation réseau (95th percentile)

avantage pour trafic en pics

adapté au minage

11.3 Latence

haute latence (satellite) :

désavantage compétitif

12. Limites de scalabilité
12.1 Taille des blocs

Augmenter la taille :

augmente coût de validation

exclut les petits nœuds

12.2 Décentralisation

Bitcoin optimise :

sécurité

décentralisation

au détriment de :

débit pur

13. Principes économiques et philosophiques
13.1 Cypherpunks

Objectif :

monnaie sans permission

résistance à la censure

13.2 Bitcoin vs eCash

Bitcoin a réussi car :

système ouvert

convergence vers une monnaie dominante

13.3 Effet bouclier

La décentralisation de Bitcoin :

protège les services construits autour

Conclusion

Ce qu’il faut retenir absolument :

Bitcoin est conçu pour la sécurité avant tout

Le consensus doit être simple et déterministe

Les couches supérieures (Lightning, RGB, Liquid) apportent la scalabilité

La validation côté client est clé pour l’avenir (RGB)

Les systèmes centralisés (eCash) apportent de la performance mais introduisent du risque