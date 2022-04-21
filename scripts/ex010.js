/* =================================
            AULA 11 - ex010
    =================================
*/

function calcular() {
    //atribuindo valor a variável
    var txtVEL = document.querySelector('input#txtvel')
    var resultado = document.querySelector('div#resultado')

    //conversão de tipo
    var vel = Number(txtVEL.value)

    //saída - resultado
    resultado.innerHTML = `<p>Sua velocidade atual é = <strong>${vel} km/h</strong></p>`

    //condicional simples
    if (vel > 60) {
        resultado.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade</p>`
    }
    resultado.innerHTML += `<p>Dirija com cinto de segurança!</p>`
}