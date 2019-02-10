function menu() {
    var items = document.querySelector("#menu-list");
    if(items.className === "menu-items-visible menu-items-ham") {
        items.className = "menu-items-ham";
    } else {
        items.className = "menu-items-visible menu-items-ham";
    }  
}

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", menu);