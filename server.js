const profileMenu = document.querySelector(".profile-menu-wrap");
const profile = document.querySelector(".nav-profile-img");

const showMore = document.querySelector("#showMoreLink");
const sidebarAct = document.querySelector(".sidebar-activity");


profile.addEventListener("click", () => {
    profileMenu.classList.toggle("open-menu");
    console.log("clicked");
});

showMore.addEventListener("click", () => {
    sidebarAct.classList.toggle("open-activity");
    if (sidebarAct.classList.contains("open-activity")) {
        showMore.innerHTML = "Show less <b>-</b>";
    }
    else {
        showMore.innerHTML = "Show More <b>+</b>";
    }
    
})
