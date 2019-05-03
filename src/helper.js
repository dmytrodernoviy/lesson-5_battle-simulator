export default function randomInteger(min, max) { // метод для рандомизации
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}