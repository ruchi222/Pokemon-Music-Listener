$(document).ready(function(){
  function textChange(gif, gifText) {
    gif.hover(function(){
      $(".reactive-trainer-text").text(gifText)
    })
    $(".mini-gif-container").mouseleave(function(){
      $(".reactive-trainer-text").text("Select A Trainer")
    })
  }

  const red = $("#red");
  const blue = $("#blue");
  const lance = $("#lance");
  const steven = $("#steven");
  const wallace = $("#wallace");
  const cyn = $("#cynthia");
  const alder = $("#alder");
  const iris = $("#iris");
  const n = $("#n");
  const ghet = $("#ghetsis");


  textChange(red, "Red");
  textChange(blue, "Blue");
  textChange(lance, "Lance");
  textChange(steven, "Steven");
  textChange(wallace, "Wallace");
  textChange(cyn, "Cynthia");
  textChange(alder, "Alder");
  textChange(iris, "Iris");
  textChange(n, "N");
  textChange(ghet, "Ghetsis");
})