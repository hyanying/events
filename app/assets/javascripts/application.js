// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//collects dates for countdown timer
function collectDates()
{
	var dates=[];
	var datesLength = document.getElementsByClassName("indexEventDateHidden").length;
	
	for(var i=0;i<datesLength;i++)
		dates.push(document.getElementsByClassName("indexEventDateHidden")[i].innerHTML); 		

	countDownTimer(dates);	
}	

//date countdown timer
function countDownTimer(dates)
{		
	for(var i=0;i<dates.length;i++)
	{
		//console.log(dates[i]);	

		var dt = dates[i];

		var end = new Date(dt);
		end = end.setHours(0, 0, 0, 0, 0);

		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;

		var now = new Date();
		var distance = end - now;

		var nowTemp=now.setHours(0, 0, 0, 0, 0);


		if(nowTemp == end)
		{
			document.getElementsByClassName("indexEventTimeLeft")[i].innerHTML = "TODAY";

		}		

		else if (distance < 0) 
		{
			document.getElementsByClassName("indexEventTimeLeft")[i].innerHTML = "EXPIRED";
		}

		else	
		{	
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);

			var wordDay = "";
			var wordHour = "";

			if(days > 1 )
				wordDay = " Days";
			else
				wordDay = " Day";

			if(hours > 1 )
				wordHour = " Hours Left";
			else
				wordHour = " Hour Left";

			if(days <= 0 )
				var timeLeft = hours + wordHour;
			else
				var timeLeft = days + wordDay + " " + hours + wordHour;

			console.log("days " + days + " hours " + hours);

			document.getElementsByClassName("indexEventTimeLeft")[i].innerHTML = timeLeft;
		}

	}	
	
}