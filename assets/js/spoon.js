var api_key = "fdee2460fb0543bbb3a01fba851b4b74";
// fdee2460fb0543bbb3a01fba851b4b74 - Spoonacular Key

//Click function
$("#recipes").on("click", function (e) {
  e.preventDefault();
  $("#recipeList").empty();
  // var memory = $("#searchRecipe").attr("id");
  var foodInfo = $("#searchRecipe");
  foodInfo = $("#searchRecipe").val();
  // localStorage.setItem(memory, foodInfo);
  cuisineSearch(foodInfo);
  console.log(foodInfo);
});

function cuisineSearch(foodInfo) {
  var queryURL = `https://api.spoonacular.com/recipes/search?query=${foodInfo}&apiKey=${api_key}
  `;
  console.log(queryURL);
  //AJAX call
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);
    //Loop will dynamically add to html page
    for (var i = 0; i < 5; i++) {
      // console.log(res.list[i]);
      // console.log(res.results[i].title);
      var recipeDiv = $("<li>");
      recipeLink = $("<a>");
      recipeLink.attr("href", res.results[i].sourceUrl);
      recipeLink.text(res.results[i].title);
      recipeDiv.append(recipeLink);
      var recImage = $("<img>");
      recImage.attr({
        src: "https://spoonacular.com/recipeImages/" + res.results[i].image,
        alt: "Recipe Image",
        class: "recipeImg",
        style: "z-index:100;width:300px;height:300px",
      });
      recipeDiv.append(recImage);
      $("#recipeList").append(recipeDiv);
      // $("#searchRecipe").val(localStorage.getItem("searchRecipe"));
      mediumZoom(".recipeImg", { background: "#090942" });
    }
  });
}
