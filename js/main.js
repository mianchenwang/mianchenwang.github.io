//Global Variables
var n1;
var n2;

//Adding function 
function addMe(){
n1=document.getElementById("no1").value;
n2 =document.getElementById("no2").value;
    var sum = Number(n1) + Number(n2);
    console.log(sum);
}


//Multiplying function
function multiMe(){
n1=document.getElementById("no3").value;
n2 =document.getElementById("no4").value;
    var sum = Number(n1) * Number(n2);
    console.log(sum);
}

//Subtruction function
function subtructMe(){
n1=document.getElementById("no5").value;
n2 =document.getElementById("no6").value;
    var sum = Number(n1) - Number(n2);
    console.log(sum);
}


//Division function
function divideMe(){
n1=document.getElementById("no7").value;
n2 =document.getElementById("no8").value;
    var sum = Number(n1) / Number(n2);
    console.log(sum);
}