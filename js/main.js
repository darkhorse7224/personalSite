(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('fast');
		$("#menu-container .homepage").slideDown('fast');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$("a.sectionbutton").click(function(){

        var sectionToInject = $(this).data('section-to-inject');

        var url = "/mysite/" + sectionToInject + "/" + sectionToInject + ".php";

        $.get(url ,function(data){
            $("#contentContainer").html(data);
            $("#contentContainer").show();
            $("#contentContainer").slideDown();
            $(".logo-top-margin").animate({marginTop:'0'}, "fast");
            $(".logo-top-margin").animate({marginLeft:'0'}, "fast");
        });
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });


})(jQuery);