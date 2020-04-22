// click function for 'Search Cocktails' button on html page.
$("#cocktail").click(function (e) {
  e.preventDefault();
  $("#cocktailList").empty();
  var cocktail = $("#searchCocktail");
  cocktail = $("#searchCocktail").val();
  cocktailSearch(cocktail);
  console.log(cocktail);
});

// function to search cocktail DB being called in click function above
function cocktailSearch(cocktail) {
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + cocktail;

  // ajax call to get drinks by ingredient
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);

    // populating res to page
    for (var i = 0; i < 5; i++) {
      console.log(res.drinks[i].strDrink);
      var cocktailDiv = $("<li>");
      cocktailDiv.append(res.drinks[i].strDrink);
      cocktailDiv.append("<img src=" + res.drinks[i].strDrinkThumb + ">");
      $("#cocktailList").append(cocktailDiv);
    }
  });
}
