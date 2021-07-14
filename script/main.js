var elHeaderStatic = document.querySelector('.site-header');
var elHeaderToggler = elHeaderStatic.querySelector('.site-header__toggler');

if(elHeaderToggler) {
  elHeaderToggler.addEventListener('click', function(){
    elHeaderStatic.classList.toggle('site-header--open');
  })
}