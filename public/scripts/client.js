$(document).ready(function(){
  const music = $(".music");
  const gif = $(".gif");

  function pauseAll(currentIndex) {
    music.each(song => {
      if (currentIndex !== song) {
        // console.log("MUSIC", music[song]);
        music[song].pause();
      } else {
        console.log("No we are equal :(")
      }
    })
  }

  function makeSprites(trainerLink,pokeLink){
    $(".title").html("");
    $(".description-list").html("");
    const spriteContainer = $("<div></div>").appendTo(".description-container");
    spriteContainer.addClass("sprite-container");
    const trainerSprite = $(`<img class="trainer-sprite" src=${trainerLink} alt="cynthia"/>`).appendTo(".sprite-container");
    const pokemonSprite = $(`<img class="pokemon-sprite" src=${pokeLink} alt="garchomp">`).appendTo(".sprite-container");
    trainerSprite.addClass("trainer-font");
    pokemonSprite.addClass("pokemon-font");
  }

  function removeStyles(songOne, songTwo) {
    $(".title").html("Welcome to Pokemon Music Listener");
    $(".description-list").html("<li>Listen to Pokemon Music</li><li>Taken Throughout Pokemon History</li><li>Rock Out</li>")
    $(".which-trainer").text(`Trainer ???, Pokemon ???`);
    $("body").css("background-image", "none");
    $(".sprite-container").remove();
    songOne.pause();
    songTwo.pause();
  }

  function gifDisappear(index) {
    gif.each(g => {
      if (index !== g) {
        const currentGif = gif[g];
        console.log("Invisible Gif -->", gif[g])
        $(currentGif).css("opacity", "0");
        $(currentGif).css("pointer-events", "none");
      } else {
        console.log("Worked")
      }
    })
  }

  function gifRestore(index) {
    gif.each(g => {
      if (index !== g) {
        const currentGif = gif[g];
        $(currentGif).css("opacity", "1");
        $(currentGif).css("pointer-events", "all");
      }
    })
  }


  
  $("#red").click(function(){
    $(".sprite-container").remove();
     console.log(music)
     let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
     while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(music[8], music[0])
      gifRestore(0)

    } else {
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
      gifDisappear(0)
    }
  })

  $("#blue").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(music[10], music[3])
    gifRestore(1)
   } else {
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
     gifDisappear(1)
   }
  })

  $("#lance").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(music[8], music[1])
    gifRestore(2)
   } else {
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
      gifDisappear(2)
   }
  })

  $("#steven").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(music[9], music[2])
      gifRestore(3)
    } else {
      if (musicChoice === "O") {
        music[9].play()
        pauseAll(9)
        const imageURL = 'images/manthatmeta.jpeg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "auto");
        const trainerURL = 'pokemon-sprites/STEVEN_OD.png'
        const pokemonURL = 'pokemon-sprites/376_0.png'
        makeSprites(trainerURL, pokemonURL)
        $(".which-trainer").text("Trainer Steven, Pokemon Metagross")
      }
  
      if (musicChoice === "R") {
        music[2].play()
        pauseAll(2)
        const imageURL = 'images/MEGAMETAGROSSNIGHT.jpeg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "105%");
        const trainerURL = 'pokemon-sprites/Steven_OD.png'
        const pokemonURL = 'pokemon-sprites/SHINYMETAGROSS.png'
        makeSprites(trainerURL, pokemonURL)
        $(".which-trainer").text("Trainer Steven, Pokemon Mega Metagross")
      }
      
      $(".music").prop("currentTime",0);
      gifDisappear(3)
    }
  })

  $("#wallace").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(music[9], music[5])
    gifRestore(4)
   
   } else {
    if (musicChoice === "O") {
      music[9].play();
      pauseAll(9);
      const imageURL = 'images/MILOTIC.jpeg'
      const trainerURL = 'pokemon-sprites/Wallace_OD.png'
      const pokemonURL = 'pokemon-sprites/350.png'
      makeSprites(trainerURL, pokemonURL)
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "110%");
      $(".music").prop("currentTime",0);
    }
 
    if (musicChoice === "R") {
      music[5].play();
      pauseAll(5);
      let imageURL = 'images/MILOHD.jpeg'
      const trainerURL = 'pokemon-sprites/Wallace_OD.png'
      const pokemonURL = 'pokemon-sprites/350.png'
      makeSprites(trainerURL, pokemonURL)
      $("body").css("background-image", "url(" + imageURL + ")");
      $(".music").prop("currentTime",0);
    }
    $(".which-trainer").text("Trainer Wallace, Pokemon Milotic")
    gifDisappear(4);
    }
  })

  $("#cynthia").click(function(){
     $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

    if (musicChoice === "Q") {
    removeStyles(music[11], music[4])
    gifRestore(5)
    } else {
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
      gifDisappear(5)
   }
 })
  

  
  $("#alder").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(music[6], music[13])
    gifRestore(6)
   } else {
     if (musicChoice === "O") {
      music[6].play();
      pauseAll(6);
      let imageURL = 'images/VOLCARONA.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
     }
  
     if (musicChoice === "R") {
      music[13].play();
      pauseAll(13);
      let imageURL = 'images/todxpr4sygj61.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "103%");
     }
   
      $(".which-trainer").text("Trainer Alder, Pokemon Volcarona")
      const trainerURL = 'pokemon-sprites/ALDER_OD.png'
      const pokemonURL = 'pokemon-sprites/637_down.png'
      makeSprites(trainerURL, pokemonURL)
      $(".music").prop("currentTime",0); 
      gifDisappear(6)
    }
  })

  $("#iris").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(music[7], music[12])
      gifRestore(7);
     } else {
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
         let imageURL = 'images/haxorusPOWER.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "100%");
         const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
         const pokemonURL = 'pokemon-sprites/612_left.png'
         makeSprites(trainerURL, pokemonURL)
       }
      
       $(".which-trainer").text("Trainer Iris, Pokemon Haxorus")
       $(".music").prop("currentTime",0);
       gifDisappear(7);
     }
   })

  $("#n").click(function(){
    $(".sprite-container").remove();
    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(music[14], music[15])
      gifRestore(8);
     } else {
       if (musicChoice === "O") {
         music[14].play();
         pauseAll(14);
         let imageURL = 'images/halfZR.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "110%");
         // const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
         // const pokemonURL = 'pokemon-sprites/612_left.png'
         // makeSprites(trainerURL, pokemonURL)
       }
   
       if (musicChoice === "R") {
         music[15].play();
         pauseAll(15);
         let imageURL = 'images/NPower.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "110%");
         // const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
         // const pokemonURL = 'pokemon-sprites/612_left.png'
         // makeSprites(trainerURL, pokemonURL)
       }
      
       $(".which-trainer").text("Trainer N, Pokemon Zekrom/Reshiram")
       $(".music").prop("currentTime",0);
       gifDisappear(8);
     }
   })

})




