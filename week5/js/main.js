var c_name = ["A","B","C","D","E"];
var o_food = ["1","2","3","4","5"];
var fnum = 0;
var text = "";
var n1;
var n2;
var n3;
var n4;



const foodnames = document.getElementById("food");
const pricenumber = document.getElementById("price");
const names = document.getElementById("name");
const pcont = document.getElementById("pcontainer");
const sub_btn = document.getElementById("subtotal");
const en_btn = document.getElementById("enter");
/*
const foodEnter = 
document.getElementById("")*/



addfood.addEventListener("click",addFood);
sub_btn.addEventListener("click",subTotal);    

//en_btn.addEventListener("click",foodEnter);

//use the content loaded event to trigger for loops to populate the select elements from the arrays


document.addEventListener('DOMContentLoaded', function(e)  {
    //set the options for the text color select
    //note: the for loop will run the number of times indicated by the length of the array
    for (let i=0;i<c_name.length;i++){ 
        //create a new option element
        let opt = document.createElement("option");
        
        //add value and text to the option element
        opt.value = c_name[i];
        opt.text = c_name[i];
        
        //add the option to the select element
        names.add(opt);
    }
    
    //set the options for the heart color
        for (let i=0;i<o_food.length;i++){ 
            text += i * "<input>";
        //create a new option element
        let opt = document.createElement("option");
        //add value to the option element
        opt.value = o_food[i];
        //add value to the option element, using a regular expression to remove the .png extension  
        opt.text = o_food[i];
        
        //add the option to the select element
        foodnames.add(opt);
    }
    function foodEnter(){
    foodlist.innerHTML = (text);}
});
                                              
                                                            
//function to add another food
function addFood(){
    //create form with a unique id + elements
   let fform = document.createElement('div');
    fform.setAttribute("id","f"+fnum);
    fnum=fnum+1;
    pcont.appendChild(fform);
    
    fform.innerHTML = "<lable>Food Price<input id='price2'></lable>";

}

//claculate subtotal
function subTotal()
{n1=document.getElementById("price").value;
n2 =document.getElementById("tax").value;
 n3=document.getElementById("tip").value;
 n4=document.getElementById("price2").value;
 var n5= Number (n1) + Number(n4);
    var sum = Number(n5) + Number(n5*n2/100) + Number(n5*n3/100);
                    output.innerHTML=(sum);};


