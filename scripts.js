$(document).ready(function () {
  $(".menu-link").on("click", function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("a.back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    1000
  );
  return false;
});

const topBtn = document.getElementById("scroll-to-top");

const scrollFunction = () => {
  if ($(window).width() >= 750) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  } else {
    topBtn.style.display = "none";
  }
}

window.addEventListener("scroll", scrollFunction);
const menuWrapper = document.querySelector(".menu");
const items = document.querySelector("#menu-list");
const hamburgerAnimation = document.getElementById("hamburger-icon");

// zrobic funckje menu lepiej
function menu() {

  if (items.className === "menu-items-visible menu-items-ham") {
    menuWrapper.classList.add("menu-open");
    items.className = "menu-items-ham";
  } else {
    items.className = "menu-items-visible menu-items-ham";
    menuWrapper.classList.remove("menu-open");
  }
}

const handleClose = (x) => {
  x.classList.toggle("change");
}

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", menu);

const menuLinks = document.querySelectorAll(".menu-items-opt");
menuLinks.forEach.call(menuLinks, (e) => {
  e.addEventListener("click", () => {
    menu();
    hamburgerAnimation.classList.remove("change");
  }, false)
})
