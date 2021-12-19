(function () {
    const sidebar = document.querySelector(".sidebar");
    const sidebarHeaderTitle = document.querySelector(".sidebar__title-container");
    const sidebarUserInfo =  document.querySelector(".sidebar__user-info");
    const sidebarItemTitle = document.querySelectorAll(".sidebar__item-title");

    const switchButton = document.querySelector(".sidebar__button");

    switchButton.addEventListener('change', (e) => {
        if (switchButton.checked === true) {
            sidebar.classList.remove("sidebar--minimized");
            setTimeout(() => {
                sidebarHeaderTitle.classList.remove("sidebar__element--minimized");
                sidebarUserInfo.classList.remove("sidebar__element--minimized");
                sidebarItemTitle.forEach(element => {
                element.classList.remove("sidebar__element--minimized");
            });
            }, 250);
        } else {
            sidebar.classList.add("sidebar--minimized");
            sidebarHeaderTitle.classList.add("sidebar__element--minimized");
            sidebarUserInfo.classList.add("sidebar__element--minimized");
            sidebarItemTitle.forEach(element => {
            element.classList.add("sidebar__element--minimized");
            });
        }
    })
})();