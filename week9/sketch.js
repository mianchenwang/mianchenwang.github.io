/* a sketch to demonstrate using P5 with an API 
with help from p5 loadJSON reference at https://p5js.org/reference/#/p5/loadJSON */

/* 
Data Source: National Weather Service API: 
https://www.weather.gov/documentation/services-web-api

Endpoint: https://api.weather.gov/alerts?area=NY
*/

var data; //variable to hold the data retrieved from the API

//first we preload the data - preload is a built in P5 function that fires before setup or draw
function preload(){
  //construct the url to get the data from the API
  //TIP: check the url by putting it into a browser first, this will also help you see the structure of the data
  //This url is retrieving the number of active weather alerts
  
  let url = "https://www.googleapis.com/blogger/v3/blogs/blogId/posts";
  
  //load the data as JSON into the data var
  data = loadJSON(url); 
}

function setup() {
  noLoop();//stop loop in the draw function
  createCanvas(650,650);
}

function draw() {
  //check data
  console.log(data.total);
  console.log(data.marine);
  console.log(data.land);

  //put data values in variables to make them easier to work with
  let total = data.total;
  let marine = data.marine;
  let land = data.land;
  //vars to set center of circles
  let cx = width/2;
  let cy = height/2;
  
  //draw circles to represent alerts
  noStroke();
  fill("red");
  ellipse(cx,cy,total*1.5);
  fill("lightgreen");
  ellipse(cx,cy,land*1.5);
  fill("blue");
  ellipse(cx,cy,marine*1.5);
  
  //add text labels
  textSize(16); //set text size
  textAlign(CENTER,CENTER); //set text to align center horizontally and vertically
  fill("black");
  text("Current U.S. Weather Alerts",cx,20);
  text("Total: "+total,cx,45);
  text("Land: "+land,cx,cy-marine*2);
  text("Sea: "+marine,cx,cy);
  
}