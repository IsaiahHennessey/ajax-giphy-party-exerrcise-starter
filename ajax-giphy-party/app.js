$(document).ready(function () {
  const apiKey = "DDlcXJSfFWv4g65zKtCvajj9l0f53DfW";

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    let searchTerm = $("#search-input").val().trim();
    if (searchTerm) {
      fetchGif(searchTerm);
    }
  });

  $("#clear-button").on("click", function () {
    $("#gif-container").empty();
  });

  function fetchGif(searchTerm) {
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search`,
      method: "GET",
      data: {
        q: searchTerm,
        api_key: apiKey,
        limit: 1,
      },
      success: function (response) {
        if (response.data.length > 0) {
          let gifUrl = response.data[0].images.fixed_height.url;
          $("#gif-container").append(`<img src="${gifUrl}" alt="GIF">`);
        } else {
          alert("No GIFs found for the search term.");
        }
      },
      error: function () {
        alert("Failed to fetch GIF. Please try again.");
      },
    });
  }
});
