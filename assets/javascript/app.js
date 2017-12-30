$(document).ready(function() {

	// array of buttons
	let topics = ["my hero acadamia", "tokyo ghoul", "akame ga kill", "your lie in april", "erased", "death parade", "noragami", "twin star exorcists", "steins gate", "samurai champloo", "mob psycho 100"];

	
	// function to add the array to the html in button form
	function addButtons() {

		for (let i = 0; i < topics.length; i++) {

			let buttons = $("<button>");

			buttons.addClass("animes");

			buttons.attr("data-name", topics[i]);

			buttons.text(topics[i]);

			$("#button-area").append(buttons);
		}

	}

	addButtons();
	

	// on click event that searchs fot the button clicked on giphy and adds the image and rating to the html
	// inner on click event to animate and pause gifs
	$("button").on("click", function() {
		
		const search = $(this).attr("data-name");

		const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			console.log(response);

			const results = response.data;

			for (let i = 0; i < results.length; i++) {

				const gifDiv = $("<div class='item'>");

				const rating = results[i].rating;

				const p = $("<p>").text("Rating: " + rating);

				const animeImage = $("<img>");
				animeImage.addClass("gif");

				animeImage.attr("src", results[i].images.original_still.url);

				

				gifDiv.prepend(p);
				gifDiv.prepend(animeImage);
				$("#gif-area").prepend(gifDiv);



				$(".gif").on("click", function() {

					let static = animeImage.attr("src", results[i].images.original_still.url)

					let animated = animeImage.attr("src", results[i].images.fixed_height.url)

					if (static) {

						animated

					} else {

						static

					}

				});

			}

		});

	});


	




	






















	// closing tag for document ready
});