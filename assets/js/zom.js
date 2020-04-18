var api_key = "1891c2f87e866cce179dc117083873fa";
var cityInfo = "";

$("button").on("click", function (e) {
  e.preventDefault();
  cityInfo = $("#searchCity").val();
  cuisineSearch(cityInfo);
  // console.log(cityInfo);
});

function cuisineSearch(cityInfo) {
  console.log(cityInfo);
  var queryURL = `https://developers.zomato.com/${api_key}/v2.1/search?q=${cityInfo}`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    // $("id").append();
    console.log(queryURL);
  });
}

// curl -X GET --header "Accept: application/json" --header "user-key: 1891c2f87e866cce179dc117083873fa" "https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318"

// https://developers.zomato.com/api/v2.1/cities?q=lawrence%2C%20ks
// https://developers.zomato.com/api/v2.1/cities?q=lawrence
