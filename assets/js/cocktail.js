$("#cocktail").click(function (e) {
  e.preventDefault();
  var cocktail = $("#ingredient");
  cocktail = $("#ingredient").val();
  cocktailSearch(cocktail);
  console.log(cocktail);
});

function cocktailSearch(cocktail) {
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + cocktail;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);
  });
}
