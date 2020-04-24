$(document).ready(function () {
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
          class: "drinkImg",
          src: res.drinks[i].strDrinkThumb,
          alt: "Cocktail Image",

          style: "z-index:100;width:300px;height:300px",
        });

        /* cocktailDiv.append("<img src=" + res.drinks[i].strDrinkThumb + ">"); */
        cocktailDiv.append(cocktailImg);
        $("#cocktailList").append(cocktailDiv);

        Zoomerang.config({
          maxHeight: 400,
          maxWidth: 400,
          bgColor: "#000",
          bgOpacity: 1,
          deepCopy: true,
          onOpen: openCallback,
          onClose: closeCallback,
          onBeforeOpen: beforeOpenCallback,
          onBeforeClose: beforeCloseCallback,
        }).listen(".drinkImg");

        function openCallback(el) {
          console.log("zoomed in on: ");
          console.log(el);
        }

        function closeCallback(el) {
          console.log("zoomed out on: ");
          console.log(el);
        }

        function beforeOpenCallback(el) {
          console.log("on before zoomed in on:");
          console.log(el);
        }

        function beforeCloseCallback(el) {
          console.log("on before zoomed out on:");
          console.log(el);
        }
      }
    });
  }
});
