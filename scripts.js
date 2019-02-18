$(document).ready(function(){
  $(".menu-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$('a.back-to-top').click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
  return false;
});

$('#scroll-to-top').scroll(function() {
  var total = $(this)[0].scrollHeight - $(this).height();
  var opacity = $(this).scrollTop() / total;
  $('#scroll-to-top').css('opacity', opacity);
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

const items = document.querySelector("#menu-list");
function menu() {
    if(items.className === "menu-items-visible menu-items-ham") {
        items.className = "menu-items-ham";
    } else {
        items.className = "menu-items-visible menu-items-ham";
    }
}

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", menu);

const menuItems = document.querySelectorAll(".menu-link");
menuItems.forEach.call(menuItems, function(e) {e.addEventListener('click', function() {
  items.className = "menu-items-visible menu-items-ham";
}, false)})




