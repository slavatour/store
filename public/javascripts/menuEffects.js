$(document).ready(function () {
	
//slider animation
	$('.slider-description').mouseover(function () {
		$('.arrow-left').stop();
		$('.arrow-right').stop();
		$('.arrow-left').animate({
			left: '0px'
		},500)
		$('.arrow-right').animate({
			left: '1060px'
		},500);
	});

	$('.slider-description').mouseleave(function () {
		$('.arrow-left').stop();
		$('.arrow-right').stop();
		$('.arrow-left').animate({
			left: '-40px'
		},500)
		$('.arrow-right').animate({
			left: '1100px'
		},500);
	});

	var slederInterval = setInterval(function () {
		var $document = $(document);
		$document.queue(function() {
			slidEffect();
			$document.dequeue();
		});
	}, 10000);

	var slidEffect = function () {
		var index = 1*($('.slid-img:visible').attr('index'));
		var slidDivs = $('.slid-img');
		$('.slider-description').animate({
			top: '500px'
		},700, function () {
			$('.slider-description').animate({top: '400px'},700);
		});
		if (index == slidDivs.length-1) {
			$('.slid-img').last().fadeOut(2000);
			$('.slid-img').first().fadeIn(2000);
		} else {
			$('.slid-img:visible').last().fadeOut(2000);
			$('.slid-img').eq(1*index+1).fadeIn(2000);
		};
	}

	$('.slider').mouseover(function () {
		clearInterval(slederInterval);
	});

	$('.slider').mouseleave(function () {
	// 	var slederInterval = setInterval(function () {
	// 	var $document = $(document);
	// 	$document.queue(function() {
	// 		slidEffect();
	// 		$document.dequeue();
	// 	});
	// 	console.log($document);
	// }, 10000);
	});


	//slider for featured, latest and ets blocks
	$('.prev-btn').click(function () {
		var $document = $(document);
		var obj = $(this).parent().next();
		var objPosition = obj.css('left');
		$document.queue(function() {
			setTimeout(function () {
				if (obj.css('left') == '-1185px') {
					obj.animate({ left: '0px' }, 300);
				} else {
					obj.animate({ left: '-=237px' }, 300);
				}
				$document.dequeue();	
			},350);
		})
	});
	$('.next-btn').click(function () {
		var $document = $(document);
		var obj = $(this).parent().next();
		var objPosition = obj.css('left');
		$document.queue(function() {;
			setTimeout(function () {
				if (obj.css('left') == '0px') {
					obj.animate({ left: '-1185px' }, 300);
				} else {
					obj.animate({ left: '+=237px' }, 300);
				}
				$document.dequeue();	
			},350);
		})
	});
//slider for featured, latest and ets blocks------------


	// view products list
	$(".stripe-view").click(function () {
		var el = $('.products .product-box-dotted');
		var elPag = $('.pagination-products');
		el.fadeOut(200);
		elPag.fadeOut(200);
		setTimeout( function () {
			el.removeClass('product-box-dotted');
			el.removeClass('span3');
			el.addClass('product-box-striped');
			el.addClass('span12');
		},250);
		setTimeout( function () {
			el.fadeIn(200);
			elPag.fadeIn(200);
		},550);
	});
	$(".blocks-view").click(function () {
		var el = $('.products .product-box-striped');
		var elPag = $('.pagination-products');
		el.fadeOut(200);
		elPag.fadeOut(200);
		setTimeout( function () {
			el.removeClass('product-box-striped');
			el.removeClass('span12');
			el.addClass('product-box-dotted');
			el.addClass('span3');
		},250);
		setTimeout( function () {
			el.fadeIn(200);
			elPag.fadeIn(200);
		},550);
	});

	$('.small-product-photo').click(function () {
		var el = $(this);
		var elSrc = el.attr('src');
		var mainEl = $('.main-product-photo');
		var mainElSrc = mainEl.attr('src');
		mainEl.attr('src', elSrc);
	});



	// switch languages
	$('.lng').click(function () {
		var attrLng = $(this).attr('lng-data');
		window.location.search = attrLng;
	});

	//------------shopping cart submenu slide------------------------------
	$('.top-nav-bar-links').click(function () {
		var subClass = $(this).attr('sub-class');
		var el = $('.top-nav-submenu');
		var elSubClass = $('.top-nav-submenu').attr('sub');
		var elTop = el.css('top');
		el.children('div').css('display', 'none');
		if (elTop == "-35px") {
			el.attr('sub', subClass);
			$("."+elSubClass).css('display', 'block');
			onSliderMenu(el, 45);
		} else if (subClass == elSubClass) {
			onSliderMenu(el, -35);
		} else {
			onSliderMenu(el, -35);
			el.attr('sub', subClass);
			$("."+elSubClass).css('display', 'block');
			onSliderMenu(el, 45);
		}
	});

	var onSliderMenu = function (divForSlide, heightVal) {
		var $elem = $('.top-nav-submenu');
		$elem.animate({
			top: heightVal
		},1000, function (heightVal) {
			if(heightVal == -35) {
				$("."+elSubClass).css('display', 'none');
			}
		});
	};
	//------------shopping cart submenu slide end----------------------------- 


// ----------------rating stars----------------------------
	$('.rating .star').mouseover(function () {
		var stars = $('.rating .star');
		var starNumber = $(this).attr('data-number');
		starNumber = 4-starNumber;
		for (var i = 4; i >= starNumber; i--) {
			$(stars[i]).css('background-position', '0px 0px');
		};
	});

	$('.rating .star').mouseleave(function () {
		$('.rating .star').css('background-position', '0px -15px');
	});
// ----------------rating stars end----------------------------

// -----------------increase or decrease qty of products-----------------
	$('.qty-change button').click(function () {
		var changeValue = 1*$(this).attr('data-change');
		var oldValue = 1*$('#qty').attr('value');
		var newValue = oldValue + changeValue;
		if(newValue >= 1) {
			$('#qty').attr('value', newValue);
		} else {
			$('#qty').attr('value', 1);
		}
	});
// -----------------increase or decrease qty of products end-----------------


});