  class Game{
    constructor(){

    }
    getState(){
        var gamestateref = database.ref ('gameState');
        gamestateref.on("value", (data)=>{
          gameState = data.val(); 
        }); 
    }
    update(state){
        database.ref('/').update({
          gameState: state  
        });

    }
    async start(){
      if(gameState == 0){
        player = new Player();
        var playercountref = await database.ref('playercount').once("value");
        if(playercountref.exists()){
          playerCount = playercountref.val();
          player.getCount();
        }
        form = new Form();
        form.display();
        console.log("start");
      }
      car1 = createSprite (100, 200);
      car2 = createSprite (300, 200);
      car3 = createSprite (500, 200);
      car4 = createSprite (700, 200);
      cars = [car1,car2,car3,car4];
      console.log("car");
    }
    play(){
      form.hide();
      Player.getplayerinfo();
      if(allPlayers!== undefined){
        var index = 0;
        var x = 175;
        var y;
        for(var plr in allPlayers){
          index = index + 1;
          x = x + 200;
          y = displayHeight-allPlayers[plr].distance;
          cars[index - 1].x = x;
          cars[index-1].y = y;
          if(index === player.index){
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index - 1].y;
          }
        }
      }
      if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance +=10;
        player.update();
      }
      if(player.distance> 4000){
        gameState = 2;

      }
      drawSprites();
    }
    end(){
      console.log("game has ended");
    }
    
  }