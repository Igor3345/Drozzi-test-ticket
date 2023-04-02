/**
 * Модуль "Плавный переход к якорю"
 */

export const scrollToAnchor = () => {
	window.onresize = () => {
		header_height = document.querySelector('.js-header').clientHeight;
	}


	document.querySelectorAll('.js-to-anchor').forEach(anchor=>{
	
		anchor.addEventListener('click',function (e){
			let headerHeight = document.querySelector('.js-header').clientHeight;
			e.preventDefault();
			const id = this.getAttribute('href') ;
			const top = document.querySelector(id).getBoundingClientRect().y - (this.dataset.offset || 0) - headerHeight;
			window.scrollTo(0,pageYOffset+top);
		})
	})
};
