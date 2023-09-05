function hamburgerMenu() {
    const menuOpenButton = document.querySelector('#hamburger-menu');
    const menuContainer = document.querySelector('.hamburger-menu');
    const menuCloseButton = document.querySelector('.hamburger-menu_box_close-button');
    const overlay = document.querySelector('.overlay');
    const menuBox = document.querySelector('.hamburger-menu_box');

    menuOpenButton.addEventListener('click', toggleMenuContainerActive);
    menuCloseButton.addEventListener('click', toggleMenuContainerActive);
    overlay.addEventListener('click', toggleMenuContainerActive);

    function toggleMenuContainerActive() {
        menuContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        menuBox.classList.toggle('active');
    }
}

export { hamburgerMenu };