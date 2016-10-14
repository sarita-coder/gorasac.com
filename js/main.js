$('#menu-des').on('click',function(){
	$('#main-nav').toggleClass('mostrar')
	$('#menu-des').toggleClass('mover')
})

$('.link-1').on('click',function(){
	$('.hover-nav-text-0').toggleClass('visible')
})
$('.link-2').on('click',function(){
	$('.hover-nav-text-1').toggleClass('visible')
})
$('.link-3').on('click',function(){
	$('.hover-nav-text-2').toggleClass('visible')
})
$('.link-4').on('click',function(){
	$('.hover-nav-text-3').toggleClass('visible')
})
$('.link-5').on('click',function(){
	$('.hover-nav-text-4').toggleClass('visible')
})
$('.link-6').on('click',function(){
	$('.hover-nav-text-5').toggleClass('visible')
})
/******/
$(document).ready(function() {

	$('#Container').mixItUp();

    Materialize.updateTextFields();

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
 });





