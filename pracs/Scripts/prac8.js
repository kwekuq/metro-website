//jscrpt file

function moreInfo() 
{
    window.open("more.htm");
}
function ouch() 
{
    alert("ouch");
}
function toggle() {
    this.className = this.className == "closed" ? "open" : "closed";
}

function setup() 
{
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; ++i)
     {
        var li = lis[i];
        if (li.className)
         {
            li.onclick = toggle;  //stores the function as value
            li.className = "closed";
        }
    }
}

if (document.getElementById) window.onload = setup;
function showPrompt() {
    var x;
    answer = prompt("Please enter your name", "kweku");
    alert("Oler!");
    x = document.getElementById("lv");
    x.innerHTML = ("Welcome " + answer + ".");

}
function textAdjust() 
{
    document.body.style.fontSize = 120 + "%";
}
function changeStyle() 
{
    document.getElementById("tunechi").style.background = "Yellow";
  
}
function setFocus() 
{
    document.getElementById("fname").focus();
}
