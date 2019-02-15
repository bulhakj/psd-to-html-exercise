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

$('#content').scroll(function() {
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
// function addEventListenerList(menuItems, event, fn) {
//   for (let i = 0, len = menuItems.length; i < len; i++) {
//     menuItems[i].addEventListener(event, fn, false);
//     console.log('done');
//   }
// }
menuItems.forEach.call(menuItems, function(e) {e.addEventListener('click', function() {
  items.className = "menu-items-visible menu-items-ham";
  console.log('test1');
}, false)})

// menuItems.addEventListener("click", () => {
//   items.className = "menu-items-visible menu-items-ham";
// })




