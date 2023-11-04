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

// Add this JavaScript code in your topics.js or relevant JavaScript file

$(document).ready(function() {
  // Listen for a click event on the "Create Chat" button
  $("#proceed-button").on("click", function() {
    // Retrieve the selected course, unit, and topic IDs
    const courseId = $("#course-select").val();
    const unitId = $("#unit-select").val();
    const topicId = $("#topic-select").val();

    // Send an AJAX request to create or find the chat instance
    $.ajax({
      url: "/chats", // The URL to the ChatsController
      type: "POST", // Use POST to create a new chat instance
      data: {
        course_id: courseId,
        unit_id: unitId,
        topic_id: topicId
      },
      headers: {
        "X-CSRF-Token": Rails.csrfToken() // Include the CSRF token
      },
      success: function(data) {
        // Redirect the user to the chat view
        window.location.href = "/chats/" + data.chat_id; // Adjust the URL structure as needed
      },
      error: function(error) {
        // Handle the error, e.g., display an error message
        console.log("Error creating chat: " + error);
      }
    });
  });
});
