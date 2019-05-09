
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10; //define all images
let images = []; //creating an array for all images
let data={};    // Global object to hold results from the loadJSON call
let celebs=[];  // Global array to hold all image objects
let userInput;



function setup() {
  createCanvas(1280, 700);
    

     
     let celebData=data['celebs'];
    
     console.log(celebData)
     for (let i = 0; i < celebData.length; i++){
         let celeb = celebData[i];
         let x=celeb['x'];
         let y=celeb['y'];
         let image=images[i]; 
         let name=celeb['name'];
         let gender=celeb['gender'];
         let score=celeb['score'];
         let cls=celeb['cls'];
         let width=celeb['width'];
         let height=celeb['height'];
         celebs.push(new Celeb(x, y, image, name, gender, score, cls, width, height));
     }  
    
  //  let userInput=select('name');
 
    
   // function goWiki(){}
 //   let term=userInput.value();
 //   console.log(term);
    
    
}



function draw() {
    //creating circle shapes
background(220,20,60);
    stroke(255,228,225);
  fill(254, 206, 222);
  ellipse (900,350,900,900);
  fill(253, 185, 207);
  ellipse (900,350,830,830);
  fill(254, 172, 199);
  ellipse (900,350,760,760);
  fill(253, 158, 190);
  ellipse (900,350,690,690);
  fill(254, 146, 182);
  ellipse (900,350,620,620);
  fill(254, 128, 170);
  ellipse (900,350,550,550);
  fill(254, 111, 159);
  ellipse (900,350,480,480);
  fill(254, 97, 149);
  ellipse (900,350,410,410);
  fill(254, 85, 142);
  ellipse (900,350,340,340);
  fill(254, 73, 133);
  ellipse (900,350,270,270);
  fill(254, 59, 124);
  ellipse (900,350,200,200);
  fill(254, 37, 110);
  ellipse (900,350,130,130);
  fill(254, 30, 105);
  ellipse (900,350,60,60);
    
 //numbers on circle shapes   
fill(255,250,250);    
    textSize(13);
    textFont('Roboto');
text('130', 888, 355);
text('125', 835, 355);
text('120', 800, 355);
text('115', 765, 355);
text('110', 730, 355);
text('105', 695, 355);
text('100', 660, 355);
text('95', 625, 355);
text('90', 590, 355);
text('85', 555, 355);
text('80', 520, 355);
text('75', 485, 355);
text('70', 450, 355);
    
text('125', 942, 355);
text('120', 975, 355);
text('115', 1010, 355);
text('110', 1045, 355);
text('105', 1080, 355);
text('100', 1115, 355);
text('95', 1157, 355);
text('90', 1192, 355);
text('85', 1227, 355);
text('80', 1262, 355);
text('75', 1297, 355);
text('70', 1332, 355);

 // Display all images
  for (let i = 0; i < celebs.length; i++) {
      console.log(celebs[i]);
    celebs[i].display();

  } 

    noLoop();
}

//celebrity class
class Celeb {
  constructor(x,y,image,name,gender,score,cls,width,height) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.name = name;
      this.gender = gender;
    this.score = score;
    this.cls = cls;
      this.width = width;
    this.height = height;
  }


  display() {
    //let img=loadImage("img/1.jpg");
    image(this.image,this.x, this.y, this.width, this.height);
    //ellipse(this.x,this.y,50);
 
  }
}



//load data
function preload(){
    data=loadJSON('data.json');
    img1=loadImage("img/Yang_Mi.jpg");
    img2=loadImage("img/G_Dragon.jpg");
    img3=loadImage("img/Lu_Han.jpg"); 
    img4=loadImage("img/Fan_Bingbing.jpg"); 
    img5=loadImage("img/Yu_Wen_Le.jpg");
    img6=loadImage("img/Gu_Li_Na_Zha.jpg");
    img7=loadImage("img/Di_Li_Re_Ba.jpg"); 
    img8=loadImage("img/Zhou_Dong_Yu.jpg"); 
    img9=loadImage("img/Liu_Tao.jpg");
    img10=loadImage("img/Wu_Yi_Fan.jpg");
    images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]   
}