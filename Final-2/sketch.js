
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10; //define all images
let text1
let images = []; //creating an array for all images
let data={};    // Global object to hold results from the loadJSON call
let celebs=[];  // Global array to hold all image objects
//let buttons=[];
//let button1, button2, button3;

function setup() {
    createCanvas(100,500);
  createCanvas(1280, 700);
    

    
  //Load Json data    
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
         let text=celeb['text'];
         celebs.push(new Celeb(x, y, image, name, gender, score, cls, width, height, text));
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
    
    fill(254, 221, 221);
    rect(25, 30, 400, 600);
    
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
  constructor(x,y,image,name,gender,score,cls,width,height,text) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.name = name;
      this.gender = gender;
    this.score = score;
    this.cls = cls;
      this.width = width;
    this.height = height;
      this.text = text;
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




//let infoButton=['buttons'];
    
//     console.log(infoButton)
 //    for (let i = 0; i < infoButton.length; i++){

let button1; 
    button1.mouseClicked;
    function mouseClicked(){
        let d = dist(mouseX, mouseY,890,358);
        if (d<30){
var div0 = createDiv("Yang Mi (Chinese: 杨幂, born 12 September 1986) is a Chinese actress and singer. She made her acting debut in historical television series Tang Ming Huang, and later received recognition for her leading roles in various television series Wang Zhaojun (2007), Chinese Paladin 3 (2009), Palace (2011), Beijing Love Story (2012), Swords of Legends (2014), The Interpreter (2016), Eternal Love (2017) and Legend of Fuyao (2018); as well as films Mysterious Island (2011), Tiny Times (2013–2015), and The Witness (2015). In 2017, she won the Best Actress award at the WorldFest Houston International Festival for her performance in Reset (2017).Yang was chosen by Southern Metropolis Daily as one of the New Four Dan Actresses. In 2017, Yang ranked third on the Forbes China Celebrity 100 list.")}
    

}

let button2; 
    button2.mouseClicked;
    function mouseClicked(){
        let d = dist(mouseX, mouseY,855,310);
        if (d<30){
var div0 = createDiv("Kwon Ji-yong (Hangul: 권지용; born August 18, 1988), also known by his stage name G-Dragon, is a South Korean singer-songwriter, rapper, record producer, entrepreneur and fashion icon known for penning chart-topping singles and his stage presence that has garnered him the title King of K-pop. From age twelve, G-Dragon trained for six years at South Korean entertainment label YG Entertainment before debuting in 2006 as a member of the hip hop boy band Big Bang, which went on to become one of the best-selling boy bands in the world.")}

    }

let button3; 
    button3.mouseClicked;
    function mouseClicked(){
        let d = dist(mouseX, mouseY,755,430);
        if (d<30){
var div0 = createDiv("Lu Han (Chinese: 鹿晗, born April 20, 1990) is a Chinese singer and actor. He was a member, known as Luhan, of the South Korean-Chinese boy group Exo and its sub-group Exo-M, before leaving the group in October 2014.That year, he was ranked the 6th most popular entertainment star in China by China National Radio.In 2017, Lu Han was listed as the second highest-paid celebrity in the Forbes China Celebrity 100 list, behind only Fan Bingbing.Lu Han released his solo debut album, Reloaded in 2015; and has starred in several box office hits such as 20 Once Again (2015), The Witness (2015) and Time Raiders (2016). In 2017, he starred in his first television series, Fighter of the Destiny.")}

    }

//function preload(){
 //   buttons = [button1, button2, button3]}
