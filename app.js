var optionNo = 0;
var startScreenTrue = 1;

var main = function(){
	//start-screen controls
	if (startScreenTrue === 1){
		var direction = "up";
		$(document).keydown(function(e){
			//press enter - Go to main page
			if (e.which === 13){
				startScreenTrue = 0;
				$('.start-screen').fadeOut(400);
				$('.main').fadeIn(1500);
				$('.title').animate({left: '0%'}, 1500);
				$('.menu').animate({right: '0%'}, 1500);
				$('.title-ship').show().animate({left: '90%'},6000);
			}
			//ship controls
			//ship-right
			if (e.which === 39){
				direction = "right";
				$('.ship img').hide();
				$('.ship-right img').show();
				//$('.ship img').attr("src", "images/ship-right.gif");
				$('.ship img').animate({left: '150%'}, 2000);
			}
			//ship-left
			else if (e.which === 37){
				direction = "left";
				$('.ship img').hide();
				$('.ship-left img').show();
				//$('.ship img').attr("src", "images/ship-left.gif");
				$('.ship img').animate({left: '-150%'}, 2700);
			}
			//ship-down
			else if (e.which === 40){
				direction = "down";
				$('.ship img').hide();
				$('.ship-down img').show();
				//$('.ship img').attr("src", "images/ship-down.gif");
				$('.ship img').animate({top: '150%'}, 2000);
			}
			//ship-up
			else if (e.which === 38){
				direction = "up";
				$('.ship img').hide();
				$('.ship-up img').show();
				//$('.ship img').attr("src", "images/ship-up.gif");
				$('.ship img').animate({top: '-150%'}, 2000);
			}
			//ship-fire
			if (e.which === 32){
				if (direction === "up"){
					$('.bullet img').queue("fx", []);
					$('.bullet img').stop();
					$('.bullet img').show();
					var pos = $('.ship-up img').position();
					$('.bullet img').offset({top: pos.top-20, left: pos.left+45});
					$('.bullet img').animate({top: '-100%'}, 300);
				}
				if (direction === "down"){
					$('.bullet img').queue("fx", []);
					$('.bullet img').stop();
					$('.bullet img').show();
					var pos = $('.ship-down img').position();
					$('.bullet img').offset({top: pos.top+100, left: pos.left+45});
					$('.bullet img').animate({top: '100%'}, 300);
				}
				if (direction === "right"){
					$('.bullet img').queue("fx", []);
					$('.bullet img').stop();
					$('.bullet img').show();
					var pos = $('.ship-right img').position();
					$('.bullet img').offset({top: pos.top+45, left: pos.left+100});
					$('.bullet img').animate({left: '100%'}, 300);
				}
				if (direction === "left"){
					$('.bullet img').queue("fx", []);
					$('.bullet img').stop();
					$('.bullet img').show();
					var pos = $('.ship-left img').position();
					$('.bullet img').offset({top: pos.top+45, left: pos.left-20});
					$('.bullet img').animate({left: '-100%'}, 600);
				}
			}
		});
		$(document).keyup(function(e){
			$('.ship img').queue("fx", []);
			$('.ship img').stop();
		});
	}

	//main page controls
	$(document).keydown(function(e){
		//press down
		if (e.which === 40 && startScreenTrue === 0){
			$('.instructions').hide();
			optionNo++;
			if (optionNo === 6){
				optionNo = 1;
			}
			if (optionNo === 1){
				$('.contactPic').hide().animate({left: '-50%'}, 200);
				$('.contactInfo').hide();
				$('.profilePic').show().animate({left: '0%'}, 200);
				$('.personalInfo').fadeIn(200);
			}
			else if (optionNo === 2){
				$('.profilePic').hide().animate({left: '-50%'}, 200);
				$('.personalInfo').hide();
				$('.games').show().animate({left: '0%'}, 200);
			}
			else if (optionNo === 3){
				$('.games').hide().animate({left: '-50%'}, 200);
				$('.artworksPic').show().animate({left: '0%'}, 200);
			}
			else if (optionNo === 4){
				$('.artworksPic').hide().animate({left: '-50%'},200);
				$('.programmingPic').show().animate({left: '0%'}, 200);
				$('.programmingInfo').fadeIn(400);
			}
			else if (optionNo === 5){
				$('.programmingInfo').hide();
				$('.programmingPic').hide().animate({left: '-50%'},200);
				$('.contactPic').show().animate({left: '0%'}, 200);
				$('.contactInfo').fadeIn(400);
			}
			var current = $('.current-select');
			var next = current.next();
			if (next.length === 0){
				next = $('.option').first();
			}
			current.animate({fontSize: "100%"}, 200).removeClass('current-select');
			next.animate({fontSize: "150%"}, 200).addClass('current-select');
		}
		//press up
		else if (e.which === 38 && startScreenTrue === 0){
			$('.instructions').hide();
			optionNo--;
			if (optionNo === -1 || optionNo === 0) {
				optionNo = 5;
			}
			if (optionNo === 1){
				$('.profilePic').show().animate({left: '0%'}, 200);
				$('.personalInfo').fadeIn(400);
				$('.games').hide().animate({left: '-50%'}, 200);
			}
			else if (optionNo === 2){
				$('.artworksPic').hide().animate({left: '-50%'}, 200);
				$('.games').show().animate({left: '0%'}, 200);
			}
			else if (optionNo === 3){
				$('.programmingInfo').hide();
				$('.programmingPic').hide().animate({left: '-50%'}, 200);
				$('.artworksPic').show().animate({left: '0%'}, 200);
			}
			else if (optionNo === 4){
				$('.contactPic').hide().animate({left: '-50%'}, 200);
				$('.contactInfo').hide();
				$('.programmingPic').show().animate({left: '0%'}, 200);
				$('.programmingInfo').fadeIn(400);
			}
			else if (optionNo === 5){
				$('.profilePic').hide().animate({left: '-50%'}, 200);
				$('.personalInfo').hide();
				$('.contactPic').show().animate({left: '0%'}, 200);
				$('.contactInfo').fadeIn(400);
			}
			var current = $('.current-select');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('.option').last();
			}
			current.animate({fontSize: "100%"}, 200).removeClass('current-select');
			prev.animate({fontSize: "150%"}, 200).addClass('current-select');
		}
		//press right for artworks
		else if (e.which === 39 && startScreenTrue === 0 && optionNo == 3){
			var current = $('.current-art');
			var next = current.next();
			if (next.length === 0){
				next = $('.art').first();
			}
			current.hide().removeClass('current-art');
			next.fadeIn(600).addClass('current-art');
		}
		//press left for artworks
		else if (e.which === 37 && startScreenTrue === 0 && optionNo == 3){
			var current = $('.current-art');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('.art').last();
			}
			current.hide().removeClass('current-art');
			prev.fadeIn(600).addClass('current-art');
		}
		//press right for games
		else if (e.which === 39 && startScreenTrue === 0 && optionNo == 2){
			var current = $('.current-game');
			var next = current.next();
			if (next.length === 0){
				next = $('.games-slide').first();
			}
			current.hide().removeClass('current-game');
			next.fadeIn(600).addClass('current-game');
		}
		//press left for games
		else if (e.which === 37 && startScreenTrue === 0 && optionNo == 2){
			var current = $('.current-game');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('.games-slide').last();
			}
			current.hide().removeClass('current-game');
			prev.fadeIn(600).addClass('current-game');
		}
	});

	$('.artworksPic').touchwipe({
	    wipeLeft: function() {
			var current = $('.current-art');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('.art').last();
			}
			current.hide().removeClass('current-art');
			prev.fadeIn(600).addClass('current-art');
	    },
	    wipeRight: function() {
			var current = $('.current-art');
			var next = current.next();
			if (next.length === 0){
				next = $('.art').first();
			}
			current.hide().removeClass('current-art');
			next.fadeIn(600).addClass('current-art');
	    },
	    min_move_x: 20,
	    min_move_y: 20,
	    preventDefaultEvents: true
	});

	$('.games').touchwipe({
	    wipeLeft: function() {
			var current = $('.current-game');
			var prev = current.prev();
			if (prev.length === 0){
				prev = $('.games-slide').last();
			}
			current.hide().removeClass('current-game');
			prev.fadeIn(600).addClass('current-game');
	    },
	    wipeRight: function() {
			var current = $('.current-game');
			var next = current.next();
			if (next.length === 0){
				next = $('.games-slide').first();
			}
			current.hide().removeClass('current-game');
			next.fadeIn(600).addClass('current-game');
	    },
	    min_move_x: 20,
	    min_move_y: 20,
	    preventDefaultEvents: true
	});

	$('.enter-instructions').on('touchstart click', function(){
		startScreenTrue = 0;
		$('.start-screen').fadeOut(700);
		$('.main').fadeIn(1500);
		$('.title').animate({left: '0%'}, 1500);
		$('.menu').animate({right: '0%'}, 1500);
		$('.title-ship').show().animate({left: '90%'},6000);
	});

	$('.option').on('touchstart click', function(){
		$('.instructions').hide();
		$('.profilePic').hide().animate({left: '-200%'},0);
		$('.personalInfo').hide();
		$('.games').hide().animate({left: '-200%'},0);
		$('.artworksPic').hide().animate({left: '-200%'},0);
		$('.programmingPic').hide().animate({left: '-200%'},0);
		$('.programmingInfo').hide();
		$('.contactPic').hide().animate({left: '-200%'},0);
		$('.contactInfo').hide();
		$('.option').removeClass('current-select');
		$(this).addClass('current-select');
		$('.option').animate({fontSize: "100%"}, 200).removeClass('current-select');
		$(this).animate({fontSize: "150%"}, 200).addClass('current-select');
		var text = $(this).text().trim();
		if (text === "#about_Me"){
			optionNo = 1;
			$('.profilePic').show().animate({left: '0%'},500);
			$('.personalInfo').fadeIn(400);
		} else if (text === ".projs{"){
			optionNo = 2;
			$('.games').show().animate({left: '0%'}, 500);
		}else if (text === "@rtworks"){
			optionNo = 3;
			$('.artworksPic').show().animate({left: '0%'}, 500);
		}else if (text === ":Skills/"){
			optionNo = 4;
			$('.programmingInfo').fadeIn(400);
			$('.programmingPic').show().animate({left: '0%'}, 500);
		}else if (text === "{_onTact;"){
			optionNo = 5;
			$('.contactPic').show().animate({left: '0%'},500);
			$('.contactInfo').fadeIn(400);
		}
	});
}

$(document).ready(main);