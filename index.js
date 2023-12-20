let heroes = [
  {
    "name": "Elvis",
    "xp": 9000
  },
  {
    "name": "Samuel",
    "xp": 3100
  },
  {
    "name": "Luna",
    "xp": 6020
  }
]

let nivel

for (const hero of heroes) {
  if (hero["xp"] < 1000) {
    nivel = "Ferro"
   } else if (hero["xp"] >= 1001 && hero["xp"] <= 2000) {
    nivel = "Bronze"
   } else if (hero["xp"] >= 2001 && hero["xp"] <= 5000) {
    nivel = "Prata"
   } else if (hero["xp"] >= 6001 && hero["xp"] <= 7000) {
    nivel = "Ouro"
   } else if (hero["xp"] >= 7001 && hero["xp"] <= 8000) {
    nivel = "Platina"
   } else if (hero["xp"] >= 8001 && hero["xp"] <= 9000) {
    nivel = "Ascendente"
   } else if (hero["xp"] >= 9001 && hero["xp"] <= 10000) {
    nivel = "Imortal"
   } else {
    nivel = "Radiante"
   }
   
   console.log("O Heroi de nome " + hero["name"] + " está no nível de " + nivel)
}

