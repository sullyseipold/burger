$(function() {
  $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");

      var state = {
          devoured: true
      };

      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: state
      }).then(function() {
          location.reload();
      });
  });  

  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var burger_name = $("[name=burger-name]").val().trim();

      if(burger_name !== "") {
          var newBurger = {
              burger_name: burger_name
          };

          $.ajax("/api/burgers", {
              type: "POST",
              data: newBurger
          }).then(function() {
              location.reload();
          });
      }
      else {
          $("[name=burger-name]").val("");
      }
  }); 
});