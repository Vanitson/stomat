// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
				loop:true,
				nav:true,
				navText: ["<img src='images/arrow-slider-prev.svg'>", "<img src='images/arrow-slider-next.svg'>"],
				responsive:{
					992:{
						items:1,
						nav:true,
						dots: false,
					},
					320:{
						items:1,
						nav:false,
						dots:true,
					}
				}
		});
			
	});
	jQuery(function($){
		$(".number").mask("+380 99 - 99 - 99 - 999");
	 });

	 $(document).ready(function(){
		$(".owl-carousel .mobile-carousel").owlCarousel({
				loop:true,
				nav:true,
				navText: ["<img src='images/arrow-slider-prev.svg'>", "<img src='images/arrow-slider-next.svg'>"],
				responsive:{
					992:{
						items:1,
						nav:true,
						dots: false,
					},
					0:{
						items:1,
						nav:false,
						dots:true,
					}
				}
		});
	
			
	});
	
		$(".galery").owlCarousel({
				loop:true,
				nav:false,
				center: true,
				items:2,
				margin: 80,
				autoWidth: true,
				responsive:{
					0:{
						nav:false,
						dots:false,
					},
					992:{
						nav:false,
						dots:false,
					}
				},
		});
	

		$('#checkbox1').on('click', function(e) {
			$('.header_mnu').slideToggle({
				start: function() {
					$(this).css({
						display: "flex"
					});
				}
				
			});
			$('body').toggleClass('non-scroll');
		});
		$(window).on('load', function () {
			if ($(window).width() < 1280) {
				$('.services_list__title').on('click', function() {
					$('.services_list').slideDown()
					$('.main_list__item').slideUp()
				});
				$('.main_list__title').on('click', function() {
					$('.services_list').slideUp()
					$('.main_list__item').slideDown()
				});
			}
		  });

		$('.header_lang').click(function(e) {
			e.preventDefault();
			var lang = $(this).closest('.header_lang');
			lang.find('.header_lang__dropdown').slideToggle();
		});
		$(document).click(function(event) { 
			var $target = $(event.target);
			if(!$target.closest('.header_lang').length) {
				$('.header_lang__dropdown').slideUp();
			}        
		});
		var scrollPos = 0;
		$(window).scroll(function(){
		var st = $(this).scrollTop();
		if(st > 100) {
			if (st > scrollPos){
				$('.header').removeClass('floating')
			} else {
				$('.header').css({'position': 'fixed', 'top': '-130px'});
				$('.header').addClass('floating');
			}
			scrollPos = st;
		}

		});

		$('.causes_item .image-wrapper img').each(function(i){
			var row = $(this);
			setTimeout(function(){
				row.addClass('animation-rotate');
			}, 1500*i);
		});


});
			
