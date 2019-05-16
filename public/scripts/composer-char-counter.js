const maxCharacter = 140;
$(document).ready(function() {
	$("#text-insert").keyup(function() {
		const character = maxCharacter - $(this).val().length;
		const count = $(this)
			.siblings(".counter")
			.text(character);
		if ($(this).val().length > maxCharacter) {
			count.css("color", "red");
		} else {
			count.css("color", "black");
		}
	});
});
