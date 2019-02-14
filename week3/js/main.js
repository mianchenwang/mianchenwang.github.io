//Global Variables
var n1;
var n2;

//set const
const add_btn = document.getElementById("add");
const multi_btn = document.getElementById("multi");
const sub_btn = document.getElementById("sub");
const divide_btn = document.getElementById("divide");

//mouseover events
add_btn.addEventListener("mouseover",anyOver);
sub_btn.addEventListener("mouseover",anyOver);
multi_btn.addEventListener("mouseover",anyOver);
divide_btn.addEventListener("mouseover",anyOver);


//mouseclick events
add_btn.addEventListener("click",addClick);
multi_btn.addEventListener("click",multiClick);
sub_btn.addEventListener("click",subClick);
divide_btn.addEventListener("click",divideClick);

//functions for mouseover event 
//function addOver(){output1.innerHTML="Enter 2 numbers to add."};
//function subOver(){output3.innerHTML="Enter 2 numbers to subtract."};
//function multiOver(){output2.innerHTML="Enter 2 numbers to multiply."};
//function divideOver(){output4.innerHTML="Enter 2 numbers to divide."};

//functions for click event
function addClick(){n1=document.getElementById("no1").value;
n2 =document.getElementById("no2").value;
    var sum = Number(n1) + Number(n2);
                    output1.innerHTML=(sum);};
function multiClick(){n1=document.getElementById("no3").value;
n2 =document.getElementById("no4").value;
    var sum = Number(n1) * Number(n2);
                    output2.innerHTML=(sum);};
function subClick(){n1=document.getElementById("no5").value;
n2 =document.getElementById("no6").value;
    var sum = Number(n1) - Number(n2);
                    output3.innerHTML=(sum);};
function divideClick(){n1=document.getElementById("no7").value;
n2 =document.getElementById("no8").value;
    var sum = Number(n1) / Number(n2);
                    output4.innerHTML=(sum);};

//conditional statements
function anyOver(e){
   //output.innerHTML = e.target.id; 
    //identify which button send the event
    let btn = e.target.id;
    console.log(btn);
    
    if (btn == "add"){
        output1.innerHTML = "Enter 2 numbers to Add.";
    } else if (btn == "multi") {
        output1.innerHTML = "Adding button is here!";}
    else {
    output1.innerHTML = "Adding button is still here!";}
};

//keyboard events
document.addEventListener('keyup',function(e){
    console.log(event.keyCode);
    if (event.keyCode=="13"){
        addClick();}
})
