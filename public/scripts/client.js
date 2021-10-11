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

  $("#lance").click(function(){
    let imageURL = 'images/DRAGONITE.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#steven").click(function(){
    let imageURL = 'images/META.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#wallace").click(function(){
    let imageURL = 'images/MILOTIC.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#cynthia").click(function(){
    let imageURL = 'images/GARCHOMP.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#alder").click(function(){
    let imageURL = 'images/VOLCARONA.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })

  $("#iris").click(function(){
    let imageURL = 'images/HAXORUS.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "cover");
  })







})

