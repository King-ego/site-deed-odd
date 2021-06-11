$(document).ready(function () {
    $('#my-menu').mouseleave(function(){
        let vts = $(window).width()
        if(vts < 840){
            $('#menu-right').hide();
        }
    })
    let optionVideos = $('#video');
    optionVideos.click(function () {
        $('.option').first().delay().toggle('fast');
        const videoShow = $('.optionVideo').is(':visible');
        if (!videoShow) {
            console.log(videoShow)
            
            $('#video span').css({ 'background-color': '#07faa2', 'color': '#0d182a' });
            $('.option').eq(1).hide('fast');
            $('.option').eq(2).hide('fast');
        } else {
            $('#video span').css({ 'background-color': '#0d182a', 'color': '#07faa2' });

        }
    })
    let optionDesigner = $('#designer');
    optionDesigner.click(function () {
        $('.option').eq(1).delay().toggle('fast')
        const designerShow = $('.optionDesigner').is(':visible');
        if (!designerShow) {
            $('.budget span').eq(1).css({ 'background-color': '#07faa2', 'color': '#0d182a' });
            $('.option').first().hide('fast');
            $('.option').eq(2).hide('fast');
        } else {
            $('.budget span').eq(1).css({ 'background-color': '#0d182a', 'color': '#07faa2' })
        }
    })
    let optionWebDesigner = $('#webDesigner');
    optionWebDesigner.click(function () {
        $('.option').eq(2).delay().toggle('fast')
        const webShow = $('.optionWebDesigner').is(':visible')
        console.log(webShow);
        if (!webShow) {
            $('.budget span').eq(2).css({ 'background-color': '#07faa2', 'color': '#0d182a' })
            $('.option').first().hide('fast');
            $('.option').eq(1).hide('fast');
        } else {
            $('.budget span').eq(2).css({ 'background-color': '#0d182a', 'color': '#07faa2' })
        }
    })
    $('.option, .budget').mouseleave(function(){
        $('.option').hide();
        $('.budget span').css({ 'background-color': '#0d182a', 'color': '#07faa2' })
    })
    $('.budget span').click(function(){
        $('.budget span').css({ 'background-color': '#0d182a', 'color': '#07faa2' })
        $(this).css({ 'background-color': '#07faa2', 'color': '#0d182a' })
    })
})