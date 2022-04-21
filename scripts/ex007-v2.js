/* =================================
            AULA 10 - ex007-v2
    =================================
*/

function limpar() {
    resultado.innerText = ' '
    txtn1.value = ' '
    txtn2.value = ' '
}//fim-limpar

function somar() {
    //atribuindo valor as varáveis
    var N1 = window.document.getElementById('txtn1')
    var N2 = window.document.getElementById('txtn2')
    var resultado = window.document.getElementById('resultado')

    //conversão de tipo
    var n1 = Number(N1.value)
    var n2 = Number(N2.value)

    //Soma dos valores
    var soma = n1 + n2 

    //Resultado final
    resultado.innerText = `${soma}`
}//fim-somar

function subtrair() {
    //atribuindo valor as varáveis
    var N1 = window.document.getElementById('txtn1')
    var N2 = window.document.getElementById('txtn2')
    var resultado = window.document.getElementById('resultado')

    //conversão de tipo
    var n1 = Number(N1.value)
    var n2 = Number(N2.value)

    //Soma dos valores
    var subtraido = n1 - n2 

    //Resultado final
    resultado.innerText = `${subtraido}`
}//fim-subtrair

function multiplicar() {
    //atribuindo valor as varáveis
    var N1 = window.document.getElementById('txtn1')
    var N2 = window.document.getElementById('txtn2')
    var resultado = window.document.getElementById('resultado')

    //conversão de tipo
    var n1 = Number(N1.value)
    var n2 = Number(N2.value)

    //Soma dos valores
    var multiplicado = n1 * n2 

    //Resultado final
    resultado.innerText = `${multiplicado}`
}//fim-multiplicar

function dividir() {
    //atribuindo valor as varáveis
    var N1 = window.document.getElementById('txtn1')
    var N2 = window.document.getElementById('txtn2')
    var resultado = window.document.getElementById('resultado')

    //conversão de tipo
    var n1 = Number(N1.value)
    var n2 = Number(N2.value)

    //Soma dos valores
    var dividido = n1 / n2 

    //Resultado final
    resultado.innerText = `${dividido}`
}//fim-subtrair

//evento mouse move +
var mais = window.document.getElementById('somar')
mais.addEventListener('mouseenter',dentroMais)
mais.addEventListener('mouseout',foraMais)
function dentroMais(){
    mais.style.background = 'gold'
}
function foraMais(){
    mais.style.background = 'goldenrod'
}

//evento mouse move -
var menos = window.document.getElementById('subtrair')
    menos.addEventListener('mouseenter',dentroMenos)
    menos.addEventListener('mouseout',foraMenos)
function dentroMenos(){
    menos.style.background = 'gold'
}
function foraMenos(){
    menos.style.background = 'goldenrod'
}

//evento mouse move *
var vezes = window.document.getElementById('multiplicar')
    vezes.addEventListener('mouseenter',dentroVezes)
    vezes.addEventListener('mouseout',foraVezes)
function dentroVezes(){
        vezes.style.background = 'gold'
}
function foraVezes(){
    vezes.style.background = 'goldenrod'
}

//evento mouse move /
var dividi = window.document.getElementById('dividir')
dividi.addEventListener('mouseenter',dentroDividi)
dividi.addEventListener('mouseout',foraDividi)
function dentroDividi(){
    dividi.style.background = 'gold'
}
function foraDividi(){
    dividi.style.background = 'goldenrod'
}

//evento mouse move limpar
var limpo= window.document.getElementById('limpar')
limpo.addEventListener('mouseenter',dentroLimpo)
limpo.addEventListener('mouseout',foraLimpo)
function dentroLimpo(){
    limpo.style.background = 'red'
}
function foraLimpo(){
    limpo.style.background = 'firebrick'
}