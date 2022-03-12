/*
   AULA 12 EX – parte de exercícios
   Exercício: ex015
   Arquivo: modelo.html
*/

function limpar() {
   txtAno.value = "'"
   resultado.innerHTML = "Preencha os dados acima para ver o resultado."
   
   //Como fazer o radio button voltar a posição inicial de marcação masculino??
}//fim-limpar


function fechar() {
   window.close()
}//fim-fechar


function verificar() {
   //data atual
   var data = new Date()

   //ano atual com 4 dígitos
   var anoAtual = data.getFullYear() 

   //ano digitado no form
   var ano = document.getElementById('txtAno')

   //resultado
   var resultado = document.querySelector('div#resultado')

   //checar se ano foi digitado
  if (ano.value.length == 0 || Number(ano.value) > anoAtual) {
     // ==0 → vazio
      window.alert('[ERRO] \n► Verifique os dados e tente novamente!')
   } else {
      //selecionar por name → 0:masc e 1:fem
      var sexo = document.getElementsByName('radSex')
      //calcular idade
      var idade = anoAtual - Number(ano.value)
      //masc ou fem
      var genero = ' '

      //mostrar foto dinâmica
      var img = document.createElement('img')
      img.setAttribute('id','foto')

      //verificar sexo
      if (sexo[0].checked){
         genero = 'Homem'
         //checar fase da idade
         if (idade >= 0 && idade < 13){
            //criança
            img.setAttribute('src' , './foto/bebe-masc.png')
         } else if (idade >=13 && idade <21) {
            //jovem
            img.setAttribute('src','./foto/jovem-masc.png')
         } else if (idade >=21 && idade < 50) {
            //adulto
            img.setAttribute('src','./foto/adulto-masc.png')
         } else {
            //idoso
            img.setAttribute('src','./foto/idoso-masc.png')
         }
      } else if (sexo[1].checked) {
         genero = 'Mulher'
         //checar fase da idade
         if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','./foto/bebe-fem.png')
         } else if (idade >=10 && idade <21) {
            //jovem
            img.setAttribute('src','./foto/jovem-fem.png')
         } else if (idade >=21 && idade < 50) {
            //adulto
            img.setAttribute('src','./foto/adulto-fem.png')
         } else {
            //idoso
            img.setAttribute('src','./foto/idoso-fem.png')
         }
      }//fim-sex=1

      //centralizar resposta
      resultado.style.textAlign = 'center'
      resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
      //mostrar foto
      resultado.appendChild(img)
   }//fin-else
}//fim-verificar

