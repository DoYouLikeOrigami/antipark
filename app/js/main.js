var mainModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.userConnection__button').on('click', _showPopup);
		$('.city__select').on('change', _changeCity);
		// indexHover without image
		$('.goods__item').hover(_scaleOut, _scaleIn);
	};

	var _showPopup = function (e) {
		e.preventDefault();
		var bPopup = $('.orderCall__popup');
		bPopup.bPopup({
			speed: 550,
			transition: 'slideDown',
			modalColor: '#7E8C99',
			opacity: 0.75,
		});
	};

	var _changeCity = function (e) {

		var $this = $(this),
			city = $this.val(),
			city__class = '.' + city + '-mail';

		$('.city-mail').addClass('hidden');
		$(city__class).removeClass('hidden');
	}

	var _scaleOut = function (e) {
		e.preventDefault;
		var child_link = this.firstChild,
			//nameSpan = '.goods__link[href="'+child_link.getAttribute('href')+'"] span';
	        nameSrc = 'img/goods/' + child_link.getAttribute('href').replace('html','jpg'),
	        nameImg = '.goods__item img[src="'+nameSrc+'"]';
		$(this).css('transform','scale(1.07)');
		$(nameImg).css('transform', 'scale(.934579439)');
		//$(nameSpan).css('transform', 'scale(.934579439)');        
	}

	var _scaleIn = function (e) {
		e.preventDefault;
		$('.goods__item img, .goods__item span').css('transform', 'scale(1)');
		$(this).css('transform','scale(1)');
	}

	var _createQtip = function (el) {
		
		var pos = {
			my: 'right center',
			at: 'left center'
			},
			text = el.attr('qtip-text');
	
		el.qtip({
			content: {
				text: text
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: pos,
			style: {
				classes: 'qtip qtip-rounded'
			}
			}).trigger('show');

	};

  	
	return {
		init: init
	};

})();

mainModule.init();
