document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(drop){
    drop.addEventListener('mouseenter', function() {
      this.querySelector('.dropdown-content').style.display = 'block';
    });
    drop.addEventListener('mouseleave', function() {
      this.querySelector('.dropdown-content').style.display = 'none';
    });
  });
});
