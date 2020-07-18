var  database, form;
var playerCount = 0, gameState = 0, player, game;
var car1, car2, car3, car4, cars;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-120);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  

  if(playerCount ===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
   
}

