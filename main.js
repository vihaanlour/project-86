var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
  fabric.Image.fromURL("player.png", function (Img) {
    playerObject = Img;

    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObject);
  });
}

function newImage(getImage) {
  fabric.Image.fromURL(getImage, function (Img) {
    blockImageObject = Img;

    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockImageObject);
  });
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
  keyPressed = e.keyCode;

  if (e.shiftKey == true && keyPressed == "80") {
    blockImageHeight = blockImageHeight + 15;
    blockImageWidth = blockImageWidth + 15;
    document.getElementById("current_width").innerHTML = blockImageWidth;
    document.getElementById("current_height").innerHTML = blockImageHeight;
  }
  if (e.shiftKey == true && keyPressed == "77") {
    blockImageHeight = blockImageHeight - 15;
    blockImageWidth = blockImageWidth - 15;
    document.getElementById("current_width").innerHTML = blockImageWidth;
    document.getElementById("current_height").innerHTML = blockImageHeight;
  }
  if (keyPressed == "38") {
    up();
    console.log("up arrow is pressed");
  }
  if (keyPressed == "40") {
    down();
    console.log("down arrow is pressed");
  }
  if (keyPressed == "37") {
    left();
    console.log("left arrow is pressed");
  }
  if (keyPressed == "39") {
    right();
    console.log("right arrow is pressed");
  }
  if (keyPressed == "70") {
    newImage("ironman_face.png");
    console.log("f key is pressed");
  }
  if (keyPressed == "66") {
    newImage("spiderman_body.png");
    console.log("b key is pressed");
  }
  if (keyPressed == "76") {
    newImage("hulk_legs.png");
    console.log("l key is pressed");
  }
  if (keyPressed == "82") {
    newImage("thor_right_hand.png");
    console.log("r key is pressed");
  }
  if (keyPressed == "72") {
    newImage("captain_america_left_hand.png");
    console.log("h key is pressed");
  }
}

function up() {
  if (playerY >= 30) {
    playerY = playerY - 30;
    canvas.remove(playerObject);
    playerUpdate();
  }
}

function down() {
  if (playerY <= 450) {
    playerY = playerY + 30;
    canvas.remove(playerObject);
    playerUpdate();
  }
}

function left() {
  if (playerX >= 30) {
    playerX = playerX - 30;
    canvas.remove(playerObject);
    playerUpdate();
  }
}

function right() {
  if (playerX <= 850) {
    playerX = playerX + 30;
    canvas.remove(playerObject);
    playerUpdate();
  }
}
