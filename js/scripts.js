$(document).ready(function() {
  $("#addVacation").submit(function(event) {
    event.preventDefault();

    var formLocation = $("#location").val();
    var formDate = $("#date").val();
    var formRecollections = $("#recollections").val();
    var formImages = $("#image").val();

    var vacation = {
      location: formLocation,
      date: formDate,
      notes: formRecollections,
      image: formImages
    };

    $("#vacationList").append("<li class='vacation clickable'>" + vacation.location + "</li>");

    $(".vacation").last().click(function() {
      $(".tripLocation").text(vacation.location);
      $(".tripDate").text(vacation.date);
      $(".tripNotes").text(vacation.notes);
      $(".tripImage").attr("src", vacation.image);

      $(".trip").hide(0);
      $(".trip").slideDown(500);

    });

  });
});
