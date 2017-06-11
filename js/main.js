$(document).ready(function() {


$(document).ready(function() { 
    $('.registry').click( function(event){
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal-login') 
                    .css('display', 'block') 
                    .animate({opacity: 1, top: '35%'}, 200);
                     $('.modal-login-login').css('display','none');
                     $('.modal-login-reg').css('display','block');
                         $('.modal-log').removeClass('active');
                        $('.modal-reg').addClass('active');

        });
    });
    $('.login-in').click( function(event){
        event.preventDefault(); 
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal-login') 
                    .css('display', 'block') 
                    .animate({opacity: 1, top: '35%'}, 200);
                        $('.modal-login-reg').css('display','none');
    $('.modal-login-login').css('display','block');
        $('.modal-reg').removeClass('active');
     $('.modal-log').addClass('active');

        });
    });
    $('#overlay').click( function(){ 
        $('#modal-login')
            .animate({opacity: 0, top: '30%'}, 200,  
                function(){ 
                    $(this).css('display', 'none'); 
                    $('#overlay').fadeOut(400); 
                }
            );
    });
});
$('.modal-reg').click( function(event){
    $('.modal-login-login').css('display','none');
    $('.modal-login-reg').css('display','block');
    $('.modal-reg').addClass('active');
    $('.modal-log').removeClass('active');

});
$('.modal-log').click( function(event){
    $('.modal-login-reg').css('display','none');
    $('.modal-login-login').css('display','block');
     $('.modal-log').addClass('active');
    $('.modal-reg').removeClass('active');
 });    
var x = Math.floor((Math.random() * 10) + 1);
    (x==1)? $('#main-page-header').attr('data-image-src','img/main-header-bg.png'):
    (x==2)? $('#main-page-header').attr('data-image-src','img/bg-2.png'):
    $('#main-page-header').attr('data-image-src','img/main-header-bg.png');
});