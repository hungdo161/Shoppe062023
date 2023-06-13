


const modalElement = document.querySelector(".modal")
const registerElement = document.querySelector(".js-header_nav-support-register");
const registerModal = document.querySelector(".js-register_modal");


function showLoginModal () {
    modalElement.classList.add("open");
    registerModal.classList.add("open");
}

registerElement.addEventListener("click",showLoginModal);