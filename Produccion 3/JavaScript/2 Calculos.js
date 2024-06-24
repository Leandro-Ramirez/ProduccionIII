const btnAbrir1 = document.querySelector("#btn-abrir-1");
const btnCerrar1 = document.querySelector("#btn-cerrar-1");
const modal1 = document.querySelector("#modal-1");

btnAbrir1.addEventListener("click",()=>{modal1.showModal();})
btnCerrar1.addEventListener("click",()=>{modal1.close();})