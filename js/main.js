// JavaScript

// Date & Time Function, shown on index.html
function Date_and_Time()
{
    var str = "";
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ap = "AM";
	
    if (hour > 11) 
    { 
		ap = "PM";             
    }
    if (hour > 12) 
    { 
		hour = hour - 12;      
    }
    if (hour == 0) 
    { 
		hour = 12;             
    }
    if (hour < 10) 
    { 
		hour = "0" + hour;   
    }
    if (minute < 10) 
    { 
		minute = "0" + minute; 
    }
    if (second < 10) 
    { 
		second = "0" + second; 
    }
	
    var time = hour + ':' + minute + ':' + second + " ";
    str += "The date & time is: <br>" + days[now.getDay()] + ", " + months[now.getMonth()] +  " " + now.getDate() + ", " + now.getFullYear() + " <span style='font-family: Arial'>" + time + "</span> " + ap + ".";
    document.getElementById("time").innerHTML = str;
}

// Random Quotes Function
var quotes = [`"Hello World!"`];
function Quotes()
{
	var str = "";
	pick = Math.floor(Math.random() * quotes.length);
	str = quotes[pick];
	document.getElementById("quote").innerHTML = str;
}

// Get Page Name Function
function GetPageName()
{
	return document.location.href.match(/[^\/]+$/)[0];
}

// jQuery

$(document).ready(function(){
	var mobile = false;
	if( $('.mobile').css('display')=='none') {
        mobile = true;       
    }
	if(mobile == true)
	{
		console.log("Mobile jQuery");
		if ($(window).width() < 760)
		{
			console.log("Less than 760 Width");
			$('.heading').css("height","30px");
		}
		if(GetPageName() == "index.html")
		{
			console.log("index.html Mobile jQuery");
			if ($(window).width() < 760)
			{
				console.log("Less than 760 Width on index.html");
				$("#face").html("Home");
			}
		}
		$("#face").hide().fadeIn(1000);
		$(".heading").hide().fadeIn(1000);
		//$(".navbar").hide().delay(2000).fadeIn(1000);
		$("#slogan").hide().delay(1000).fadeIn(1500);
		$("#chest").hide().delay(1000).fadeIn(1750);
		$("#stomach").hide().delay(1000).fadeIn(1750);
		$("article").hide().delay(1000).fadeIn(1750);
		$("#abs").hide().delay(1000).fadeIn(2000);
		$('img').delay(1000).fadeIn(2000);
	}
	else
	{
		console.log("Desktop jQuery");
		$("#face").hide().fadeIn(1000);
		$(".heading").hide().fadeIn(1000);
		//$(".navbar").hide().delay(2000).fadeIn(1000);
		$("#slogan").hide().delay(1000).fadeIn(1500);
		$("#chest").hide().delay(1000).fadeIn(1750);
		$("#stomach").hide().delay(1000).fadeIn(1750);
		$("article").hide().delay(1000).fadeIn(1750);
		$("#abs").hide().delay(1000).fadeIn(2000);
		$('img').delay(1000).fadeIn(2000);
	}
});
