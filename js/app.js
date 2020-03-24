// Enemies our player must avoid 
var Enemy = function(x, y) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // hellooooooooooo 
    // ok
    // The image/sprite for our enemies, this uses
    // hello the audio call doesn't work? 
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;   
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random()*500) +100
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(this.x < 500){
    this.x += this.speed * dt
   } else{
       this.x = -100
       this.x += (this.speed  * dt)+60
       console.log(this.speed)
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function(dt) {
         this.y
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
}
Player.prototype.handleInput = function(move) {
    var win  = 0;
if(move === "right" && this.x<400){
    this.x = this.x + 100;
    console.log(this.x)
}
if (move === "left"&& this.x>0) {
    this.x = this.x-100
    console.log(this.x)
}
if(move === "up"&& this.y>-50){
    this.y = this.y - 90
    console.log(this.y)
}
if (move === "down"&& this.y<400) {
    this.y = this.y + 90
    console.log(this.y)
  } 
 if (this.y === -50) {
      
    this.reset(200, 400)
   }
}
Player.prototype.reset = function(x, y) {
        this.x = x
        this.y = y
}
// yeah it's the same 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies =[new Enemy(0,70),new Enemy(0,240), new Enemy(0, 140 )]

// Place the player object in a variable called player
var player = new Player(200, 400)


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

