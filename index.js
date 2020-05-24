function new_clock() {
  clock = new Date();
  hour = clock.getHours();
  if (hour < 10) {
    hour = "0" + hours;
  }
  minutes = clock.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  seconds = clock.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  print_clock = hour + " : " + minutes + " : " + seconds;

  $("#time").html(print_clock);

  setTimeout(new_clock, 1000);
}

setTimeout(new_clock, 1000);



// VOLUME Slider

var lineHeight = $(".drag-line").height() - 15;

$(".draggable-button").draggable({
  axis: "y",
  containment: "parent",
});

$(".draggable-button").on("drag", function () {
  var position = $(".draggable-button").position();
  var marginTop = position.top;
  $(".line").css({
    clip: "rect(" + (marginTop + 10) + "px,8px, 183px,0px)",
  });
});

$(".vol-down").on("click", function () {
  var position = $(".draggable-button").position();
  var marginTop = position.top;

  $(".line").css({
    clip: "rect(" + (marginTop + 15) + "px,8px, 183px,0px)",
  });

  if (marginTop < lineHeight) {
    $(".draggable-button").css({
      top: marginTop + 14,
    });
  }
});

$(".vol-up").on("click", function () {
  var position = $(".draggable-button").position();
  var marginTop = position.top;

  $(".line").css({
    clip: "rect(" + (marginTop - 13) + "px,8px, 183px,0px)",
  });

  if (marginTop > 0) {
    $(".draggable-button").css({
      top: marginTop - 14,
    });
  }
});

$(".mute-icon").on("click", function () {
  var position = $(".draggable-button").position();
  const marginTop = position.top;

  $("#mute-icon").toggleClass("mute-icon-active");

  $(".line").toggle(function () {
    $(".line").css({
      "margin-bottom": "0px",
    });
  });

  $(".draggable-button").toggleClass("top155");
});

// Mic 1 Slider

$(".draggable-button-mic1").draggable({
  axis: "y",
  containment: "parent",
});

$(".draggable-button-mic1").on("drag", function () {
  var position = $(".draggable-button-mic1").position();
  var marginTop = position.top;
  $(".line-mic1").css({
    clip: "rect(" + (marginTop + 10) + "px,8px, 183px,0px)",
  });
});

$(".mic1-down").on("click", function () {
  var position = $(".draggable-button-mic1").position();
  var marginTop = position.top;

  $(".line-mic1").css({
    clip: "rect(" + (marginTop + 15) + "px,8px, 183px,0px)",
  });

  if (marginTop < lineHeight) {
    $(".draggable-button-mic1").css({
      top: marginTop + 14,
    });
  }
});

$(".mic1-up").on("click", function () {
  var position = $(".draggable-button-mic1").position();
  var marginTop = position.top;

  $(".line-mic1").css({
    clip: "rect(" + (marginTop - 13) + "px,8px, 183px,0px)",
  });

  if (marginTop > 0) {
    $(".draggable-button-mic1").css({
      top: marginTop - 14,
    });
  }
});

$(".mute-icon-mic1").on("click", function () {
  var position = $(".draggable-button-mic1").position();
  const marginTop = position.top;

  $("#mute-icon-mic1").toggleClass("mute-icon-active");

  $(".line-mic1").toggle(function () {
    $(".line-mic1").css({
      "margin-bottom": "0px",
    });
  });

  $(".draggable-button-mic1").toggleClass("top155");
});

// Mic 2 Slider

$(".draggable-button-mic2").draggable({
  axis: "y",
  containment: "parent",
});

$(".draggable-button-mic2").on("drag", function () {
  var position = $(".draggable-button-mic2").position();
  var marginTop = position.top;
  $(".line-mic2").css({
    clip: "rect(" + (marginTop + 10) + "px,8px, 183px,0px)",
  });
});

$(".mic2-down").on("click", function () {
  var position = $(".draggable-button-mic2").position();
  var marginTop = position.top;

  $(".line-mic2").css({
    clip: "rect(" + (marginTop + 15) + "px,8px, 183px,0px)",
  });

  if (marginTop < lineHeight) {
    $(".draggable-button-mic2").css({
      top: marginTop + 14,
    });
  }
});

$(".mic2-up").on("click", function () {
  var position = $(".draggable-button-mic2").position();
  var marginTop = position.top;

  $(".line-mic2").css({
    clip: "rect(" + (marginTop - 13) + "px,8px, 183px,0px)",
  });

  if (marginTop > 0) {
    $(".draggable-button-mic2").css({
      top: marginTop - 14,
    });
  }
});

$(".mute-icon-mic2").on("click", function () {
  var position = $(".draggable-button-mic2").position();
  const marginTop = position.top;

  $("#mute-icon-mic2").toggleClass("mute-icon-active");

  $(".line-mic2").toggle(function () {
    $(".line-mic2").css({
      "margin-bottom": "0px",
    });
  });

  $(".draggable-button-mic2").toggleClass("top155");
});

// Pop up mics animate__zoomOutLeft

$("#close-icon").on("click", function () {
  var mics = $(".mics-container");
  mics.removeClass("animate__zoomIn");
  mics.addClass("animate__zoomOutLeft ");

  setTimeout(function () {
    mics.addClass("hidden");
  }, 2000);

  // $(".mics-container").addClass("hidden").delay(5000);
  // var add = function () {
  //   $(".mics-container").addClass("hidden");
  // };
  // setTimeout(add, 2000);
});

$("#big-mic-icon").on("click", function () {
  $(".mics-container").removeClass("hidden animate__zoomOutLeft");
  $(".mics-container").addClass("animate__zoomIn");
});
$("#small-mic-icon").on("click", function () {
  $(".mics-container").removeClass("hidden animate__zoomOutLeft");
  $(".mics-container").addClass("animate__zoomIn");
});
