


document.addEventListener('DOMContentLoaded', function() {
    const iconNav = document.getElementById('icon-nav')
    const navbar = document.querySelector('.navbar-nav ul');


    iconNav.onclick = function() {
             navbar.classList.toggle('dropdown')
     }
})