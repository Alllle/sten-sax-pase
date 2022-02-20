# sten-sax-pase

# Curl kommandon:
0261e1b7-1615-40f7-89a0-31963c26cdce
### Starta spel: 
curl -d '{"name":"lisa"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/games
### Gå med i spel:
curl -d '{"name":"pelle"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/games/:id/join

### Gör drag:
curl -d '{"name":"lisa", "move":"Rock"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/games/:id/move

curl -d '{"name":"lisa"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/games

curl -d '{"name":"pelle", "move":"Scissors"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/games/:id/move

### Kolla state:
curl http://localhost:8080/api/games/:id

# krav

* Ett oavgjort resultat räknas som ett resultat, det innebär att spelet inte
behöver startas om vid oavgjort.
* Ingen persisteringsmekanism är tillåten. Hela tillståndet (statet) ska hållas i
minnet.
* README ska finnas och innehålla exempel på hur applikationen kan köras
via något lämpligt verktyg, tex:


### Nedan visas ett exempel på vilka endpoints som API:et skulle kunna exponera för en klient:
* POST /api/games
* POST /api/games/{id}/join
* POST /api/games/{id}/move
* GET /api/games/{id}

där id kan vara ett UUID.

### Exempel: 

1. Spelare 1 skickar ett request för att skapa ett nytt spel och får tillbaka ett
spel-ID från servern.
2. Spelare 1 skickar ID till spelare 2 via valfri kommunikationskanal. (t.ex., mail,
slack eller telefax)
3. Spelare 2 ansluter sig till spelet med hjälp av ID.
4. Spelare 1 gör sitt drag (Sten).
5. Spelare 2 gör sitt drag (Sax).
6. Spelare 1 kollar tillståndet för spelet och upptäcker att hen vann.
7. Spelare 2 kollar tillståndet för spelet och upptäcker att hen förlorade.


## GET /api/games/{id}
Returnerar ett givet spels nuvarande tillstånd med ingående attribut. Tänk på vilka attribut som ska visas för vem och när.
## POST /api/games
Skapar ett nytt spel. Ange spelarnamn i request-body:

{
"name": "Lisa"
}
## POST /api/games/{id}/join
Ansluter till ett spel med givet ID. Ange spelarnamn i request-body:

{
"name": "Pelle"
}
## POST api/games/{id}/move
Gör ett drag. Ange namn och drag i request-body:

{
"name": "Lisa",
"move": "Rock"
}
