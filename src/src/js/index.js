/* 

OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal


OBJETIVO 1 - quando o usuario clicar no botão de veja  o trailer, devemos abrir a modal com o video do trailer
- passo 1 dar um jeito de pegar o elemento que representao o botão na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no botão
- passo 3 - dar um jeito de pegar o elemento da modal do js
- passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
- passo 1 dar um jeito de pegar o elemento que representao o botão na tela usando o js
- passo 2 - dar um jeito de identificar quando o usuario clicar no X
- passo 3 - fechar a modal

*/

//passo 1 dar um jeito de pegar o elemento que representao o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video"); 
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

//passo 2 - dar um jeito de identificar quando o usuario clicar no botão
botaoTrailer.addEventListener("click", ()=> {
    // console.log("clicou no botao veja o trailer");
//passo 4 - abrir a modal na tela (Passo 2)
alternarModal();
video.setAttribute("src", linkDoVideo);
});
//passo 3 - dar um jeito de pegar o elemento da modal do js


// OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
// - passo 1 dar um jeito de pegar o elemento que representao o botão na tela usando o js
// console.log('botaoFecharModal');
//passo 2 - dar um jeito de identificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click", () => {
    //passo 3 - fechar a modal
    alternarModal();
    video.setAttribute("src", "");
    });




