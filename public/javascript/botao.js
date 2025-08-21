const burguer = document.querySelector('#burguer');
const menu = document.querySelector('.menu');

burguer.addEventListener('click', function(){
    menu.classList.toggle('ativo');

    
    if (menu.classList.contains('ativo')) {
        burguer.classList.replace('fa-bars', 'fa-x');
    } else {
        burguer.classList.replace('fa-x', 'fa-bars');
    }
})