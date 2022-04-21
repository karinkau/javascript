/* =================================
            AULA 10 - ex006
    =================================
*/

 //variável escopo global
 var interaja = window.document.getElementById('area')

 //disparar eventos em JS - prestar atenção nos eventos:
 interaja.addEventListener('click',clicar)
 interaja.addEventListener('mouseenter',entrar)
 interaja.addEventListener('mouseout',sair)

 function clicar() {
     interaja.innerText = 'Clicou'
     interaja.style.background = 'darkorange'
 }
 function entrar(){
     interaja.innerText = 'Entrou'
     interaja.style.background = 'blue'
 }
 function sair(){
     interaja.innerText = 'Saiu'
     interaja.style.background = 'darkgreen'
 }