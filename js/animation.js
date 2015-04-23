$(document).ready(function() {
	$('#char-count').hide();
	$('.button').hide();
	$('.tweet-compose').on('focus', function(){
		$('#char-count').show();
		$('button').show();
		$('.tweet-compose').css('height', '5em');
		
	});

	$('.tweet-content').focusout(function(){
		$('#char-count').hide();
		$('button').hide();
		$('.tweet-compose').css('height', '2.5em');
		
	});
	$('.tweet-compose').on("keyup", function(){
			var tweet = $('.tweet-compose');
			if (tweet.val().length > 130){
				$('#char-count').css('color', 'red');
				};
				if (tweet.val().length >= 140){
					$('button').hide();

					} else {
						$('#char-count').css('color', '#ccc');
						$('button').show();
					};

		});

 	$('.button').on('click', function(){
 		// var newtweet = $('content');
 		$( ".tweet" ).prepend('<div>"test"</div>') );

 		// var newtweet = function(){
 		// 	$('.tweet').prepend($('tweet-compose').val());

 		});

 		
 // 	$('this.tweet').on('focus', function(){
// 		$(<li>).show();
// 		});
// $('this.tweet').focusout(function(){
// 		$(<li>).fadeout(500);
// 		});





});