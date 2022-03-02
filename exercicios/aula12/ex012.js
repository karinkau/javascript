/* ==============================================
    AULA 12 - CONDIÇÕES - parte 2 - ex012.js
    Nesse exercício usou-se a extensão Node Exerc

    console.log() → é usado apenas no NODE.js

    Verificar se é dia - tarde ou noite
    ==============================================
*/

//pegar apenas a hora atual do sistema
var agora = new Date()
//como pegar 00:00:00 ?

var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

