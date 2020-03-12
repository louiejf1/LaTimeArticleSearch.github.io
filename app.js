$(document).ready(function () {


    $("#searchBtn").on("click", function () {
        //alert('clicked');

        let apiKey = '5Y5P8FXEaJnj3BJOrFf1yHrmdzsPewAH';

        let query = $('#searchTerm').val();
        console.log(query);
  
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`

        let starYear = '';//$().val();

        let endYear = ''; //$().val();

        let nunOfSearches = $('#noToRetreive').val();
        let number = parseInt(nunOfSearches);
        //onsole.log(number + typeof(number));
 

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                //console.log(response);
                var results = response.response.docs;
                //console.log(results);

                for (let i = 0; i < results.length; i++) {
 

                let article = results[i];

                let p = $("<p>").text("Doc#: " + article);


                $('#bottomSection').prepend(p);
                
                }
            });
    });



});