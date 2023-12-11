$(document).ready(function(){
    $("#toggleBtn").click(function(){
    //   $("#displayText").toggle();
    //   const buttonText = $(this).text();
    //   if(buttonText === "Show Text") {
    //     $(this).text("Hide Text");
    //   } else {
    //     $(this).text("Show Text");
    //   }
    $("#div1").fadeIn("slow");
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    $("#div4").fadeIn(5000);
    });
    $("h1").hover(function(){
        $(this).css("color", "red");
      }, function(){
        $(this).css("color", "black");
      });
      $("img").on("mouseover", function() {
        $(this).css("filter", "blur(10px)");
      });
      
      $("img").on("mouseleave", function() {
        $(this).css("filter", "none");
      });
      
  });
//   using the fade in and fade out create a simple animation where the image will start fading in and become blur