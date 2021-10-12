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

  function makeSprites(trainerLink,pokeLink){
    $("<div class='sprite-container'></div>").appendTo(".description-container");
    const trainerSprite = $(`<img class="trainer-sprite" src=${trainerLink} alt="cynthia"/>`).appendTo(".sprite-container");
    const pokemonSprite = $(`<img class="pokemon-sprite" src=${pokeLink} alt="garchomp">`).appendTo(".sprite-container");
    trainerSprite.addClass("trainer-font");
    pokemonSprite.addClass("pokemon-font");
  }
  
  $("#red").click(function(){
    $(".sprite-container").remove();
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
      const imageURL = 'images/pokemon-pokemon-red-and-blue-pikachu-wallpaper-preview.jpg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "120%");
    }

    if (musicChoice === "R") {
      music[0].play();
      pauseAll(0);
      const imageURL = 'images/wp2403498.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "130%");
    }
    
    music.prop("currentTime",0);
    $(".which-trainer").text("Trainer Red, Pokemon Pikachu");
    const trainerURL = 'pokemon-sprites/Red_OD.png'
    const pokemonURL = 'pokemon-sprites/025_right.png'
    makeSprites(trainerURL, pokemonURL)
  })

  $("#blue").click(function(){
    $(".sprite-container").remove();
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
    $(".which-trainer").text("Trainer Blue, Pokemon Arcanine")
    const trainerURL = 'pokemon-sprites/Blue_OD.png'
    const pokemonURL = 'pokemon-sprites/059_left.png'
    makeSprites(trainerURL, pokemonURL)
  })

  $("#lance").click(function(){
    $(".sprite-container").remove();
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
    let pokemonURL = 'pokemon-sprites/149_up.png';
    let trainerURL = 'pokemon-sprites/Lance_OD.png'
    $("body").css("background-image", "url(" + imageURL + ")");
    $("body").css("background-size", "auto");
    $(".music").prop("currentTime",0);
    $(".which-trainer").text(`Trainer Lance, Pokemon Dragonite`)
     makeSprites(trainerURL,pokemonURL)
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
    $(".sprite-container").remove();
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
     const imageURL = 'images/MILOTIC.jpeg'
     const trainerURL = 'pokemon-sprites/Wallace_OD.png'
     const pokemonURL = 'pokemon-sprites/350.png'
     makeSprites(trainerURL, pokemonURL)
     $("body").css("background-image", "url(" + imageURL + ")");
   }

   if (musicChoice === "R") {
     music[5].play();
     pauseAll(5);
     let imageURL = 'images/MILOHD.jpeg'
     const trainerURL = 'pokemon-sprites/Wallace_OD.png'
     const pokemonURL = 'pokemon-sprites/350.png'
     makeSprites(trainerURL, pokemonURL)
     $("body").css("background-image", "url(" + imageURL + ")");
   }
   
    
    $(".which-trainer").text("Trainer Wallace, Pokemon Milotic")
    $(".music").prop("currentTime",0);
  })

  $("#cynthia").click(function(){
     $(".sprite-container").remove() 
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
     $("body").css("background-size", "130%");
   }

   if (musicChoice === "R") {
     music[4].play();
     pauseAll(4);
     let imageURL = 'images/GARCHOMP.jpeg'
     $("body").css("background-image", "url(" + imageURL + ")");
     $("body").css("background-size", "100%");
   }
   $(".music").prop("currentTime",0);
   $(".which-trainer").text(`Trainer Cynthia, Pokemon Garchomp`)
   let pokemonURL = 'pokemon-sprites/445s_0.png'
   let trainerURL = 'pokemon-sprites/Cynthia_OD.png'
    makeSprites(trainerURL, pokemonURL)
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
    $(".sprite-container").remove();
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
      const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
      const pokemonURL = 'pokemon-sprites/612_left.png'
      makeSprites(trainerURL, pokemonURL)
    }

    if (musicChoice === "R") {
      music[12].play();
      pauseAll(12);
      let imageURL = 'images/blackhaxx.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "144%");
      const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
      const pokemonURL = 'pokemon-sprites/612s_left.png'
      makeSprites(trainerURL, pokemonURL)
    }
    $(".which-trainer").text("Trainer Iris, Pokemon Haxorus")
    $(".music").prop("currentTime",0);
  })
})




