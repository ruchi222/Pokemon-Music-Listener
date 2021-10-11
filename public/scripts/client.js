$(document).ready(function(){
  const music = $(".music");
  function pauseAll(currentIndex) {
    music.each(song => {
      if (currentIndex !== song) {
        console.log("MUSIC", music[song]);
        music[song].pause();
      } else {
        console.log("No we are equal :(")
      }
    })
  }
  
  $("#red").click(function(){
     console.log(music)
     let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
     while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      console.log("Quit")
      return;
    }
    
    if (musicChoice === "O") {
      music[8].play();
      pauseAll(8);
    }

    if (musicChoice === "R") {
      music[0].play();
      pauseAll(0);
    }
    
    music.prop("currentTime",0);
    let imageURL = 'images/wp2403498.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "130%");
    $(".which-trainer").html("<b>Trainer Red</b>");
  })

  $("#blue").click(function(){
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
     console.log("Quit")
     return;
   }
   
   if (musicChoice === "O") {
     music[10].play();
     pauseAll(10);
   }

   if (musicChoice === "R") {
     music[3].play();
     pauseAll(3);
   }
    
    music.prop("currentTime",0);
    let imageURL = 'images/arcaninewallpaper.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "auto");
    $(".which-trainer").html("<b>Trainer Blue</b>")
  })

  $("#lance").click(function(){

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
     console.log("Quit")
     return;
   }
   
   if (musicChoice === "O") {
     music[8].play();
     pauseAll(8);
   }

   if (musicChoice === "R") {
     music[1].play();
     pauseAll(1);
   }
    let imageURL = 'images/DRAGONITE.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "auto");
    $(".which-trainer").html("<b>Trainer Lance</b>")
    $(".music").prop("currentTime",0);
  })

  $("#steven").click(function(){
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && music !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "O") {
      music[9].play()
      pauseAll(9)
      let imageURL = 'images/manthatmeta.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
    }

    if (musicChoice === "R") {
      music[2].play()
      pauseAll(2)
      let imageURL = 'images/MEGAMETA.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "135%");
    }
    
    $(".which-trainer").html("<b>Trainer Steven</b>")
    $(".music").prop("currentTime",0);
  })

  $("#wallace").click(function(){

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
     console.log("Quit")
     return;
   }
   
   if (musicChoice === "O") {
     music[9].play();
     pauseAll(9);
   }

   if (musicChoice === "R") {
     music[2].play();
     pauseAll(2);
   }
   let imageURL = 'images/MILOTIC.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Wallace</b>")
    $(".music").prop("currentTime",0);
  })

  $("#cynthia").click(function(){
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
     console.log("Quit")
     return;
   }
   
   if (musicChoice === "O") {
     music[11].play();
     pauseAll(11);
     let imageURL = 'images/grrrr.png'
     $("body").css("background-image", "url(" + imageURL + ")");
    //  $("body").css("background-repeat", "no-repeat");
     $("body").css("background-size", "130%");
   }

   if (musicChoice === "R") {
     music[4].play();
     pauseAll(4);
     let imageURL = 'images/GARCHOMP.jpeg'
     $("body").css("background-image", "url(" + imageURL + ")");
     $("body").css("background-size", "100%");
   }
    
    $(".which-trainer").html("<b>Trainer Cynthia</b>")
    $(".music").prop("currentTime",0);
   })

  $("#alder").click(function(){
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
     console.log("Quit")
     return;
   }
   
   if (musicChoice === "O") {
    music[6].play();
    pauseAll(6);
    let imageURL = 'images/VOLCARONAGREY.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "162%");
   }

   if (musicChoice === "R") {
    music[13].play();
    pauseAll(13);
    let imageURL = 'images/VOLCARONA.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "auto");
   }
 
    $(".which-trainer").html("<b>Trainer Alder</b>")
    $(".music").prop("currentTime",0);
  })

  $("#iris").click(function(){
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "O") {
      music[7].play();
      pauseAll(7);
      let imageURL = 'images/HAXORUS.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
    }

    if (musicChoice === "R") {
      music[12].play();
      pauseAll(12);
      let imageURL = 'images/blackhaxx.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "144%");
    }
    $(".which-trainer").html("<b>Trainer Iris</b>")
    $(".music").prop("currentTime",0);
  })
})




