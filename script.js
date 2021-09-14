var changename = "Kyle Ward";
var changenameElement = document.querySelector("#changename");  

var Todd = document.getElementById("Todd");
var Phil = document.getElementById("Phil");


function change(){
    console.log("it is running");
    changenameElement.innerText = changename;
}

function remove(){
    Todd.parentNode.removeChild(Todd)
}

function remove2(){
    Phil.parentNode.removeChild(Phil)
}