'use strict'

var box = document.getElementById('container-row');
var boxRepeat = document.getElementById('container-rowdos');

function isScrolledIntoView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
  }
  
  function animateIfVisible() {
    if (isScrolledIntoView(box, boxRepeat)) {
        box.classList.add('animacion-default');
        setTimeout(() => {
            boxRepeat.classList.add('animacion-default');
        }, 1000);
      window.removeEventListener('scroll', animateIfVisible);
    }
  }
  
  window.addEventListener('scroll', animateIfVisible);
  animateIfVisible();

function animar(tipoBtn){
    console.log(tipoBtn);
    if (tipoBtn == 'box') {
        box.classList.add('animacion-salida'); 
    
        setTimeout(() => {
            box.classList.add('animacion-entrada'); 
        }, 1000);
    }else{
        boxRepeat.classList.add('animacion-salida'); 
    
        setTimeout(() => {
            boxRepeat.classList.add('animacion-entrada'); 
        }, 1000);
    }
}

