$(document).ready(function(){
    var $myImage = $("#myImage");
    var $startButton = $("#startButton");
  
    $startButton.on("click", function() {
      $myImage.fadeIn(2000, function() {
        setTimeout(function() {
          $myImage.css("filter", "blur(5px)");
        }, 3000);
      });
    });
  });
  

  look for the images of tom and jerry and a loaf bread position the cat on the left and the mouse on the right the loaf of bread should be in between the cat and the mouse , the mouse should start moving from its position towards the bread . then the bread shold start moving towards the cat and when the bread is half way towards the cat , the mouse should stop .