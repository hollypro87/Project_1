// click function for 'Search Cocktails' button on html page.
$("#cocktail").click(function (e) {
  e.preventDefault();
  $("#cocktailList").empty();
  var cocktail = $("#searchCocktail");
  cocktail = $("#searchCocktail").val();
  cocktailSearch(cocktail);
  cocktailSearch(cocktail);
  cocktailSearch(cocktail);
  cocktailSearch(cocktail);
  cocktailSearch(cocktail);
  console.log(cocktail);
});

// function to search cocktail DB being called in click function above
function cocktailSearch(cocktail) {
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

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

      var cocktailImg = $("<img/>").attr({
        id: "drinkImg",
        src: res.drinks[i].strDrinkThumb,
        alt: "Cocktail Image",
        width: 300,
        height: 300,
      });

      /* cocktailDiv.append("<img src=" + res.drinks[i].strDrinkThumb + ">"); */
      cocktailDiv.append(cocktailImg);
      $("#cocktailList").append(cocktailDiv);
    }
  });
}
