$(document).ready(function() {
	
	$('[type="tel"]').mask("+7 (999) 999-99-99");

	/* placeholder*/
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	//custom checkbox
	function customCheckbox(elem) {
		var state = $(elem).children('input').prop('checked');
		if (state){
			$(elem).addClass('active');
		} else {
			$(elem).removeClass('active');
		};
	};

	$('.form-agreement').each(function(){
		customCheckbox(this);
	});

	
	$('.form-agreement').click(function(){
		customCheckbox(this);
	});

	if ($('#team-slider').length) {
		$('#team-slider').lightSlider({
			item: 1,
			pager: false,
			loop: true,
			prevHtml: "<i class='fa fa-angle-left'></i>",
			nextHtml: "<i class='fa fa-angle-right'></i>"
		});
	};

	if ($('#unitegallery').length) {
		$("#unitegallery").unitegallery({
			tiles_justified_space_between:0,
			tiles_type:"justified",
			tiles_justified_row_height: '300'
		});
	};

	$('.popup-link').magnificPopup();


	$('.popup-form-close').click(function(e){
		e.preventDefault();
		$.magnificPopup.close();
	});

	// $.magnificPopup.open({
	// 	items: {
	// 		src: "#popup5"
	// 	}
	// });

	//Animate CSS + WayPoints javaScript Plugin
	//Example: $(".element").animated("zoomInUp");
	//Author URL: http://webdesign-master.ru
	(function($) {
		$.fn.animated = function(inEffect) {
			$(this).each(function() {
				var ths = $(this);
				ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
					if (dir === "down") {
						ths.addClass(inEffect).css("opacity", "1");
					};
				}, {
					offset: "90%"
				});

			});
		};
	})(jQuery);
	$('.popup-form, .vantage, .skill').animated('fadeIn');
	$('.service-preview, .price-item').animated('fadeInUp');
	$('.team-member:nth-child(2n)').animated('fadeInRight');
	$('.team-member:nth-child(2n+1)').animated('fadeInLeft');
});



function closeModal(){
    $.magnificPopup.close();
}


function sendForm(form_id,res_div) {
  var er=0;

  if (er==0){
    var msg = $('#'+form_id).serialize();

    $.ajax({
      type: 'POST',
      url: '/wp-content/themes/symmetry/send.php',
      data: msg,
      success: function(data){

		$.magnificPopup.open({
		  items: {
		    src: '<div class="popup-form" id="popup-thanks"><a class="popup-form-close" href="#popup-thanks"><i class="icon icon-17"></i></a><div class="thanks__popup">Заявка отправлена.<br> Наш менеджер свяжется с Вами в ближайшее время!</div></div>',
		    type: 'inline'
		  }
		});
		setTimeout(closeModal, 5000);
		  
		 yaCounter29693380.reachGoal('gol');
		 gtag('event', 'Заявка', {'event_category': 'submit', 'event_action': 'gol'});

        jQuery("#"+form_id).trigger("reset");
      },
      error:  function(xhr, str){

        //$.fancybox.close(true);
        //$('#thanks').fancybox().trigger('click');
        //setTimeout(closeModal, 5000);

        jQuery("#"+form_id).trigger("reset");
      }
    });
  }
}