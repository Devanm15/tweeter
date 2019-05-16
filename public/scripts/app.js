/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

function renderTweets(tweets) {
	tweets.forEach(data => {
		$(".tweet-container").prepend(createTweetElement(data));
	});
}

function createTweetElement(tweet) {
	let $tweet = $("<article>").addClass("tweet");
	let $header = $("<header>");
	let $body = $("<section>").addClass("body-of-article");
	let $footer = $("<footer>");
	let $image = $("<img>")
		.addClass("avatar")
		.attr("src", tweet.user.avatars.small);
	let $handle = $("<h6>").text(tweet.user.handle);
	let $Username = $("<span>")
		.text(tweet.user.name)
		.addClass("username");
	let $content = $("<p>").text(tweet.content.text);
	let $created_at = $("<p>").text(tweet.created_at);

	$header.append($image);
	$header.append($handle);
	$header.append($Username);
	$body.append($content);
	$footer.append($created_at);
	$tweet.append($header);
	$tweet.append($body);
	$tweet.append($footer);

	return $tweet;
}
function loadTweets() {
	$.ajax({
		type: "GET",
		url: "/tweets",
		data: JSON,
		success: function(data) {
			renderTweets(data);
		}
	});
}
$(document).ready(function() {
	// loadTweets();
	$(function() {
		let $newPost = $("form");
		$newPost.submit(function(event) {
			// event.preventDefault();
			let textInput = $("#text-insert").val().length;
			if (textInput > 140) {
				alert("This message has too many characters");
			}
			if (textInput === 0 || textInput === " " || textInput === null) {
				alert("Text required");
			}
			$.ajax({
				type: "POST",
				url: "/tweets",
				data: $("#submits").serialize(),
				success: loadTweets()
			});
		});
	});
});
