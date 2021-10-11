$(document).ready(function(){
 
  
  $("#red").click(function(){
    let imageURL = 'images/wp2403498.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Red</b>");
    $(".music").prop("currentTime",0);
    $(".music")[0].play();
    $(".music")[1].pause();
    console.log($(".music"))
  })

  $("#blue").click(function(){
    let imageURL = 'images/arcaninewallpaper.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Blue</b>")
  })

  $("#lance").click(function(){
    let imageURL = 'images/DRAGONITE.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Lance</b>")
    // $("#music")[0].play();
  })

  $("#steven").click(function(){
    let imageURL = 'images/MEGAMETA.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Steven</b>")
    $(".music")[1].play()
    $(".music")[0].pause();
  })

  $("#wallace").click(function(){
    let imageURL = 'images/MILOTIC.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Wallace</b>")
  })

  $("#cynthia").click(function(){
    let imageURL = 'images/GARCHOMP.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Cynthia</b>")
  })

  $("#alder").click(function(){
    let imageURL = 'images/VOLCARONA.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Alder</b>")
  })

  $("#iris").click(function(){
    let imageURL = 'images/HAXORUS.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    // $("body").css("background-size", "cover");
    // $("body").css("background-repeat", "no-repeat");
    $(".which-trainer").html("<b>Trainer Iris</b>")
  })


})

