$(document).ready(function() {

	let topics = ["my hero acadamia", "tokyo ghoul", "akame ga kill", "your lie in april", "erased", "death parade", "noragami", "twin star exorcists", "steins gate", "samurai champloo", "mob psycho 100"];

	
	function addButtons() {

		for (let i = 0; i < topics.length; i++) {

			let buttons = $("<button>");

			buttons.addClass("animes");

			buttons.attr("data-name", topics[i]);

			buttons.text(topics[i]);

			$("#gif-area").append(buttons);


		}

	}


	addButtons();






















	// closing tag for document ready
});