$(document).ready(function() {
	// array of things to search
	let topics = ["my hero academia", "tokyo ghoul", "akame ga kill", "your lie in april", "elfen lied", 
	"death parade", "noragami", "twin star exorcists", "steins gate", "samurai champloo", "mob psycho 100"];
	// function that searches for the button clicked on giphy and adds the image and rating to the html
	function displayGif() {
		$("#gif-area").empty();
		const search = $(this).attr("data-name");
		const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=15";

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

				// hover event to animate and pause gifs
				$(".gif").hover( function() {
					let static = results[i].images.original_still.url
					if (static) {
						let src = $(this).attr("src");
	    				$(this).attr('src', src.replace(results[i].images.original_still.url, results[i].images.fixed_height.url));
	    				console.log("it should be moving");
					} 

					$(".gif").mouseleave( function() {
						let static = results[i].images.original_still.url
						if (static) {
							let src = $(this).attr("src");
			    			$(this).attr('src', src.replace(results[i].images.fixed_height.url, results[i].images.original_still.url));
			    			console.log("it should NOT be moving");
						} 
					})
				});
			}
		});
	};

	// function to add the array to the html in button form
	function addButtons() {
		$("#button-area").empty();
		for (let i = 0; i < topics.length; i++) {
			let buttons = $("<button>");
			buttons.addClass("animes");
			buttons.attr("data-name", topics[i]);
			buttons.text(topics[i]);
			$("#button-area").append(buttons);
		}
	}

	// on click event for the form to add buttons
	$("#add-anime").on("click", function(e) {
		event.preventDefault();
		const animeAdded = $("#anime-input").val().trim();
		if (animeAdded.length === 0) {
					return;
				}
		topics.push(animeAdded);
		addButtons();
		$("#anime-input").val('');
	});

	// the on click that searches for stuff by running the function
	$(document).on("click", ".animes", displayGif);
	addButtons();
// closing tag for document ready
});