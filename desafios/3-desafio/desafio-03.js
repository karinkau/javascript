// Desafio 03 - Curso em Javascript com o prof.Gustavo Guanabara.

function verificar() {
    //criando variável e conversão de tipo
    var numero = Number.parseInt(prompt('Digite um número inteiro: '))

   //antecessor e sucessor
    antecessor = numero -1
    sucessor = numero +1

    window.alert(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
    ► Número digitado: ${numero} \n
    ☺ Antecessor: ${antecessor}\n
    ☺ Sucessor: ${sucessor} \n
    ☺ Em ordem: ${antecessor} - ${numero} - ${sucessor}
    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
}//fim-verificar