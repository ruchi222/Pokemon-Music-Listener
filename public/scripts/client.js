$(document).ready(function(){
  $(".gif-1").click(function(){
    console.log("gif-1")
    let imageURL = 'images/pikachuwallpaper.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })
})