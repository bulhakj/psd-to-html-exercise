function menu() {
    var items = document.querySelector("#menu-list");
    console.log(items.className);
    if(items.className === "menu-items-visible menu-items-ham") {
        items.className = "menu-items-ham";
        console.log("if");
    } else {
        items.className = "menu-items-visible menu-items-ham";
        console.log("else");
    }  
}

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", menu);