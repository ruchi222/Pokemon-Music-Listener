$(document).ready(function(){
  $("#red").click(function(){
    console.log("i am body")
    $("body").css("background-image", "none");
    // $("body").css('background-color', '#ffffff');
  })


  $("#red").click(function(){
    let imageURL = 'images/wp2403498.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#blue").click(function(){
    let imageURL = 'images/arcaninewallpaper.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })








})

