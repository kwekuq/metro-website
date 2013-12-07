function moreInfo() {
    window.open("more.htm");
}

function ouch() {
    alert("Ouch");

}

function register-old() {
    {
        var x;

        var person = prompt("Please enter your name", "Kweku");

        if (person != null) {
            x = "Welcome " + person;
            document.getElementById("welcome7").innerHTML = x;
        }
    }
}


var s = 10;
function increaseSize() {
    s = s + 10;
    document.getElementById("content7").style.fontSize = "Large";
}

function menu(id)
{
    var x;
    if (document.getElementById(id).style.display = 'block') {
        x = document.getElementById(id).style.display;
        alert(x);
        document.getElementById(id).style.display = 'none';
    }
    else if(document.getElementById(id).style.display = 'none'){
        document.getElementById(id).style.display = 'block';
    }
}



function showStuff(id) {
    document.getElementById(id).style.display = 'block';
}
function hideStuff(id) {
    document.getElementById(id).style.display = 'none';
}








function resizePanel() {

    width = $(window).width();
    height = $(window).height();

    mask_width = width * $('.item').length;

    $('#debug').html(width + ' ' + height + ' ' + mask_width);

    $('#wrapper, .item').css({ width: width, height: height });
    $('#mask').css({ width: mask_width, height: height });
    $('#wrapper').scrollTo($('a.selected').attr('href'), 0);

}





function prac4() {
    window.open("pracs/prac4.htm");
}
function prac5() {
    window.open("pracs/prac5.htm");
}
function prac7() {
    window.open("pracs/prac7.htm");
}
function prac8() {
    window.open("pracs/prac8.htm");
}
function prac9() {
    window.open("pracs/prac9.htm");
}

function ouch() {
    alert("Ouch");

}




if (document.getElementById) window.onload = setup;
function register() {
    var x;
    answer = prompt("Please enter your name", "kweku");
    x = document.getElementById("lv");
    x.innerHTML = ("Welcome " + answer + ".");

}
function textAdjust() 
{
    document.body.style.fontSize = 120 + "%";
}
function changeStyle() 
{
    document.getElementById("content7").style.background = "Pink";
  
}
function setFocus() 
{
    document.getElementById("fname").focus();
}

function time()
{
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var month = currentTime.getMonth();
	var year = currentTime.getFullYear();
	var day = currentTime.getDate();

	var months = new Array(12);
	months[1] = "January";
	months[2] = "February";
	months[3] = "March";
	months[4] = "May";
	months[5] = "April";
	months[6] = "June";
	months[7] = "July";
	months[8] = "August";
	months[9] = "Spetember";
	months[10] = "October";
	months[11] = "November";
	months[12] = "December";
	
	if(minutes<10)
	{
		t = document.getElementById("times");
    t.innerHTML = (hours + ":0" + minutes);
	}	
	else if(hours<10)
	{
	t = document.getElementById("times");
    t.innerHTML = ("0" + hours + ":" + minutes);
	}
	else if(hours<10 && minutes>9)
	{
	t = document.getElementById("times");
    t.innerHTML = ("0" + hours + ":" + minutes);
	}
	else if(hours<10 && minutes<10)
	{
	t = document.getElementById("times");
    t.innerHTML = ("0" + hours + ":0" + minutes);
	}
	else if(hours>9 && minutes>9)
	{
		t = document.getElementById("times");
		t.innerHTML = (hours + ":" + minutes);	
	}

	
	
	
	
	
	
	
	y = document.getElementById("year");
	y.innerHTML = (year)
	
	y = document.getElementById("month");
    y.innerHTML = (months[month] + " " + day);
}


function closeWin() {
    myWindow.close();
}