const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".burger");
const popout = document.querySelector('.popout');
const closePopout = document.querySelector('.popout img');
const container = document.querySelector('.container');

if(window.innerWidth <= 400) {
    nav.classList.add("hidden");
    burgerMenu.classList.remove("hidden");
} else {
    nav.classList.remove("hidden");
    burgerMenu.classList.add("hidden");
}


window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 400) {
        nav.classList.add("hidden");
        burgerMenu.classList.remove("hidden");
    } else {
        nav.classList.remove("hidden");
        burgerMenu.classList.add("hidden");
    }
});
window.addEventListener('scroll',()=>{
   popout.style.top = `${window.scrollY}px`;
});

burgerMenu.addEventListener("click",()=>{
    popout.style.left = "100px";
    popout.classList.remove("hidden");
    container.style.filter = "blur(5px)";
})

closePopout.addEventListener('click',()=>{
   popout.style.left = "400px";
   popout.classList.add("hidden");
   container.style.filter = "";
});