/*
   AULA 12 EX – parte de exercícios
   Exercício: ex014
   Arquivo: modelo.html
*/

function carregar() {
   //variáveis
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')

   //data atual e hora atual
   var data = new Date()
   var hora = data.getHours()

   //imagem correspondente a hora
   if (hora >=0 && hora <12) {
      //boa dia
      msg.innerHTML = `Bom dia! <br> Agora são ${hora} horas.`
      imagem.src = './imagens 250-250/manha-circle-250.png'
      document.body.style.background = '#0082CE'
   } else if (hora >=12 && hora <18) {
      //boa tarde
      msg.innerHTML = `Boa tarde! <br> Agora são ${hora} horas.`
      imagem.src = './imagens 250-250/tarde-circle-250.png'
      document.body.style.background = '#C06900' 
   } else {
      //boa noite
      msg.innerHTML = `Boa noite! <br> Agora são ${hora} horas.`
      imagem.src = './imagens 250-250/noite-circle-250.png'
      document.body.style.background = '#46556A'
   }
}//fim-carregar

