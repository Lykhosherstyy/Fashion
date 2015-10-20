$(document).ready(function(){
	
	$(".menu-item a").click(function(){
		if(!$(this).hasClass('active')){
			$(".menu-item a").removeClass('active');
			$(this).addClass('active');
			$(".sub_menu").hide();
			$(".menu-item .fa").removeClass('fa-caret-down').addClass('fa-caret-right');
		}
	});
	$(".sub a").click(function(e){
		e.preventDefault();
		$(this).next().show();
		$(this).find('.fa').removeClass('fa-caret-right').addClass('fa-caret-down');
	});
});