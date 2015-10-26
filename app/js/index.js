var indexModule = (function () {

	var init = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.service__link').on('click', _showPopup);
	};

	var _showPopup = function (e) {
		e.preventDefault();
		var bPopup = $('#project-popup'),
            form = bPopup.find('.form');
		bPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			modalColor: '#7E8C99',
			opacity: 0.75,
		});
	};

  	
	return {
		init: init
	};

})();

indexModule.init();
