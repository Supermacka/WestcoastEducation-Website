// Reference items
const html = document.querySelector('html');
const openMenuButton = document.querySelector('#openMobileMenu');
const closeMenuButton = document.querySelector('#closeMobileMenu');
const mobileNavOverlay = document.querySelector('.topnav-overlay');

//Mobile menu
openMenuButton.addEventListener('click', () =>
{
    html.style.overflow = "hidden";
    mobileNavOverlay.classList.remove("hide-overlay");
    mobileNavOverlay.style.height = "100%";
})
closeMenuButton.addEventListener('click', () =>
{
    html.style.overflow = "visible";
    mobileNavOverlay.classList.add("hide-overlay");
    mobileNavOverlay.style.height = "0%";
})
