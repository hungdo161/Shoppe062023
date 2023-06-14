
// register modal

const registerModalElement = document.querySelector(".js-register_modal-wraper")
const registerElement = document.querySelector(".js-header_nav-support-register");
const registerModal = document.querySelector(".js-register_modal");
const closeRegisterModalBtn = document.querySelector(".js-register-confirm-back");

// login modal

const loginModalElement = document.querySelector(".js-login_modal-wraper")
const loginElement = document.querySelector(".header_nav-support-login");
const loginModal = document.querySelector(".js-login_modal");
const closeLoginModalBtn = document.querySelector(".js-login-confirm-back");


// show register modal
registerElement.addEventListener("click",function() {
    registerModalElement.classList.add("open");
    registerModal.classList.add("open");
});

// close register modal

closeRegisterModalBtn.addEventListener("click",function() {
    registerModalElement.classList.remove("open");
    registerModal.classList.remove("open");
});

// show login modal

loginElement.addEventListener("click",function() {
    loginModalElement.classList.add("open");
    loginModal.classList.add("open");
});


// close login modal

closeLoginModalBtn.addEventListener("click",function() {
    loginModalElement.classList.remove("open");
    loginModal.classList.remove("open");
})

// modal overlay click => hide modal

registerModalElement.addEventListener("click",function() {
    registerModalElement.classList.remove("open");
    registerModal.classList.remove("open");
})

loginModalElement.addEventListener("click",function () {
    loginModalElement.classList.remove("open");
    loginModal.classList.remove("open");
})

// stopPropagation for modal

registerModal.addEventListener("click",function(event){
    event.stopPropagation()
})


loginModal.addEventListener("click",function(event){
    event.stopPropagation()
})



// login modal and register modal convert

// convert register to login
const convertLoginBtn = document.querySelector(".js-register_modal-login");

convertLoginBtn.addEventListener("click",function() {
    registerModalElement.classList.remove("open");
    loginModalElement.classList.add("open");
    loginModal.classList.add("open");
});

// convert login to register

const convertRegisterBtn = document.querySelector(".js-login_modal-register");

convertRegisterBtn.addEventListener("click",function() {
    loginModalElement.classList.remove("open");
    registerModalElement.classList.add("open");
    registerModal.classList.add("open");
});