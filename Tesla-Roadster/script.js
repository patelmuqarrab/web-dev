const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-mobile');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close');
const backdrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-menu');

AOS.init();

menuBtn.addEventListener('click',sidebarOpen);
menuBtnMobile.addEventListener('click',sidebarOpen);

function sidebarOpen(){
    sidebar.style.right = "0";

    backdrop.style.display = "block";

    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 50);
    document.body.classList.add("sidebar-open-body");
}

closeButton.addEventListener('click', () =>{
    sidebar.style.right = "-20em";
    backdrop.style.opacity = "0";
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 300);
    document.body.classList.remove("sidebar-open-body");
});