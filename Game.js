class Game {
  constructor(){

  }

  start(){
    if(gameState === 0){
     
      
      form = new Form()
      form.display();
    }

    archer = createSprite(200,650,50,50);
    archer.addImage("Archer",archerImg)
    archer.scale = 0.25;

    redKnight = createSprite(900,600,50,50);
    redKnight.addImage("redKNight",redKnightImg)
    redKnight.scale = 0.5;

    ground = createSprite(600,750,1200,10);
    ground.visible = false;
    
  
  }

  level1(){
    form.hide();
    if(keyDown("k")){
        var arrow = createSprite(200,600,50,25);
        arrow.velocityX = 5;
        arrow.lifetime = 400;
        arrow.addImage(arrowImg);
        arrow.y = archer.y ;
        arrow.scale = 0.2;
      
    }
    text(550,400,"Press k to shoot and space to jump.);
    
    if(keyDown("space")){
      archer.velocityY = -7;
     
    }
    archer.velocityY = archer.velocityY + 0.8;
    archer.collide(ground);
   
      var archerHealth = 100;
      var redKnightHealth = 100;
      function spawnOstacles(){
        if(arrow.isTouching(redKnight)) {
          var obstacle = createSprite(900,550,50,25);
          obstacle.velocityX = - (10);
          obstacle.setAnimation(ninjaStarImg);          
          obstacle.scale = 0.25;
          obstacle.lifetime = 400;
          redKnightHealth = redKnightHealth - 20;
        }
      if(obstacle.isTouching(archer)){
        archerHealth = archerHealth - 25;
      }
      if(archerHealth = 0){
        archer.destroy;
        redKnightHealth.destroy;
        text(600,300,"Sorry.You Lose.")
        this.restart.display();
      }
      if(redKnightHealth = 0){
        archer.destroy;
        redKnightHealth.destroy;
        text(600,300,"Well Done.Press this button to continue.")
        this.startLevel2.display();
      }

    drawSprites();
    }
  }
}
