// Desafio 04 - Curso em Javascript com o prof.Gustavo Guanabara.

function calcular() {
    //criando variáveis
    var produto = prompt('► Que produto você está comprando? ')

    alert('► Use PONTO para os valores digitados!')

    var valor = Number.parseFloat(prompt(`► Quanto custa o ${produto} que será comprado?`))

    var dinheiro = Number.parseFloat(prompt(`► Quanto em dinheiro você deu para pagar o ${produto}?`))

    //calculando troco
    var troco = dinheiro - valor


    window.alert(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
    ♦ Você comprou o ${produto} que custa R$ ${valor}
    ♦ Deu de entrada R$ ${dinheiro} em dinheiro
    ♦ Vai receber de troco R$ ${troco.toFixed(2)}
    ☺ Volte sempre!!!
    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
}//fim-calcular