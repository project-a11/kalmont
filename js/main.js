const mobileNav = document.getElementById("mobile-nav");
const hamMenu = document.getElementById("menu-icon");

hamMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("visible");
    console.log("hi shit");
});
