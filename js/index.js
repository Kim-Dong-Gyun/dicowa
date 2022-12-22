
$('.single-item').slick(
    {
        dots: true
        
    }
);

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});
$(function(){
    $('.box1 .btn').click(function(e){
        e.preventDefault();
        let d = $(this).siblings('.list').css('display');

        if(d == 'block'){
            $('.box1 .list').slideUp();
        }else{
            $('.box1 .list').slideUp();
            $(this).siblings('.list').slideDown();
        }
    })
})