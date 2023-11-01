$(document).ready(function() {
  $("#course-select").on("change", function() {
    var selectedCourseId = $(this).val();

    if (selectedCourseId) {
      // Show the unit dropdown and populate it with units for the selected course
      $("#unit-dropdown").show();
      $.ajax({
        url: "/units", // Replace with your route to fetch units for a course
        method: "GET",
        data: { course_id: selectedCourseId },
        success: function(data) {
          $("#unit-select").html(data);
        }
      });
    } else {
      // Hide unit and topic dropdowns
      $("#unit-dropdown").hide();
      $("#topic-dropdown").hide();
    }
  });

  $("#unit-select").on("change", function() {
    var selectedUnitId = $(this).val();

    if (selectedUnitId) {
      // Show the topic dropdown and populate it with topics for the selected unit
      $("#topic-dropdown").show();
      $.ajax({
        url: "/topics", // Replace with your route to fetch topics for a unit
        method: "GET",
        data: { unit_id: selectedUnitId },
        success: function(data) {
          $("#topic-select").html(data);
        }
      });
    } else {
      // Hide topic dropdown
      $("#topic-dropdown").hide();
    }
  });

  $("#topic-select").on("change", function() {
    // Show the proceed button when a topic is selected
    $("#proceed-button").show();
  });
});
