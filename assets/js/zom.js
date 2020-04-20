var api_key = "011effc714198a73f9e6e2d459b7d7a9";
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
  var queryURL = `https://developers.zomato.com/api/v2.1/cities?q=${cityInfo}`;
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

// https://developers.zomato.com/api/v2.1/cities?q=lawrence%2C%20ks
// https://developers.zomato.com/api/v2.1/cities?q=lawrence
