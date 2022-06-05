$(function(){
  $(".hamburger-container").click(function(){
    $(".bar1, .bar2").toggleClass("close");
    $(".bg-op").toggleClass("background-opacity");
    $(".menu").toggleClass("menu-open");
  })

})
