//array to hold the image paths 
var photos = ["img/cover.jpg","img/collage.jpg","img/collage2.jpg","img/collage3.jpg","img/collage4.jpg","img/collage5.jpg"];

//global variables to keep track of where we are in viewing the list of images
var curr, prev, next;

//function to preload images
function preload(arrayOfImages) {
    //loops through each spot in the array that is passed to the function, and creates a new image tag with the value from the array as the source
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;        
    });
}

//call preload function when window loads
/*$(window).load(function(){
     preload(photos);
 }); */

//ready function
$(function() { 
    //set current value to 0
    let curr = 0; 
    //loop through the photos array and add each image to a list
     $(photos).each(function(){
         //console.log(this);
         //append each image in a list item to the slides element
         $("#slides").append("<li id="+curr+"><img  src="+this+"></li>");
         //set the z-index of the photo
         $("#slides").find("li:eq("+curr+")").css(
             {"z-index":photos.length-curr}
         );
         //increment current value each loop
         curr++;
     });
    
    //reset current to 0
    curr = 0;
   
    //function to move slides back and forth
    function changeSlide(d){
        //slide to next image
        if (d==="n"){
            $("#slides").animate({
                top: "-=700"},500); 
            curr++;
        //slide to previous image
        } else if (d==="p") {
            $("#slides").animate({
                top: "+=700"},1000); 
            curr--;  
        //slide to beginning    
        } else {
            $("#slides").animate({top: "0"},500);
            curr=0;
        }
    }
    
    //automatically advance slides every 3 seconds
    var auto = window.setInterval(function(){ 
        if (curr===photos.length-1){
            //reset if at the end
            changeSlide("b");
        } else {
            changeSlide("n");
        }
    }, 3000);

    //go to the previous slide
    $("#prev").click(function(){ 
        //stop the autoplay
        clearInterval(auto);
        //check the current index to make sure it is not on the first slide
        if (curr>0){   
            //slide in previous image
            changeSlide("p");
        }
    });
    
    //go to the next slide
    $("#next").click(function(){
        //stop the autoplay
        clearInterval(auto);
        console.log("current:"+curr);

        if (curr<photos.length-1){
            //slide in next image
            changeSlide("n");
        } else {
            //reset to beginning
            changeSlide("b"); 
        } 
    });
});