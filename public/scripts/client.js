$(document).ready(function(){
  const music = $(".music");
  const gif = $(".gif");
  const musicObj = {
    red: [music[8], music[0]],
    blue: [music[10], music[3]],
    lance: [music[8], music[1]],
    steven: [music[9], music[2]],
    wallace: [music[9], music[5]],
    cynthia: [music[11], music[4]],
    alder: [music[6], music[13]],
    iris: [music[7], music[12]],
    n: [music[14], music[15]],
    ghetsis: [music[16], music[17]]
  }

  function generateControls(oldAudio, newAudio) {
    oldAudio.css("display", "none");
    newAudio.attr("controls","controls");
    newAudio.css("display", "initial");
  }
  
  function cancelOptions(originalKeyword, remixKeyword, oldTrainer, oldPokemon, newTrainer, newPokemon) {
    const whichTrainer = $(".which-trainer")
    if (whichTrainer.text() === originalKeyword) {
       $(".sprite-container").remove();
        const trainerURL = oldTrainer
        const pokemonURL = oldPokemon
        makeSprites(trainerURL, pokemonURL)
    } else if (whichTrainer.text() === remixKeyword) {
      $(".sprite-container").remove();
      const trainerURL = newTrainer
      const pokemonURL = newPokemon
      makeSprites(trainerURL, pokemonURL)
    } else {
      console.log("DIDNT CANCEL NYTHHIN")
      return;
    }
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

  function removeStyles(songOne, songTwo, audioIDOne, audioIDTwo) {
    $(".title").html("Welcome to Pokemon Music Listener");
    $(".description-list").html("<li>Listen to Pokemon Music</li><li>Taken Throughout Pokemon History</li><li>Rock Out</li>")
    $(".which-trainer").text(`Trainer ??? Pokemon ???`);
    $("body").css("background-image", "none");
    $(".sprite-container").remove();
    songOne.pause();
    songTwo.pause();
    audioIDOne.css("display", "none");
    audioIDTwo.css("display", "none");
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
    const originalRed = 'pokemon-sprites/Red_FRLG_OD.webp';
    const newRed = 'pokemon-sprites/Red_OD.png';
    const pikachu = 'pokemon-sprites/025_right.png';

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
     while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === null) {
      cancelOptions("Red and Pikachu #1", "Red and Pikachu #2", originalRed, pikachu, newRed, pikachu)
    }

    if (musicChoice === "Q") {
      removeStyles(redZero, redOne, $("#OG-red-music"), $("#red-music"))
      gifRestore(0)
      whenQuit($("#red"),"Red")

    } else {
      if (musicChoice === "O") {
        objPlaySong('red', 0, 1);
        generateControls($("#red-music"), $("#OG-red-music"))
        const imageURL = 'images/pokemon-pokemon-red-and-blue-pikachu-wallpaper-preview.jpg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "120%");
        makeSprites(originalRed, pikachu)
        $(".which-trainer").text("Red and Pikachu #1");
        gifDisappear(0)
        music.prop("currentTime",0);
       } 
       
       if (musicChoice === "R") {
        objPlaySong('red', 1, 0);
        generateControls($("#OG-red-music"), $("#red-music"))
        const imageURL = 'images/wp2403498.jpeg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "130%");
        makeSprites(newRed, pikachu);
        $(".which-trainer").text("Red and Pikachu #2");
        gifDisappear(0)
        music.prop("currentTime",0);
      } 
    }
  })

  $("#blue").click(function(){
    const blueZero = musicObj.blue[0];
    const blueOne = musicObj.blue[1];
    const originalBlue = 'pokemon-sprites/Blue_III_OD.webp';
    const newBlue = 'pokemon-sprites/Blue_OD.png';
    const arcanine = 'pokemon-sprites/059_left.png';

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
     musicChoice = prompt("O for original or R for remastered")
   }

  if (musicChoice === null) {
    cancelOptions("Blue and Arcanine #1", "Blue and Arcanine #2", originalBlue, arcanine, newBlue, arcanine)
}

  if (musicChoice === "Q") {
    $(".sprite-container").remove();
    removeStyles(blueZero, blueOne, $("#OG-blue-music"), $("#blue-music"));
    gifRestore(1)
    whenQuit($("#blue"),"Blue")

   } else {
    if (musicChoice === "O") {
      objPlaySong('blue', 0, 1);
      generateControls($("#blue-music"), $("#OG-blue-music"))
      const imageURL = 'images/arcaninewallpaper.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
      makeSprites(originalBlue, arcanine)
      music.prop("currentTime",0);
     $(".which-trainer").text("Blue and Arcanine #1")
     gifDisappear(1)
   } 
    
    if (musicChoice === "R") {
      objPlaySong('blue', 1, 0);
      generateControls($("#OG-blue-music"), $("#blue-music"))
      const imageURL = 'images/ArcanineHD.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
     makeSprites(newBlue, arcanine)
     music.prop("currentTime",0);
     $(".which-trainer").text("Blue and Arcanine #2")
     gifDisappear(1)
    }
  }
})

  $("#lance").click(function(){
    const lanceZero = musicObj.lance[0];
    const lanceOne = musicObj.lance[1];
    const originalLance = 'pokemon-sprites/Lance_III_OD.png';
    const newLance = 'pokemon-sprites/Lance_OD.png';
    const dragonite = 'pokemon-sprites/149_up.png';

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === null) {
     cancelOptions("Lance and Dragonite #1", "Lance and Dragonite #2", originalLance, dragonite, newLance, dragonite)
   }

   if (musicChoice === "Q") {
    removeStyles(lanceZero, lanceOne, $("#OG-red-music"), $("#lance-music"));
    gifRestore(2)
    whenQuit($("#lance"),"Lance")
   } else {
    if (musicChoice === "O") {
      objPlaySong('lance', 0, 1)
      generateControls($("#lance-music"), $("#OG-red-music"))
      makeSprites(originalLance, dragonite);
      const imageURL = 'images/DRAGONITE.jpeg'
     $("body").css("background-image", "url(" + imageURL + ")");
     $("body").css("background-size", "auto");
     $(".music").prop("currentTime",0);
     $(".which-trainer").text(`Lance and Dragonite #1`)
      gifDisappear(2)
    }
 
    if (musicChoice === "R") {
      objPlaySong('lance', 1, 0)
      generateControls($("#OG-red-music"), $("#lance-music"))
      makeSprites(newLance, dragonite);
      const imageURL = 'images/DRAGONITE.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
      $(".music").prop("currentTime",0);
      $(".which-trainer").text(`Lance and Dragonite #2`)
       gifDisappear(2)
    }
   }
  })

  $("#steven").click(function(){
    const stevenZero = musicObj.steven[0];
    const stevenOne = musicObj.steven[1];
    const originalSteven = 'pokemon-sprites/Steven_III_OD.png'
    const newSteven = 'pokemon-sprites/STEVEN_OD.png';
    const metagross = 'pokemon-sprites/376_0.png';
    const megaMetagross = 'pokemon-sprites/SHINYMETAGROSS.png';
    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === null) {
      cancelOptions("Steven and Metagross #1", "Steven and Mega Metagross #2", originalSteven, metagross, newSteven, megaMetagross)
    }

    if (musicChoice === "Q") {
      removeStyles(stevenZero, stevenOne, $("#OG-steven-music"), $("#steven-music"))
      gifRestore(3)
      whenQuit($("#steven"),"Steven")
    } else {
      if (musicChoice === "O") {
        objPlaySong('steven', 0, 1);
        generateControls($("#steven-music"), $("#OG-steven-music"))
        const imageURL = 'images/manthatmeta.jpeg';
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "auto");
        makeSprites(originalSteven, metagross);
        $(".which-trainer").text("Steven and Metagross #1");
        $(".music").prop("currentTime",0);
        gifDisappear(3)
      }
  
      if (musicChoice === "R") {
        objPlaySong('steven', 1, 0);
        generateControls($("#OG-steven-music"), $("#steven-music"))
        const imageURL = 'images/METAGROSSSHINYMEGA.jpeg'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "100%");
        makeSprites(newSteven, megaMetagross)
        $(".which-trainer").text("Steven and Mega Metagross #2")
        $(".music").prop("currentTime",0);
        gifDisappear(3)
      }
    }
  })

  $("#wallace").click(function(){
    const wallaceZero = musicObj.wallace[0];
    const wallaceOne = musicObj.wallace[1];
    const orginialWallace = 'pokemon-sprites/Wallace_III_OD.png'
    const newWallace = 'pokemon-sprites/Wallace_OD.png';
    const milotic = 'pokemon-sprites/350.png'

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === null) {
     cancelOptions("Wallace and Milotic #1", "Wallace and Milotic #2", orginialWallace, milotic, newWallace, milotic)
   }

   if (musicChoice === "Q") {
    removeStyles(wallaceZero, wallaceOne, $("#wallace-music"), $("#OG-steven-music"));
    gifRestore(4)
    whenQuit($("#wallace"),"Wallace")
   
   } else {
    if (musicChoice === "O") {
      objPlaySong('wallace', 0, 1);
      generateControls($("#wallace-music"), $("#OG-steven-music"))
      const imageURL = 'images/MILOTIC.jpeg'
      makeSprites(orginialWallace, milotic)
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
      $(".music").prop("currentTime",0);
      $(".which-trainer").text("Wallace and Milotic #1");
      gifDisappear(4);
    }
 
    if (musicChoice === "R") {
      objPlaySong('wallace', 1, 0);
      generateControls($("#OG-steven-music"), $("#wallace-music"));
      let imageURL = 'images/MILOHD.jpeg';
      makeSprites(newWallace, milotic);
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "100%");
      $(".music").prop("currentTime",0);
      $(".which-trainer").text("Wallace and Milotic #2");
      gifDisappear(4);
    }
    }
  })

  $("#cynthia").click(function(){
    const cynZero = musicObj.cynthia[0];
    const cynOne = musicObj.cynthia[1];
    const originalCyn = 'pokemon-sprites/Cynthia_IV_OD.png'
    const newCyn = 'pokemon-sprites/Cynthia_OD.png'
    const garchomp = 'pokemon-sprites/445s_0.png'
    

     $(".sprite-container").remove();
     $(".reactive-trainer-text").css("opacity","0");
  
     let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === null) {
    cancelOptions("Cynthia and Garchomp #1", "Cynthia and Garchomp #2", originalCyn, garchomp, newCyn, garchomp)
  }

    if (musicChoice === "Q") {
    removeStyles(cynZero, cynOne, $("#OG-cynthia-music"), $("#cynthia-music"))
    gifRestore(5)
    whenQuit($("#cynthia"),"Cynthia")
    } else {
     if (musicChoice === "O") {
       objPlaySong('cynthia', 0, 1);
       generateControls($("#cynthia-music"), $("#OG-cynthia-music"))
       let imageURL = 'images/grrrr.png'
       $("body").css("background-image", "url(" + imageURL + ")");
       $("body").css("background-size", "130%");
       makeSprites(originalCyn, garchomp)
       $(".music").prop("currentTime",0);
       $(".which-trainer").text(`Cynthia and Garchomp #1`)
        gifDisappear(5)
     }
  
     if (musicChoice === "R") {
       objPlaySong('cynthia', 1, 0);
       generateControls($("#OG-cynthia-music"), $("#cynthia-music"))
       let imageURL = 'images/GARCHOMP.jpeg'
       $("body").css("background-image", "url(" + imageURL + ")");
       $("body").css("background-size", "100%");
       makeSprites(newCyn, garchomp)
       $(".music").prop("currentTime",0);
       $(".which-trainer").text(`Cynthia and Garchomp #2`)
        gifDisappear(5)
     }

 
   }
 })
  
 
$("#alder").click(function(){
    const alderZero = musicObj.alder[0];
    const alderOne = musicObj.alder[1];
    const alder = 'pokemon-sprites/ALDER_OD.png'
    const vol = 'pokemon-sprites/637_down.png'

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Old School or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
     musicChoice = prompt("O for original or R for remastered")
   }

   if (musicChoice === null) {
     cancelOptions("Alder and Volcarona #1", "Alder and Volcarona #2", alder, vol, alder, vol)
   }

   if (musicChoice === "Q") {
    removeStyles(alderZero, alderOne, $("#alder-music"), $("#alder-music-remix"));
    gifRestore(6)
    whenQuit($("#alder"),"Alder")
   } else {
     if (musicChoice === "O") {
      objPlaySong('alder', 0, 1);
      generateControls($("#alder-music-remix"), $("#alder-music"))
      let imageURL = 'images/VOLCARONA.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "auto");
      makeSprites(alder, vol)
      $(".which-trainer").text("Alder and Volcarona #1")
      $(".music").prop("currentTime",0); 
      gifDisappear(6)
     }
  
     if (musicChoice === "R") {
      objPlaySong('alder', 1, 0);
      generateControls($("#alder-music"), $("#alder-music-remix"))
      let imageURL = 'images/todxpr4sygj61.jpeg'
      $("body").css("background-image", "url(" + imageURL + ")");
      $("body").css("background-size", "103%");
      makeSprites(alder, vol)
      $(".which-trainer").text("Alder and Volcarona #2")
      $(".music").prop("currentTime",0); 
      gifDisappear(6)
     }
    }
  })

  $("#iris").click(function(){
    const irisZero = musicObj.iris[0];
    const irisOne = musicObj.iris[1];
    const iris = 'pokemon-sprites/Iris_OD_2.png'
    const hax =  'pokemon-sprites/612_left.png'
    
    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === null) {
      cancelOptions("Iris and Haxorus #1", "Iris and Haxorus #2", iris, hax, iris, hax)
    }

    if (musicChoice === "Q") {
      removeStyles(irisZero, irisOne, $("#iris-music"),$("#iris-music-remix"));
      gifRestore(7);
      whenQuit($("#iris"),"Iris")
     } else {
       if (musicChoice === "O") {
         objPlaySong('iris', 0, 1);
         generateControls($("#iris-music-remix"),$("#iris-music"))
         let imageURL = 'images/HAXORUS.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "auto");
         makeSprites(iris, hax)
         $(".which-trainer").text("Iris and Haxorus #1")
         $(".music").prop("currentTime",0);
         gifDisappear(7);
       }
   
       if (musicChoice === "R") {
         objPlaySong('iris', 1, 0);
         generateControls($("#iris-music"), $("#iris-music-remix"))
         let imageURL = 'images/haxorusPOWER.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "100%");
         makeSprites(iris, hax)
         $(".which-trainer").text("Iris and Haxorus #2")
         $(".music").prop("currentTime",0);
         gifDisappear(7);
       }

     }
   })

  $("#n").click(function(){
    const nZero = musicObj.n[0];
    const nOne = musicObj.n[1];
    const n = 'pokemon-sprites/N.png';
    const resh = 'pokemon-sprites/THERESH.png';
    const zoro = 'pokemon-sprites/571.png';

    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === null) {
      cancelOptions("N and Reshiram #1", "N and Zoroark #2", n, resh, n, zoro)
    }

    if (musicChoice === "Q") {
      removeStyles(nZero, nOne, $("#n-music"), $("#n-music-remix"));
      gifRestore(8);
      whenQuit($("#n"),"N")
     } else {
       if (musicChoice === "O") {
         objPlaySong('n', 0, 1);
         generateControls($("#n-music-remix"),$("#n-music"))
         let imageURL = 'images/Reshiram-Wallpapers-HD.jpeg'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "115%");
         makeSprites(n, resh)
         $(".which-trainer").text("N and Reshiram #1");
         $(".music").prop("currentTime",0);
         gifDisappear(8);
       }
   
       if (musicChoice === "R") {
         objPlaySong('n', 1, 0);
         generateControls($("#n-music"),$("#n-music-remix"))
         let imageURL = 'images/me2fhc4zfbf31.png'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "110%");
         makeSprites(n, zoro)
         $(".which-trainer").text("N and Zoroark #2");
         $(".music").prop("currentTime",0);
         gifDisappear(8);
       }
     }
   })

   $("#ghetsis").click(function(){
    const ghetZero = musicObj.ghetsis[0];
    const ghetOne = musicObj.ghetsis[1];
    const ghet = 'pokemon-sprites/Ghetsiswalkdown.png';
    const hydreigon = 'pokemon-sprites/635.png';
    const kyur = 'pokemon-sprites/646.png'


    $(".sprite-container").remove();
    $(".reactive-trainer-text").css("opacity","0");

    let musicChoice = prompt("Type which ever version you want: Original or Remastered")
    while (musicChoice !== "O" && musicChoice !== "R" && musicChoice !== "Q" && musicChoice !== null) {
      musicChoice = prompt("O for original or R for remastered")
    }

    if (musicChoice === null) {
      cancelOptions("Ghetsis and Hydreigon #1", "Ghetsis and Kyurem White #2", ghet, hydreigon, ghet, kyur)
    }

    if (musicChoice === "Q") {
      removeStyles(ghetZero, ghetOne, $("#ghetsis-music"), $("#ghetsis-music-remix"));
      gifRestore(9);
      whenQuit($("#ghetsis"),"Ghetsis")
     } else {
       if (musicChoice === "O") {
         objPlaySong('ghetsis', 0, 1);
         generateControls($("#ghetsis-music-remix"),$("#ghetsis-music"))
         let imageURL = 'images/hydreigon.png'
         $("body").css("background-image", "url(" + imageURL + ")");
         $("body").css("background-size", "115%");
         makeSprites(ghet, hydreigon)
         $(".which-trainer").text("Ghetsis and Hydreigon #1");
         $(".music").prop("currentTime",0);
         gifDisappear(9);

       }
   
       if (musicChoice === "R") {
        objPlaySong('ghetsis', 1, 0);
        generateControls($("#ghetsis-music"),$("#ghetsis-music-remix"))
        let imageURL = 'images/452-4523651_pokemon-kyurem-white-hd-wallpaper-download-pokemon-white.png'
        $("body").css("background-image", "url(" + imageURL + ")");
        $("body").css("background-size", "100%");
        makeSprites(ghet, kyur)
        $(".which-trainer").text("Ghetsis and Kyurem White #2");
        $(".music").prop("currentTime",0);
        gifDisappear(9);
      }
    }
  })
})




