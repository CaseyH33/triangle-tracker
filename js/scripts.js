var triangleTracker = function(side1, side2, side3) {
  if (((side1+side2) <= side3) || ((side1+side3) <= side2) || ((side2+side3) <= side1)) {
    return "Is not a triangle";
  } else if (side1 === side2 && side1 === side3) {
    return "Is equalateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Is isosceles";
  } else {
    return "Is scalene";
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangleTracker(side1, side2, side3);
console.log(result);
    $(".triangle-type").empty();
    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);
    $(".triangle-type").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
