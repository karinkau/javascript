/* ===========================================
    AULA 12 - CONDIÇÕES - parte 2 - ex011.js
    Nesse exercício usou-se a extensão Node Exerc

    console.log() → é usado apenas no NODE.js
    ===========================================
*/

//Declaração de variável
var idade = 100

//código simplificado

if (idade < 16) {
    console.log('Criança não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}