

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add('active');
    bar.style.display = 'none';
    close.style.display = 'initial';
  })
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove('active');
    bar.style.display = 'initial';
    close.style.display = 'none';
  });
}

var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 5,
  perMove: 1,
  
} );
splide.mount();

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("#header").css("background" , "blue");
	  }

	  else{
		  $("#header").css("background" , "#333");  	
	  }
  })
})