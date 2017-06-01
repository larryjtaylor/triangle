$(document).ready(function() {
  $("#triangle-sides").submit(function(event) {
    event.preventDefault();

    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());

    if (sideA === sideB && sideA === sideC) {
      $("#equilateral").show();
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $("#isosceles").show();
    } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
      $("#scalene").show();
    } else {
      $("#not").show();
    }

  });
});
