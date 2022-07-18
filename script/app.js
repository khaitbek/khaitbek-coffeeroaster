let elModalOpenBtn = document.querySelector("#plan__btn")
let elModalCloseBtn  = document.querySelector("#modal__checkout__btn");
let modal = document.querySelector("#modal");

elModalOpenBtn.addEventListener("click",(evt)=>{
    document.body.style.overflowY = "hidden";
    evt.preventDefault();
    modal.classList.remove("close")
    modal.showModal()
})

elModalCloseBtn.addEventListener("click",()=>{
    closeModal();
})

function closeModal(){
    document.body.style.overflowY = "visible";
    modal.classList.add("close");
    setTimeout(()=>{
        modal.close();
    },600)
}