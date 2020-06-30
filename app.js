$('form').submit(function(e) {
	e.preventDefault();
	this.reset();
});

$('.submit-button').on('click', function() {
	let title = $('.movie-title').val();
	let rating = $('.rating').val();
	$('body').append('<ul class="the-list"></ul>');
	$('.the-list').eq(-1).append('<li class="new-item">' + title + '  Rating:  ' + rating + '  ' + '</li>');
	$('.new-item').eq(-1).append('<input type="button" value="remove" id="drop-it">');
	$('.rating').empty();
});

$('body').on('click', '.new-item', function() {
	console.log('you clicked remove!');
	$(this).remove();
});
