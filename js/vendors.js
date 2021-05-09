new Swiper('.swiper-container', {

	slidesPerView: 4,
	spaceBetween: 40,
	// loop: true,
	// autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});






let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__ul');
let body = document.querySelector('body');
headerBurger.addEventListener("click", burger);
function burger() {
	headerMenu.classList.toggle('_active');
	body.classList.toggle('_lock');
};


let headerCover = document.querySelector('.header__cover');

// let = document.querySelector (.)


window.addEventListener('scroll', windowsScroll);
function windowsScroll() {
	if (pageYOffset > 90) {
		headerCover.classList.add('_scroll');
	}
	else {
		headerCover.classList.remove('_scroll');
	}
}