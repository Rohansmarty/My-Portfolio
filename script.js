document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(drop){
    drop.addEventListener('mouseenter', function() {
      if (window.innerWidth > 600) {
        this.querySelector('.dropdown-content').style.display = 'block';
      }
    });
    drop.addEventListener('mouseleave', function() {
      if (window.innerWidth > 600) {
        this.querySelector('.dropdown-content').style.display = 'none';
      }
    });
  });

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function(){
      navLinks.classList.toggle('open');
    });
  }
});

