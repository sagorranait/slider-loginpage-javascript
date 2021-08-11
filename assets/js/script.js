(function () {

  'use strict';

  var $firstButton = $(".first"),
    $secondButton = $(".second"),
    $input = $("input"),
    $name = $(".name"),
    $more = $(".more"),
    $yourname = $(".yourname"),
    $reset = $(".reset"),
    $ctr = $(".container");

  $firstButton.on("click", function (e) {
    $(this).delay(300).queue(function () {
      $ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
      $(".image_btn").addClass("image_btn_show").removeClass("image_btn_hidden");
    });
    e.preventDefault();
  });

  $secondButton.on("click", function (e) {
    $(this).delay(300).queue(function () {
      $ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
      $(".image_btn").addClass("image_btn_hidden").removeClass("image_btn_show");
      $name = $name.val();
      if ($name == "") {
        $yourname.html("Anonymous!");
      }
      else { $yourname.html($name + "!"); }
    });
    e.preventDefault();
  });

})();