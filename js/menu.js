$(document).ready(function(){
    $("#my-menu").load("./elements/menu.html", function(){

        $(window).scroll(function(){
            var top = $(window).scrollTop();
            if(top > 10){
                $('header nav').css('position','fixed');
            }else{
                $('header nav').css('position', 'relative');
            };
        });      
        //Responsividade do menu
        $('#controle-menu').click(function(){
            $('#menu-right').toggle();
            $('.option').hide();
            $('.budget span').css({ 'background-color': '#0d182a', 'color': '#07faa2' })
        })
        $(window).resize(function(){
            var wth = $(window).width()
            if (wth > 840) {
                $('#menu-right').show();
            }else{
                $('#menu-right').hide();
            }              
        })
        
    })
})
