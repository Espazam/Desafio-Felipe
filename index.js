let nickname = "Espazam "
let XP = 1000

let nivel;

if (XP < 1000) {
  nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
  nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
} else if (XP >= 6.001 && XP <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7.001 && XP <= 8000) {
    nivel = "Platina";
} else if (XP >= 8.001 && XP <= 10.000) {
    nivel = "Imortal";
} else if (XP >= 10.001) {
    nivel = "Radiante";
}

console.log ("O Herói de nome " + nickname + " está no nível de " + nivel)