const maxCharacter = 140;
$(document).ready(function() {
	$("textarea").keyup(function() {
		const character = maxCharacter - $(this).val().length;
		const count = $(this)
			.siblings(".counter")
			.text(character);
		if ($(this).val().length > maxCharacter) {
			count.css("color", "red");
		}
	});
});
