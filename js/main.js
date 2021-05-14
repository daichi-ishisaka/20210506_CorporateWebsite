document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("menu").addEventListener("click", function (){
    this.classList.toggle("active");
    document.getElementById("menu-nav").classList.toggle("in");
  })
});