// I worked by myself on this challenge - I probably should have paired!

// Your mission description:
/*
The mission starts in the sewers below dev bootcamp, where our hero has just fallen in on their 
way to class. They must climb their way back through the tunnels, past dangerous vermin,
where they will emerge to sunlight and the school.
*/ 

// Pseudocode
/*
The hero initializes at position 0,0.
Immediately they fall to position 0,-3.
They must move right 3x to 3,-3
They must climb 2x to 3, -1
Move right 1x to 4,-1
Fight a rat at 5,-1
Move right 2x to 6, -1
Climb 3x to 6, 2
The light shines, welcome to Dev Bootcamp! 
*/

// Initial Code
function NPC(name, hp, xpos, ypos){
this.name = name;
this.hp = hp;
this.xpos = xpos;
this.ypos = ypos;
this.battleStatus = function(){
	console.log(this.name + " HP: " + this.hp);
};
this.locStatus = function(){
	console.log(this.name + " X: " + this.xpos + " Y: " + this.ypos);
}
this.moveRight = function(){
	console.log("Moving right");
	this.xpos += 1;
	this.locStatus();
};
this.climb = function() {
	console.log("Climbing up");
	this.ypos += 1;
	this.locStatus();
};
this.fight = function(enemy){
	console.log(this.name + " attacks " + enemy.name + " for " + this.hp + " damage!");
	enemy.hp -= this.hp;
	return enemy;
};
this.die = function(){
		if(this.hp <= 0){
		console.log(this.name + " is dead!");
		this.xpos = undefined;
		this.ypos = undefined;
	};
};
};


greg = new NPC("Greg",50,0,0);

greg.battleStatus();
greg.locStatus();

console.log("Nooooo! You fell into the sewer!");
greg.ypos = -3;
greg.locStatus();

greg.moveRight();
greg.moveRight();
greg.moveRight();
greg.climb();
greg.climb();
greg.moveRight();

console.log("A filthy rat, looking to eat your new sneakers!");

rat = new NPC("Filthy Rat", 15, 5, -1);

rat.battleStatus();
rat.locStatus();

greg = rat.fight(greg);

greg.battleStatus();

rat = greg.fight(rat);

rat.die();

rat.battleStatus();
rat.locStatus();

console.log("You found a potion!");

greg.potions = ["Sewer Water"];
console.log(greg.potions);


greg.moveRight();
greg.climb();
greg.moveRight();
greg.climb();
greg.climb();

console.log(greg.xpos + " / " + greg.ypos + " - You made it! Welcome to Dev Bootcamp!");



// Refactored Code
//I could refactor my number of function calls, ie. moveRight() and climb() for efficiency,
//but I don't think it makes sense in terms of the project, as I am sort of emulating
//code combat. I did alter my code so that it all prints out into an HTML document on my page
//at http://scoin.github.io/unit1_projects/codecombat.html





// Reflection
/*
In this project, I'll be honest even after asking on the google plus I cannot figure out
what's expected. So in that sense, I can't speak about what I believe "worked" - it all
works in the sense that I believe it emulates a sort of role playing game.

I just really didn't get it. Maybe I am overthinking it. I wanted to add user input
and make it a real game, or animate the movement of ascii characters in the browser,
but I could not figure out how to do that with limited time.

I did learn and really cement the syntax for creating prototypes, objects and object literals.
As well as calling functions. I also learned how to make javascript print to the browser.

I enjoyed creating the challenge, and putting it all together. It was challenging and fun.
I did not find any aspect tedious, I just really feel that the problem was not well articulated
as to what precisely was expected.
*/