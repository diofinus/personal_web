$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$( document ).ready(function(){
	$('.parallax').parallax();
	$('.carousel').carousel();
 	$('.indicator').css({
 		'background-color': '#80cbc4'
 	});

	if($(window).scrollTop() <= 10){
	 	$('html').css({
	 		'margin': 0,
	 		'height': '100%',
	 		'overflow': 'hidden'
	 	});
	}

 	if($(window).scrollTop() >= 600){
		$('#inner-bottom').removeAttr('style');
		$('#inner-bottom').css({
			'position': 'fixed',
			'top': 0,
			'display': 'block'
		});
		$('#nav-tabs').css({
			'background-color': 'rgba(0, 0, 0, 0.8)'
		});
	}
	
	setTimeout(function () {
		$('#circle-preloader').fadeOut();
		setTimeout(function () {
			$('#inner-center').fadeIn();
			$('#inner-center').css({
				'display': 'table'
			});
			$('#profile-img').css({
				'transform': 'scale(0, 0)'
			});
			setTimeout(function () {
				bouncingPP()
				setTimeout(function () {
					$('#inner-bottom').fadeIn();
					$('html').removeAttr('style');
			    }, 400);
		    }, 200);
	    }, 500);
    }, 2000);
});

$(window).on('scroll', function () {
    var scrollTop     = $(window).scrollTop(),
        elementOffset = $('#inner-bottom').offset().top,
        distance      = (elementOffset - scrollTop);

        if(distance <= 0){
        	$('#inner-bottom').removeAttr('style');
        	$('#inner-bottom').css({
        		'position': 'fixed',
        		'top': 0,
				'display': 'block'
        	});
        	$('#nav-tabs').css({
        		'background-color': 'rgba(0, 0, 0, 0.8)'
        	});
        }

        if($('#about').offset().top - 200 - scrollTop <= 0){
			$('#about_img_1').fadeIn("slow");
        }

        if(scrollTop + $(window).height() == $(document).height()) {
	   }

        if(scrollTop <= 10){
        	$('#nav-tabs').css({
        		'background-color': 'rgba(0, 0, 0, 0)'
        	})
        	$('#inner-bottom').removeAttr('style');
        	$('#inner-bottom').css({
			    WebkitTransition : '1s top, 1s background-color cubic-bezier(0,1,1,1)',
			    MozTransition    : '1s top, 1s background-color cubic-bezier(0,1,1,1)',
			    MsTransition     : '1s top, 1s background-color cubic-bezier(0,1,1,1)',
			    OTransition      : '1s top, 1s background-color cubic-bezier(0,1,1,1)',
			    transition       : '1s top, 1s background-color cubic-bezier(0,1,1,1)',
				'display': 'block'	
        	});
			$('#about_img_1').fadeOut();
			$('#project-carousel').fadeOut();
        }
});

function bouncingPP(){
	$('#profile-img').css({
		'transform': 'scale(1.1, 1.1)'
	});
	setTimeout(function () {
		$('#profile-img').css({
			'transform': 'scale(0.9, 0.9)'
		});
		setTimeout(function () {
			$('#profile-img').css({
				'transform': 'scale(1.05, 1.05)'
			});
	
			setTimeout(function () {
				$('#profile-img').css({
					'transform': 'scale(0.95, 0.95)'
				});
				setTimeout(function () {
					$('#profile-img').css({
						'transform': 'scale(1, 1)'
					});
			    }, 200);
		    }, 200);
	    }, 200);
    }, 200);
}

function goToByScroll(id){
    id = id.replace("link", "");

    if(id === 'about' || id === 'project' ||id === 'other'){
	    $('html,body').animate({
	        scrollTop: $("#"+id).offset().top - 98}
        ,'slow');
    }else{
	    $('html,body').animate({
	        scrollTop: $("#"+id).offset().top}
        ,'slow');
    }
}

$('#home').click(function(e) {
	bouncingPP();
});

$("#home-nav").click(function(e) {
    e.preventDefault();
    goToByScroll('home');           
});

$("#about-nav").click(function(e) {
    e.preventDefault();
    goToByScroll('about');           
});

$("#project-nav").click(function(e) {
    e.preventDefault();
    goToByScroll('project');           
});

$("#contact-nav").click(function(e) {
    e.preventDefault();
    goToByScroll('contact');           
});