$('#main_banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
    dots:true,
    
  });

  AOS.init();
  $('.fea-div-control').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 6,
    dots:false,
    arrows:true,
    autoplay:false,
    autoplaySpeed:700,
    nextArrow:".next",
    prevArrow:".prev"
  
   
  });

  new VenoBox({
    selector: ".my-link",
    maxWidth:"60%",
});
$(document.body)
/*javascrpt for feed section*/

$('.feed-text').slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  arrows: false,
  fade: true,
  asNavFor: '.feed-img',
  autoplay:true,
  autoplaySpeed:500,
});
$('.feed-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.feed-text',
  dots: true,
  centerMode: true,
  centerPadding:"0px",
  focusOnSelect: true,
  arrows:false,
  
});
$(document).ready(function(){
  $(".back2_top").click(function(){
    $("html , body").animate(
      {
        scrollTop:0,

    },2000);
  })

})

			
 
$(window).on("load",function (){
  $("preloader").delay(1000).fadeOut;


})
$(document).ready(function (){
  $(window).scroll(function(){
    var minar=$(this).scrollTop();
    if(minar > 20 ){
      $(".mainbg").addClass("bg");
    }
    else{
      $(".mainbg").removeClass("bg");
    }
    
    if( minar > 20){
      $(".back2_top").fadeIn();
    }else{
      $(".back2_top").fadeOut();

    }
    
  })
 
 
 
 

 
 
 
})

$(document).ready(function() {
  $("#element").introLoader();
});
$(document).ready(function() {
  $("#element").introLoader({
      spinJs: {

          lines: 13, // The number of lines to draw
          length: 20, // The length of each line
          width: 10, // The line thickness
          radius: 30, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          color: '#000', // #rgb or #rrggbb or array of colors
          speed: 1, // Rounds per second
          trail: 60, // Afterglow percentage
          shadow: false // Whether to render a shadow

      }
  });
});
/* js start 
var loader=document.getElementById("rajibsir");
window.addEventListener("load",function (){
  loader.style.display="none";
})*/
$(window).on("load",function (){
  $("#rajibsir").delay().fadeOut(4000)
})


































































