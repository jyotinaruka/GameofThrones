$(document).ready(function() {
	$('#houses img').click(function() {
		var house = $(this).attr('id');
		$.get(
			'https://www.anapioficeandfire.com/api/houses/' + house,
			function(information) {
				var html_string = `Name: ${information.name}<br>
                    Region: ${information.region}<br>
                    Words: ${information.words}<br>
                    Titles: `;
				for (var i = 0; i < information.titles.length - 1; i++) {
					html_string += information.titles[i] + ', ';
				}
				html_string += `and ${information.titles[information.titles.length - 1]}<br>
                    `;
				$('#details p').html(html_string);
			},
			'json'
		);
	});
});
