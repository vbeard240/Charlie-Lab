$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
   

    var game_msg = "";

     if (new_count < 404) {
      game_msg = "not wow :(";
    } else if (new_count == 404) {
      game_msg = "super wow o.O";
    } else {
      game_msg = "yes wow :)";
      $("img").attr(
        "src",
      "https://i.imgflip.com/58e4ts.jpg" ); 
    } 

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});