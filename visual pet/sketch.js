//Create variables here
var dog,happyDog,database,foods,foodStock
var dogImg1,dogImg2

function preload()
{
  //load images here
 
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  fireStock = database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(20);
  dog = createSprite(300,300,30,30);
  dog.addImage(dogImg1);
  dog.scale = 0.2;
  
 
 
}


function draw()
 {  
  background(46,139,87);
  drawSprites();
  //add styles here

}



