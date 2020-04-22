var api_key = "fdee2460fb0543bbb3a01fba851b4b74";
// fdee2460fb0543bbb3a01fba851b4b74 - Spoonacular Key

$("#recipes").on("click", function (e) {
  e.preventDefault();
  $("#recipeList").empty();
  var foodInfo = $("#searchRecipe");
  foodInfo = $("#searchRecipe").val();
  cuisineSearch(foodInfo);
  console.log(foodInfo);
});

function cuisineSearch(foodInfo) {
  var queryURL = `https://api.spoonacular.com/recipes/search?query=${foodInfo}&apiKey=${api_key}
  `;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);
    for (var i = 0; i < 5; i++) {
      // console.log(res.list[i]);
      console.log(res.results[i].title);
      var recipeDiv = $("<li>");
      recipeDiv.append(res.results[i].title);
      $("#recipeList").append(recipeDiv);
    }
    // $("id").append();
    // console.log(queryURL);
    // console.log(cityInfo);

    // var cityName = $("<p>").text(drinks.strDrink);
    // $("#restaurants").append(cityName);
  });
}
