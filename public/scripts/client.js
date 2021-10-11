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
    $(".which-trainer").html("<b>Trainer Red</b>");
  })

  $("#blue").click(function(){
    let imageURL = 'images/arcaninewallpaper.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Blue</b>")
    $(".music").prop("currentTime",0);
    $(".music")[3].play();
    $(".music")[0].pause();
    $(".music")[1].pause();
    $(".music")[2].pause();
    $(".music")[4].pause();    
    $(".music")[5].pause();    
    $(".music")[6].pause();
    $(".music")[7].pause();
  })

  $("#lance").click(function(){
    let imageURL = 'images/DRAGONITE.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Lance</b>")
    $(".music").prop("currentTime",0);
    $(".music")[1].play();
    $(".music")[0].pause();
    $(".music")[2].pause();
    $(".music")[3].pause();
    $(".music")[4].pause();    
    $(".music")[5].pause();   
    $(".music")[6].pause(); 
    $(".music")[7].pause();
  })

  $("#steven").click(function(){
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R") {
      alert("not a valid input")
      musicChoice = prompt("So what you want")
    }

    console.log("OK YOURE OUT")

    if (musicChoice === "O") {
      let imageURL = 'images/manthatmeta.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $(".music")[9].play();
      $(".music")[2].pause();
    }

    if (musicChoice === "R") {
      let imageURL = 'images/MEGAMETA.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $(".music")[2].play();
      $(".music")[9].pause();
    }

    
    $(".which-trainer").html("<b>Trainer Steven</b>")
    $(".music").prop("currentTime",0);
    $(".music")[0].pause();
    $(".music")[1].pause();    
    $(".music")[3].pause();    
    $(".music")[4].pause();    
    $(".music")[5].pause();    
    $(".music")[6].pause();
    $(".music")[7].pause();
    $(".music")[8].pause();

  })

  $("#wallace").click(function(){
    let imageURL = 'images/MILOTIC.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Wallace</b>")
    $(".music").prop("currentTime",0);
    $(".music")[5].play()
    $(".music")[0].pause();
    $(".music")[1].pause()
    $(".music")[2].pause();    
    $(".music")[3].pause();    
    $(".music")[4].pause(); 
    $(".music")[6].pause();  
    $(".music")[7].pause(); 
  })

  $("#cynthia").click(function(){
    let imageURL = 'images/GARCHOMP.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Cynthia</b>")
    $(".music").prop("currentTime",0);
    $(".music")[4].play()
    $(".music")[0].pause();
    $(".music")[1].pause();    
    $(".music")[2].pause();    
    $(".music")[3].pause();  
    $(".music")[5].pause();  
    $(".music")[6].pause();
    $(".music")[7].pause();
  })

  $("#alder").click(function(){
    let imageURL = 'images/VOLCARONA.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    $(".which-trainer").html("<b>Trainer Alder</b>")
    $(".music").prop("currentTime",0);
    $(".music")[6].play()
    $(".music")[0].pause();
    $(".music")[1].pause();    
    $(".music")[2].pause();    
    $(".music")[3].pause();  
    $(".music")[4].pause();  
    $(".music")[5].pause();
    $(".music")[7].pause();
  })

  $("#iris").click(function(){
    let imageURL = 'images/HAXORUS.jpeg'
    $("body").css("background-image", "url(" + imageURL + ")");
    // $("body").css("background-size", "cover");
    // $("body").css("background-repeat", "no-repeat");
    $(".which-trainer").html("<b>Trainer Iris</b>")
    $(".music").prop("currentTime",0);
    $(".music")[7].play()
    $(".music")[0].pause();
    $(".music")[1].pause();    
    $(".music")[2].pause();    
    $(".music")[3].pause();  
    $(".music")[4].pause();  
    $(".music")[5].pause();
    $(".music")[6].pause();
  })
})




