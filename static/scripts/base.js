$(document).ready(function(){
	
	//Modal
	$('.launch').click(function(e) {
		e.stopPropagation;
		$('.modal').addClass('modal-show');
	});
	$('.modal-close').click(function(e) {
		e.stopPropagation;
		$('.modal').removeClass('modal-show');
	})
	//button Ripple effect
	$('.button').click(function(e){
		e.preventDefault();
	})
	 $('.button').mousedown(function (e) {
			var target = e.target;
			var rect = target.getBoundingClientRect();
			var ripple = target.querySelector('.ripple');
			$(ripple).remove();
			ripple = document.createElement('span');
			ripple.className = 'ripple';
			ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
			target.appendChild(ripple);
			var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
			var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
			ripple.style.top = top + 'px';
			ripple.style.left = left + 'px';
			return false;
	});

});
