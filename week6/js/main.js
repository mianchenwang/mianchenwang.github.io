var c_name = ["A","B","C","D","E"];
var o_food = ["1","2","3","4","5"];
var fnum = 0;

var n1;
var n2;
var n3;
var n4;
var inum = 0;
var i;
var text = "";



const foodnames = document.getElementById("food");
const pricenumber = document.getElementById("price");
const names = document.getElementById("name");
const pcont = document.getElementById("pcontainer");
const sub_btn = document.getElementById("subtotal");
const add_btn = document.getElementById("addP");


addfood.addEventListener("click",addFood);
sub_btn.addEventListener("click",subTotal);    
add_btn. addEventListener("click",addPerson);

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
            
        //create a new option element
        let opt = document.createElement("option");
        //add value to the option element
        opt.value = o_food[i];
        //add value to the option element, using a regular expression to remove the .png extension  
        opt.text = o_food[i];
        
        //add the option to the select element
        foodnames.add(opt);
    }

});
                                              
                                                            
//function to add another food
function addFood(){
    //create form with a unique id + elements
   let iform = document.createElement('div');
    iform.setAttribute("id","i"+inum);
    
    pcont.appendChild(iform);
    
    iform.innerHTML = "<lable>Food Price<input type='text'></lable>";

}

//clear form

function addPerson(){
    iform.style.display = "none";
    tax.style.display = "none";
    tip.style.display = "";
}



/*//add item
function addFood(sender){
    //create input item with unique id
    let iform = document.createElement('div');
    iform.setAttribute("id","i"+fnum);
    
    sender.appendChild(iform);
    
    iform.innerHTML = "<label>Food Price</label><input type='text'>";
}*/

//claculate subtotal
function subTotal()
{n1=document.getElementById("iform").value;
n2 =document.getElementById("tax").value;
 n3=document.getElementById("tip").value;
/* n4=document.getElementById("id").value;*/

    var sum = Number(n1) + Number(n1/n2) + Number(n1/n3);
                    output.innerHTML=(sum);};


