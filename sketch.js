const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player, playerImage
var opponentImage
var opponent, opponentBody
var opponent2, opponentBody2
var opponent3, opponentBody3
var hoopPiece1, hoopPiece2, net, netImage, backboard, pole
var ground
var basketball
var bind;
var attempts=5
var attemptBox
/*
var player2
var opponent2, opponentBody2
var hoop2Piece1, hoop2Piece2, net2, backboard2, pole2
var ground2
var basketball2
var bind2;
var attempts2=5
var attemptBox2
*/
var gameState = "onSling";
var level = "homeScreen";
var playpause = "play";

function preload() {
  playerImage = loadImage("Player.png");
  netImage = loadImage("Hoop+Net.png");
  opponentImage = loadImage("Opponent.png");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
/*
  if (level === "homeScreen") {
    background(150);
  
    textSize(100);
    stroke("blue");
    strokeWeight(4);
    fill("orange");
    text("Press Space to Start Game", 500, 300);
  }

  if (level === "1") {
    //level 1
    ground = new Ground(650, height, 1300, 20);
    basketball = new Basketball(226, 502);
    bind = new Bind(basketball.body, {x: 226, y: 487});
    
    net = createSprite(960, 260, 50, 50);
    net.addImage(netImage);
    net.scale = 1.5
    
    player = createSprite(200, 515, 50, 50);
    player.addImage(playerImage);
    player.scale = 0.5
    
    opponent = createSprite(600, 382, 50, 180);
    opponent.addImage(opponentImage);
    opponent.scale = 1
    
    opponentBody = Bodies.rectangle(600, 382, 50, 180, {density: 1.5, friction: 2});
    World.add(world, opponentBody);
    
    hoopPiece1 = new Hoop(985, 315, 10, 100, PI, "red");
    hoopPiece2 = new Hoop(1096, 310, 10, 100, PI, "red");
    backboard = new Hoop(1130, 220, 20, 200, PI, "red");
    pole = new Hoop(1160, 410, 50, 350, PI, "black");
  }

  //level 2
  ground2 = new Ground(650, height, 1300, 20);
  basketball2 = new Basketball(226, 502);
  bind2 = new Bind(basketball2.body, {x: 226, y: 487});

  net2 = createSprite(960, 260, 50, 50);
  net2.addImage(netImage);
  net2.scale = 1.5

  player2 = createSprite(200, 515, 50, 50);
  player2.addImage(playerImage);
  player2.scale = 0.5
  
  opponent2 = createSprite(600, 382, 50, 180);
  opponent2.addImage(opponentImage);
  opponent2.scale = 1

  opponentBody2 = Bodies.rectangle(600, 382, 50, 180, {density: 1.5, friction: 2});
  World.add(world, opponentBody2);

  hoop2Piece1 = new Hoop(985, 315, 10, 100, PI, "red");
  hoop2Piece2 = new Hoop(1096, 310, 10, 100, PI, "red");
  backboard2 = new Hoop(1130, 220, 20, 200, PI, "red");
  pole2 = new Hoop(1160, 410, 50, 350, PI, "black");
  */
}

function draw() {
  Engine.update(engine);

  if (level === "restartGame") {
    attempts = 5
    Matter.Body.setPosition(basketball.body, {x: 226, y: 502});
    Matter.Body.setStatic(basketball.body, false);
    bind.attach(basketball.body);
    opponent.y = 452
    opponentBody.y = 452
    level = "1"
  }

  if (level === "homeScreen") {
    background(150);
  
    textSize(100);
    stroke("blue");
    strokeWeight(4);
    fill("orange");
    text("Press Space To Start Game", 25, 230);

    textSize(60);
    stroke("purple");
    strokeWeight(4);
    fill("yellow");
    text("Press T To Learn How To Play", 260, 400);
  }

  if (keyCode === 84 && level === "homeScreen") {
    level = "tutorial"
  }

  if (level === "tutorial") {
    strokeWeight(0);

    background(150);
    textSize(30);
    fill("black");
    text("1. Drag the basketball with the mouse to aim, and then release the mouse to shoot the ball", 15, 40);
    text("2. Aim for the hoop, and if you get the basketball in the hoop, you wil advance to the next level", 15, 80);
    text("3. You will get 5 tries for level 1, 10 for level 2, and 15 for level 3", 15, 120);
    text("4. If you use all your tries and don't get the basketball in the hoop, you will have to restart", 15, 160);
    text("5. Don't hit the opponent, who will try to block the ball's path", 15, 200);
    text("6. As you proceed through the levels, there will be more and more opponents", 15, 240);
    text("7. If you beat the final level, you will become The Basketball Champion!!!", 15, 280);
    textSize(60);
    text("Press Esc To Go Back", 350, 400);
    if (keyCode === 27); {
      level = "homeScreen"
    }
  }

  if (keyCode === 32 && level === "homeScreen"){
    //level 1

    attempts = 5

    ground = new Ground(650, height, 1300, 20);
    basketball = new Basketball(226, 502, 15);
    bind = new Bind(basketball.body, {x: 226, y: 487});
      
    net = createSprite(960, 260, 50, 50);
    net.addImage(netImage);
    net.scale = 1.5
      
    player = createSprite(200, 515, 50, 50);
    player.addImage(playerImage);
    player.scale = 0.5
      
    opponent = createSprite(600, 452, 50, 150);
    opponent.addImage(opponentImage);
    opponent.scale = 1
      
    opponentBody = Bodies.rectangle(600, 452, 50, 150, {density: 1.5, friction: 2});
    World.add(world, opponentBody);
      
    attemptBox = createSprite(185, 90, 200, 50);

    hoopPiece1 = new Hoop(985, 315, 10, 100, PI, "red");
    hoopPiece2 = new Hoop(1096, 310, 10, 100, PI, "red");
    backboard = new Hoop(1130, 220, 20, 200, PI, "red");
    pole = new Hoop(1160, 410, 50, 350, PI, "black");

    Matter.Body.setStatic(basketball.body, false);
    Matter.Body.setStatic(opponentBody, false);

    level = "1"
  }

  if (level === "1") {
    background(150);
    strokeWeight(0);

    textSize(75);
    fill("black");
    text("Level 1", 1000, 100);

    if (attempts === 5) {
      attemptBox.shapeColor = rgb(50, 150, 0);
    }

    if (attempts === 4) {
      attemptBox.shapeColor = rgb(0, 200, 0);
    } 

    if (attempts === 3) {
      attemptBox.shapeColor = "yellow";
    }

    if (attempts === 2) {
      attemptBox.shapeColor = rgb(200, 0, 0);
    }

    if (attempts === 1) {
      attemptBox.shapeColor = rgb(175, 25, 0);
    }

    opponent.x= opponentBody.position.x
    opponent.y= opponentBody.position.y
  
    opponent.x=600
    opponentBody.position.x=600

    if (opponent.y>490) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:-700});
    }

    if (opponent.y<120) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:150});
    }

    if (basketball.body.position.x > 1000) {
      if (basketball.body.position.x < 1070) {
        if (basketball.body.position.y > 265) {
          if (basketball.body.position.y < 350) {
            gameState = "YOUWIN"
            level = "1.5"
          }
        }
      }
    }
    drawSprite(player);
    drawSprite(opponent);

    ground.display();
    basketball.display();
    bind.display();

    pole.display();

    drawSprite(net);

    drawSprite(attemptBox);

    textSize(30);
    fill("black");
    text("Shots Left: " + attempts, 100, 100);

    if (attempts <= 0 && basketball.body.position.y > 560) {
      Matter.Body.setStatic(basketball.body, true);
      background("black");
      textSize(90);
      stroke("blue");
      strokeWeight(8);
      fill("green");
      text("You Lost!!!", 450, 340);
      textSize(50);
      stroke("purple");
      strokeWeight(4);
      fill("yellow");
      text("Press R to Restart", 450, 450);
    }
  }

  if (keyCode === 82 && attempts <= 0 && basketball.body.position.y > 560) {
    gameState = "onSling"
    level = "restartGame"
  }

  if (gameState === "YOUWIN" && level === "1.5") {
    Matter.Body.setStatic(basketball.body, true);
    background("orange");
    textSize(90);
    stroke("blue");
    strokeWeight(8);
    fill("green");
    text("You Completed Level 1!!!", 200, 340);
    textSize(50);
    stroke("purple");
    strokeWeight(4);
    fill("yellow");
    text("Press 2 to go to Level 2", 350, 450);
  }

  if (keyCode === 32 && gameState === "YOUWIN" && level === "1.5") {
    
    //level 2
    Matter.Body.setPosition(basketball.body, {x: 200, y:500});
    Matter.Body.setStatic(basketball.body, false);
    basketball.radius = 12

    bind.pointB.x = 190
    bind.pointB.y = 500

    bind.attach(basketball.body);

    player.x=170
    player.y=530

    player.scale = 0.4

    opponent.x = 450
    opponent.scale = 0.8
    opponentBody.width = 40
    opponentBody.height = 120

    opponent2 = createSprite(750, 452, 50, 150);
    opponent2.addImage(opponentImage);
    opponent2.scale = 1
      
    opponentBody2 = Bodies.rectangle(750, 452, 50, 150, {density: 1.5, friction: 2});
    World.add(world, opponentBody2);

    attempts = 10

    gameState = "onSling"
    level = "2"
  }

  if (level === "2") {
    background(150);
    strokeWeight(0);

    textSize(75);
    fill("black");
    text("Level 2", 1000, 100);

    if (attempts === 10 || attempts === 9) {
      attemptBox.shapeColor = rgb(50, 150, 0);
    }

    if (attempts === 8 || attempts === 7) {
      attemptBox.shapeColor = rgb(0, 200, 0);
    }

    if (attempts === 6 || attempts === 5) {
      attemptBox.shapeColor = "yellow";
    }

    if (attempts === 4 || attempts ===3) {
      attemptBox.shapeColor = rgb(200, 0, 0);
    }

    if (attempts === 2 || attempts === 1) {
      attemptBox.shapeColor = rgb(175, 25, 0);
    }

    strokeWeight(0);

    opponent.x= opponentBody.position.x
    opponent.y= opponentBody.position.y

    opponent2.x= opponentBody2.position.x
    opponent2.y= opponentBody2.position.y
  
    opponent.x=450
    opponentBody.position.x=450

    opponent2.x=750
    opponentBody2.position.x=750

    if (opponent.y>495) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:-550});
    }

    if (opponent.y<120) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:150});
    }

    if (opponent2.y>495) {
      Matter.Body.applyForce(opponentBody2, opponentBody2.position, {x:0, y:-700});
    }

    if (opponent2.y<120) {
      Matter.Body.applyForce(opponentBody2, opponentBody2.position, {x:0, y:150});
    }

    if (basketball.body.position.x > 1000) {
      if (basketball.body.position.x < 1070) {
        if (basketball.body.position.y > 265) {
          if (basketball.body.position.y < 350) {
            gameState = "YOUWIN"
            level = "2.5"
          }
        }
      }
    }
    drawSprite(player);
    drawSprite(opponent);
    drawSprite(opponent2);

    ground.display();
    basketball.display();
    bind.display();

    pole.display();

    drawSprite(net);

    drawSprite(attemptBox);

    textSize(30);
    fill("black");
    text("Shots Left: " + attempts, 100, 100);

    if (attempts <= 0 && basketball.body.position.y > 560) {
      Matter.Body.setStatic(basketball.body, true);
      background("black");
      textSize(90);
      stroke("blue");
      strokeWeight(8);
      fill("green");
      text("You Lost!!!", 450, 340);
      textSize(50);
      stroke("purple");
      strokeWeight(4);
      fill("yellow");
      text("Press R to Restart", 450, 450);
    }
  }

  if (keyCode === 82 && attempts <=0 && basketball.body.position.y > 560) {
    gameState = "onSling"
    level = "homeScreen"
  }

  if (gameState === "YOUWIN" && level === "2.5") {
    Matter.Body.setStatic(basketball.body, true);
    background("orange");
    textSize(90);
    stroke("blue");
    strokeWeight(8);
    fill("green");
    text("You Completed Level 2!!!", 200, 340);
    textSize(50);
    stroke("purple");
    strokeWeight(4);
    fill("yellow");
    text("Press 3 to go to Level 3", 350, 450);
  }

  if (keyCode === 32 && gameState === "YOUWIN" && level === "2.5") {
    //level 2
    Matter.Body.setPosition(basketball.body, {x: 130, y:520});
    Matter.Body.setStatic(basketball.body, false);
    basketball.radius = 9

    bind.pointB.x = 130
    bind.pointB.y = 520

    bind.attach(basketball.body);

    console.log(basketball.body.position.x, basketball.body.position.y);

    player.x=120
    player.y=550

    player.scale = 0.3

    opponent.x = 400
    opponent.y = 400
    opponent.scale = 0.6
    opponentBody.width = 30
    opponentBody.height = 90

    opponent2.x = 600
    opponent2.y = 400
    opponent2.scale = 0.8
    opponentBody2.width = 40
    opponentBody2.height = 120

    opponent3 = createSprite(800, 400, 50, 150);
    opponent3.addImage(opponentImage);
    opponent3.scale = 1
      
    opponentBody3 = Bodies.rectangle(800, 400, 50, 150, {density: 1.5, friction: 2});
    World.add(world, opponentBody3);

    attempts = 15

    gameState = "onSling"
    level = "3"
  }

  if (level === "3") {
    background(150);
    strokeWeight(0);

    textSize(75);
    fill("black");
    text("Level 3", 1000, 100);

    if (attempts === 15 || attempts === 14|| attempts === 13) {
      attemptBox.shapeColor = rgb(50, 150, 0);
    }

    if (attempts === 12 || attempts === 11|| attempts === 10) {
      attemptBox.shapeColor = rgb(0, 200, 0);
    }

    if (attempts === 9 || attempts === 8|| attempts === 7) {
      attemptBox.shapeColor = "yellow";
    }

    if (attempts === 6 || attempts === 5|| attempts === 4) {
      attemptBox.shapeColor = rgb(200, 0, 0);
    }

    if (attempts === 3 || attempts === 2|| attempts === 1) {
      attemptBox.shapeColor = rgb(175, 25, 0);
    }

    strokeWeight(0);

    opponent.x= opponentBody.position.x
    opponent.y= opponentBody.position.y

    opponent2.x= opponentBody2.position.x
    opponent2.y= opponentBody2.position.y

    opponent3.x= opponentBody3.position.x
    opponent3.y= opponentBody3.position.y
  
    opponent.x=400
    opponentBody.position.x=400

    opponent2.x=600
    opponentBody2.position.x=600

    opponent3.x=800
    opponentBody3.position.x=800

    if (opponent.y>495) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:-400});
    }

    if (opponent.y<120) {
      Matter.Body.applyForce(opponentBody, opponentBody.position, {x:0, y:150});
    }

    if (opponent2.y>495) {
      Matter.Body.applyForce(opponentBody2, opponentBody2.position, {x:0, y:-400});
    }

    if (opponent2.y<120) {
      Matter.Body.applyForce(opponentBody2, opponentBody2.position, {x:0, y:150});
    }

    if (opponent3.y>480) {
      Matter.Body.applyForce(opponentBody3, opponentBody3.position, {x:0, y:-700});
    }

    if (opponent3.y<120) {
      Matter.Body.applyForce(opponentBody3, opponentBody3.position, {x:0, y:150});
    }

    if (basketball.body.position.x > 1000) {
      if (basketball.body.position.x < 1070) {
        if (basketball.body.position.y > 265) {
          if (basketball.body.position.y < 350) {
            gameState = "YOUWIN"
            level = "YOUWIN"
          }
        }
      }
    }
    drawSprite(player);
    drawSprite(opponent);
    drawSprite(opponent2);
    drawSprite(opponent3);

    ground.display();
    basketball.display();
    bind.display();

    pole.display();

    drawSprite(net);

    drawSprite(attemptBox);

    textSize(30);
    fill("black");
    text("Shots Left: " + attempts, 100, 100);

    if (attempts <= 0 && basketball.body.position.y > 580) {
      Matter.Body.setStatic(basketball.body, true);
      background("black");
      textSize(90);
      stroke("blue");
      strokeWeight(8);
      fill("green");
      text("You Lost!!!", 450, 340);
      textSize(50);
      stroke("purple");
      strokeWeight(4);
      fill("yellow");
      text("Press R to Restart", 450, 450);
    }
  }

  if (keyCode === 82 && attempts <=0 && basketball.body.position.y > 580) {
    gameState = "onSling"
    level = "homeScreen"
  }

  if (gameState === "YOUWIN" && level === "YOUWIN") {
    Matter.Body.setStatic(basketball.body, true);
    background("orange");
    textSize(80);
    stroke("blue");
    strokeWeight(8);
    fill("green");
    text("You Completed All The Levels", 130, 250);
    textSize(50);
    stroke("purple");
    strokeWeight(4);
    fill("yellow");
    text("You Are Now The Basketball Champion", 230, 430);
  }
}

function mouseDragged(){
  if (level !== "homeScreen") {
    if (gameState!=="launched"){
      Matter.Body.setPosition(basketball.body, {x: mouseX , y: mouseY});
    }
  }
}


function mouseReleased(){
  if (level !== "homeScreen") {
    bind.fly();
  }
  if (gameState === "onSling" && attempts > 0) {
    attempts = attempts - 1 
  }
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && attempts > 0){
    if (level === "1" || level === "2" || level === "3") {
      bind.attach(basketball.body);
      if (level === "1") {
        Matter.Body.setPosition(basketball.body, {x: 226, y:502});
      }

      if (level === "2") {
        Matter.Body.setPosition(basketball.body, {x: 200, y:550});
      }

      if (level === "3") {
        Matter.Body.setPosition(basketball.body, {x: 150, y:520});
      }
      
      gameState = "onSling"
    }
  }
}