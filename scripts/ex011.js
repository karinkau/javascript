/* =================================
            AULA 11 - ex011
    =================================
*/

//Função Limpar campos
function limpar() {
    txtpais.value = ""
    resultado.innerHTML = ""
    nacio.innerHTML = ""
}//fim-limpar

//Função Fechar Aba/ janela do navegador
function fechar() {
    window.close()
}//fim-fechar

//Função Verificar nacionalidade
function verificar() {
    //atribuindo valor a variável
    var txtPAIS = document.querySelector('input#txtpais')
    var lbnacio = document.querySelector('div#nacio')
    var lbresultado = document.querySelector('div#resultado')

    //conversão de tipo
    var pais = String(txtPAIS.value.toUpperCase()) 

    //saída - resultado
    lbnacio.innerHTML = `<p>Você é do = <strong>${pais}</strong></p>`

    //condicional composta
    if (pais=='BRASIL') {
        resultado.innerHTML = 'Você é brasileiro!'
    } else {
        resultado.innerHTML = 'Você é estrangeiro!'
    }
}//fim-verificar