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

