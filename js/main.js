$('#menu-des').on('click',function(){
	$('#main-nav').toggleClass('mostrar')
	$('#menu-des').toggleClass('mover')
})
var logo=false;
var menu=false;
var scroll;

$(document).ready(function() {
    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if(scroll> 200){
            if(!logo){
            $(".VOOXELL").css({"margin-top":"2rem","width":"8rem","height":"4rem"})
            $(".logo-text").css({"display":"none"})
            $(".logo-vooxel").css({"padding-top":"0rem","margin":"auto 90%"})
                logo=true;
            }
        }
        else {
            if(logo){
            $(".VOOXELL").css({"margin-top":"30%","width":"24rem","height":"10rem"})
            $(".logo-text").css({"display":"block"})
            $(".logo-vooxel").css({"padding-top":"10rem","margin":"auto"})
               logo=false;
            }
        }

    });
    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if(scroll> 800){
            if(!menu){
            $(".hover-bajar").css({"color":"#C1C1C1"})
            $(".hover-subir").css({"color":"#C1C1C1"})
            $("#nav-parallax").css({"border-right":"0.01em solid rgba(216, 214, 214, 0.17)"})
            $(".menu-bar").css({"border":"0.01em solid rgba(179, 170, 170, 0.91)"})
            $(".bar").css({"background":"rgba(179, 170, 170, 0.91)"})
                menu=true;
            }
        }

        else {
            if(menu){
            $(".hover-bajar").css({"color":"white"})
            $(".hover-subir").css({"color":"white"})
            $(".hover-text").css({"color":"white"})
            $("#nav-parallax").css({"border-right":"0.01em solid white"})
            $(".menu-bar").css({"border":"0.01em solid white"})
               menu=false;
            }
        }
    });
    /*** perfiles ***/
	$('#Container').mixItUp();
    Materialize.updateTextFields();
    /*** Formularios ***/
    $('#contac-frm1').click(function(){
    	$('#form1').fadeIn(1000);
    })
    $('#contac-frm2').click(function(){
    	$('#form2').fadeIn(1000);
    })
    $('.btn-cerrar').click(function(){
    	$('#form1').fadeOut(1000);
    })
    $('.btn-cerrar').click(function(){
    	$('#form2').fadeOut(1000);
    })
    /** header **/
 });


/***activar menu Header **/
$(function(){
        $('#menu-des').smoothScroll({
          offset: -120,        
          scrollTarget: $(this).val()
       });
       // Waypoints
       $('.section').waypoint(  
        function(direction) {
            // al bajar
        if (direction ==='down') {            
             var wayID = $(this).attr('id'); 
            if(wayID==('#slide-3')){
                $(".nav .menu_item .hover-nav span").css({"color":"white"})
            }           
        } 
        // al subir
        else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');                    
            }
            $('.active').removeClass('active');
            $('.nav li a[href=#'+wayID+']').addClass('active');
        }, { offset: '40%' }

    );
       /// StickNav  
    var stickyNavTop = $('#menu-des').offset().top;  
    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
    };       
        stickyNav(); 
    $(window).scroll(function() {
        stickyNav();  
    });  
});