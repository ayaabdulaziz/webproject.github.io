$(function()
{
    'use strict';

    $('.header').height($(window).height())
    $(window).resize(function()
    {
     $('.header').height($(window).height())
    });



    $(".navbar ul li a").click(function()
    {
    $(this).parent().addClass('active').siblings().removeClass('active')
    });
    $('.slider').bxSlider({
        pager:false,
        auto:true
      });    
      $('.slider ').css('paddingTop',($(window).height()-$('.slider li').height())/2)
/* start smooth scoll */
     $('.navbar li a').click(function(e)
     {
       e.preventDefault();
       $('html,body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top
       },1000);
       
     });
/* end smooth scoll */
  
/* start my own slideshow */
(function autoSlider()
{
   $('.info .active').each(function()
   {
     if(!$(this).is(':last-child'))
     {
      $(this).delay(3000).fadeOut(1000,function()
      {
        $(this).removeClass('active').next().addClass('active').fadeIn()
        autoSlider();
      })
     }
     else{
      $(this).delay(3000).fadeOut(1000,function()
      {
        $(this).removeClass('active');
        $('.info div').eq(0).addClass('active').fadeIn()
        autoSlider();
      })
     }
   });
}());



/* end my own slideshow */


/* start shuffle */
$('.our-projects ul li').click(function()
{
  $(this).addClass('active').siblings().removeClass('active')
});

var mixer = mixitup('#container');




/* end shuffle */

$("body").niceScroll({
  cursorcolor:"rgb(27, 188, 155)",
cursorwidth:"10px"
});


});
