var api_key = "011effc714198a73f9e6e2d459b7d7a9";
// 011effc714198a73f9e6e2d459b7d7a9
// var cityInfo = $("#searchCity");

$("button").on("click", function (e) {
  e.preventDefault();
  var cityInfo = $("#searchCity");
  cityInfo = $("#searchCity").val();
  cuisineSearch(cityInfo);
  console.log(cityInfo);
});

function cuisineSearch(cityInfo) {
  // console.log(cityInfo);
  var queryURL = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cityInfo}
  `;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    // $("id").append();
    console.log(queryURL);
    console.log(cityInfo);
    console.log(res);

    var cityName = $("<p>").text(cityInfo);
    $("#restSearch").append(cityName);
  });
}

// curl -X GET --header "Accept: application/json" --header "user-key: 1891c2f87e866cce179dc117083873fa" "https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318"

// https://developers.zomato.com/api/v2.1/cities?q=lawrence%2C%20ks&key=${api_key}
// https://developers.zomato.com/api/v2.1/cities?q=lawrence

//https://maps.googleapis.com/maps/api/place/nearbysearch/json
// ?location=-33.8670522,151.1957362
// &radius=500
// &types=food
// &name=harbour
// &key=

//$.ajax call
// $.ajax({
//   method: "GET",
//   crossDomain: true,
//   url:
//     "https://developers.zomato.com/api/v2.1/search?count=6&lat=37.79161&lon=-122.42143&establishment_type=6",
//   dataType: "json",
//   async: true,
//   headers: {
//     "user-key": "011effc714198a73f9e6e2d459b7d7a9",
//   },
//   success: function (data) {
//     passZomatoData(data);
//   },
//   error: function () {
//     infoContent =
//       "<div>Sorry, data is not coming through. Refresh and try again.</div>";
//   },
// });
