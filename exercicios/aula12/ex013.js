/* ==============================================
    AULA 12 - CONDIÇÕES - parte 2 - ex013.js
    Nesse exercício usou-se a extensão Node Exerc

    console.log() → é usado apenas no NODE.js
    ==============================================
*/

//hora atual do sistema:
 var agora = new Date() 

 //dia da semana em número: de 0 a 6
 var diaSemana = agora.getDay() 
 /*
    Semana em JS
    0 → Domingo
    1 → Segunda
    2 → Terça
    3 → Quarta
    4 → Quinta
    5 → Sexta
    6 → Sábado
*/

console.log(`São ${agora} horas`)
console.log(`É ${diaSemana}`)

//Para esse caso é recomendado usar o switch e seus cases.

switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}

