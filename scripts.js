$(document).ready(function scrolling() {

    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
  });

$('a.back-to-top').click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
  return false;
});

let topBtn = document.getElementById("scroll-to-top");

window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function menu() {
    const items = document.querySelector("#menu-list");
    if(items.className === "menu-items-visible menu-items-ham") {
        items.className = "menu-items-ham";
    } else {
        items.className = "menu-items-visible menu-items-ham";
    }
}

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", menu);




