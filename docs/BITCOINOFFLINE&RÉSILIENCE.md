1. Principe fondamental
Une transaction Bitcoin = du texte signé

Une transaction Bitcoin n’est rien d’autre que :

une structure de données

sérialisée (hex)

signée avec une clé privée

Conséquence clé

Une transaction signée peut être transportée par n’importe quel canal

Exemples :

SMS

Bluetooth

Radio (LoRa)

QR code

fichier texte

clé USB

même papier

Point critique

Bitcoin n’a besoin d’internet que pour :

diffuser (broadcast)

être incluse dans un bloc

Pas pour créer la transaction.

2. Envoi de Bitcoin sans internet
2.1 Étape 1 : création de la transaction

Avec un wallet comme :

Sparrow

Specter

Electrum

Tu fais :

construire la transaction

signer (clé privée)

exporter en hex

2.2 Étape 2 : transmission
Bluetooth (mesh)

via BitChat

ou apps similaires

Fonctionnement :

chaque téléphone = nœud

message relayé de proche en proche

Radio (LoRa)

via MeshTastic

modules radio dédiés

Fonctionnement :

transmission longue distance

faible débit

fragmentation des données

2.3 Étape 3 : broadcast

Quelqu’un avec internet :

récupère la transaction

la diffuse au réseau Bitcoin

Résumé
Offline user → signed tx → transport → online node → Bitcoin network
3. Réseaux mesh (Bluetooth)
Principe

Réseau décentralisé sans serveur :

chaque appareil relaie

pas d’infrastructure centrale

Propriétés

portée : 10 à 100 mètres

latence faible

dépend de la densité humaine

Cas d’usage

manifestations

zones urbaines

coupures réseau

4. Réseaux radio (LoRa)
Matériel

module LoRa (ESP32 + radio)

antenne

batterie

Propriétés

portée : centaines de mètres à plusieurs km

débit très faible

latence élevée

Fonctionnement technique

transaction découpée en paquets

envoyée séquentiellement

reconstruite côté réception

Cas d’usage

zones rurales

catastrophes

réseaux indépendants

5. Cashu dans le contexte offline
5.1 Nature des tokens Cashu

Un token est :

une preuve cryptographique

signée par une mint

représentant des satoshis

Important

Le token est :

copiable

transférable

indépendant de la blockchain

5.2 Envoi offline

Contrairement à Bitcoin classique :

pas besoin de broadcast

pas besoin de nœud

Flow
User A → token → User B (Bluetooth / radio)
User B → plus tard → redeem (internet)
6. Encodage en emojis
Principe

Un token Cashu est :

une longue string

Exemple :

cashuAeyJhbGciOi...
Transformation

encodage base → mapping vers emojis

compression possible

Résultat

l’emoji devient porteur de valeur

transport discret

Important

L’emoji ne contient pas la valeur

Il contient :

une représentation du token

7. Risque principal : double spending offline
Problème

Le token est copiable.

Donc :

Alice envoie à Bob

Alice garde une copie

Risque

Premier à redeem gagne.

Nature du problème

C’est un problème de :

synchronisation

absence de validation en temps réel

Atténuation

redeem rapide

confiance minimale

petites valeurs

8. Rôle de la Mint (Cashu)
Fonction

garde les fonds

émet les tokens

valide les redemptions

Nature

C’est un point de confiance.

Comparaison
Système	Confiance
Bitcoin	aucune
Lightning	faible
Cashu	élevée (mint)
9. Résilience offline : pourquoi c’est crucial
9.1 Problèmes actuels

dépendance internet

dépendance énergie

censure réseau

9.2 Objectif Bitcoin

Permettre la souveraineté même en conditions dégradées

9.3 Scénarios critiques

blackout électrique

guerre

coupure internet

surveillance étatique

9.4 Solutions combinées
Situation	Solution
pas internet court terme	Bluetooth
longue distance	LoRa
paiement instant	Cashu
final settlement	Bitcoin
10. Architecture complète offline
Flow combiné
Wallet → signed tx / token
↓
Transport (Bluetooth / LoRa / SMS)
↓
Receiver
↓
Option 1: broadcast Bitcoin
Option 2: redeem Cashu
11. Comparaison des méthodes offline
Bitcoin transaction

trustless

nécessite broadcast

plus lourd

Cashu

simple

instant

nécessite confiance

Conclusion

Bitcoin = finalité

Cashu = UX offline rapide

12. Nouvelle couche de l’écosystème

Tu peux maintenant voir ça comme :

Bitcoin = settlement layer
Lightning = payment layer
Cashu = offline / privacy layer
RGB = asset layer
13. Ce que tu dois retenir
Technique

une transaction = texte signé

transport indépendant du réseau

validation différée possible

Produit

offline UX possible

mesh networking important

hybrid system nécessaire

Stratégique

Le futur de Bitcoin inclut des modes de fonctionnement sans internet

14. Application pour ton contexte

Dans un produit comme Izichange :

Mode normal

Lightning

on-chain

Mode dégradé

Cashu tokens

Bluetooth exchange

Mode extrême

LoRa broadcast

delayed settlement

Conclusion globale

Ce que tu viens de voir complète parfaitement les autres modules :

Lightning → rapidité

RGB → actifs

Cashu → cash privé

Offline transport → résilience