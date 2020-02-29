new WOW().init();
jQuery(document).ready(function($) {
	$('.card').hover(function () {
			$(this).find('.card-img__sub').addClass('active-img');
			$(this).find('.btn--showmore').addClass('active-btn');
		}, function () {
			$(this).find('.card-img__sub').removeClass('active-img');
			$(this).find('.btn--showmore').removeClass('active-btn');
		}
	);
	$('.gallary-filter ul li').click(function () { 
		var _type = $(this).attr('type');
		console.log(_type);
		$('.products__detail').each(function () { 
			if($(this).hasClass(_type)){
				$(this).removeClass('hidden');
				$(this).addClass('bounceInUp').addClass('wow');
			}else{
				$(this).addClass('hidden');
				$(this).removeClass('bounceInUp').removeClass('wow');
			}
		});
	});
	
});