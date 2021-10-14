$(document).ready(function(){
  const music = $(".music");
  const gif = $(".gif");

  console.log(music)

  const musicObj = {
    red: [music[8], music[0]],
    blue: [music[10], music[3]],
    lance: [music[8], music[1]],
    steven: [music[9], music[2]],
    wallace: [music[9], music[5]],
    cynthia: [music[11], music[4]],
    alder: [music[6], music[13]],
    iris: [music[7], music[12]],
    n: [music[14], music[15]]
  }
  

  function textChange(gif, gifText) {
    gif.hover(function(){
      $(".reactive-trainer-text").text(gifText)
    })
    $(".mini-gif-container").mouseleave(function(){
      $(".reactive-trainer-text").text("Select A Trainer")
    })
  }

  function whenQuit(gif,gifText) {
    $(".reactive-trainer-text").css("opacity","1");
    $(".reactive-trainer-text").text(gifText);
    textChange(gif,gifText);
  }

  function objPlaySong(currentKey, currentIndex, index) {
    for (key of Object.keys(musicObj)) {
      if (key !== currentKey) {
        console.log("Keys ARE NOT EQUAL")

      } else {
        musicObj[currentKey][currentIndex].play();
        musicObj[currentKey][index].pause()
        console.log("Keys ARE EQUAL")
      }
    }
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
    const redZero = musicObj.red[0];
    const redOne = musicObj.red[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
     while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(redZero, redOne)
      gifRestore(0)
      whenQuit($("#red"),"Red")

    } else {
      if (musicChoice === "O") {
        objPlaySong('red', 0, 1);
        const imageURL = 'images/pokemon-pokemon-red-and-blue-pikachu-wallpaper-preview.jpg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "120%");
      }
  
      if (musicChoice === "R") {
        objPlaySong('red', 1, 0);
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
    const blueZero = musicObj.blue[0];
    const blueOne = musicObj.blue[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(blueZero, blueOne);
    gifRestore(1)
    whenQuit($("#blue"),"Blue")
   } else {
    if (musicChoice === "O") {
      objPlaySong('blue', 0, 1);
      const imageURL = 'images/arcaninewallpaper.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
    }
 
    if (musicChoice === "R") {
      objPlaySong('blue', 1, 0);
      const imageURL = 'images/ArcanineHD.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
    }
     
     music.prop("currentTime",0);
     $(".which-trainer").text("Trainer Blue, Pokemon Arcanine")
     const trainerURL = 'pokemon-sprites/Blue_OD.png'
     const pokemonURL = 'pokemon-sprites/059_left.png'
     makeSprites(trainerURL, pokemonURL)
     gifDisappear(1)
   }
  })

  $("#lance").click(function(){
    const lanceZero = musicObj.lance[0];
    const lanceOne = musicObj.lance[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(lanceZero, lanceOne);
    gifRestore(2)
    whenQuit($("#lance"),"Lance")
   } else {
    if (musicChoice === "O") {
      objPlaySong('lance', 0, 1)
    }
 
    if (musicChoice === "R") {
      objPlaySong('lance', 1, 0)
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
    const stevenZero = musicObj.steven[0];
    const stevenOne = musicObj.steven[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(stevenZero, stevenOne)
      gifRestore(3)
      whenQuit($("#steven"),"Steven")
    } else {
      if (musicChoice === "O") {
        objPlaySong('steven', 0, 1);
        const imageURL = 'images/manthatmeta.jpeg';
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "auto");
        const trainerURL = 'pokemon-sprites/STEVEN_OD.png';
        const pokemonURL = 'pokemon-sprites/376_0.png';
        makeSprites(trainerURL, pokemonURL);
        $(".which-trainer").text("Trainer Steven, Pokemon Metagross");
      }
  
      if (musicChoice === "R") {
        objPlaySong('steven', 1, 0);
        const imageURL = 'images/METAGROSSSHINYMEGA.jpeg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "97%");
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
    const wallaceZero = musicObj.wallace[0];
    const wallaceOne = musicObj.wallace[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(wallaceZero, wallaceOne);
    gifRestore(4)
    whenQuit($("#wallace"),"Wallace")
   
   } else {
    if (musicChoice === "O") {
      objPlaySong('wallace', 0, 1);
      const imageURL = 'images/MILOTIC.jpeg'
      const trainerURL = 'pokemon-sprites/Wallace_OD.png'
      const pokemonURL = 'pokemon-sprites/350.png'
      makeSprites(trainerURL, pokemonURL)
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "110%");
      $(".music").prop("currentTime",0);
    }
 
    if (musicChoice === "R") {
      objPlaySong('wallace', 1, 0);
      let imageURL = 'images/MILOHD.jpeg';
      const trainerURL = 'pokemon-sprites/Wallace_OD.png';
      const pokemonURL = 'pokemon-sprites/350.png';
      makeSprites(trainerURL, pokemonURL);
      $("body").css("background-image", "url(" + imageURL + ")");
      $(".music").prop("currentTime",0);
    }
    $(".which-trainer").text("Trainer Wallace, Pokemon Milotic");
    gifDisappear(4);
    }
  })

  $("#cynthia").click(function(){
    const cynZero = musicObj.cynthia[0];
    const cynOne = musicObj.cynthia[1];

     $(".sprite-container").remove();
     $(".reactive-trainer-text").css("opacity","0");
  
     let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

    if (musicChoice === "Q") {
    removeStyles(cynZero, cynOne)
    gifRestore(5)
    whenQuit($("#cynthia"),"Cynthia")
    } else {
     if (musicChoice === "O") {
       objPlaySong('cynthia', 0, 1);
       let imageURL = 'images/grrrr.png'
       $("body").css("background-image", "url(" + imageURL + ")");
       $("body").css("background-size", "130%");
     }
  
     if (musicChoice === "R") {
       objPlaySong('cynthia', 1, 0);
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
    const alderZero = musicObj.alder[0];
    const alderOne = musicObj.alder[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === "Q") {
    removeStyles(alderZero, alderOne);
    gifRestore(6)
   } else {
     if (musicChoice === "O") {
      objPlaySong('alder', 0, 1);
      let imageURL = 'images/VOLCARONA.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
     }
  
     if (musicChoice === "R") {
      objPlaySong('alder', 1, 0);
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
    const irisZero = musicObj.iris[0];
    const irisOne = musicObj.iris[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(irisZero, irisOne);
      gifRestore(7);
     } else {
       if (musicChoice === "O") {
         objPlaySong('iris', 0, 1);
         let imageURL = 'images/HAXORUS.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "auto");
         const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
         const pokemonURL = 'pokemon-sprites/612_left.png'
         makeSprites(trainerURL, pokemonURL)
       }
   
       if (musicChoice === "R") {
         objPlaySong('iris', 1, 0);
         let imageURL = 'images/haxorusPOWER.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "97%");
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
    const nZero = musicObj.n[0];
    const nOne = musicObj.n[1];

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q") {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === "Q") {
      removeStyles(nZero, nOne);
      gifRestore(8);
     } else {
       if (musicChoice === "O") {
         objPlaySong('n', 0, 1);
         let imageURL = 'images/halfZR.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "100%");
         // const trainerURL = 'pokemon-sprites/Iris_OD_2.png'
         // const pokemonURL = 'pokemon-sprites/612_left.png'
         // makeSprites(trainerURL, pokemonURL)
       }
   
       if (musicChoice === "R") {
         objPlaySong('n', 1, 0);
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




