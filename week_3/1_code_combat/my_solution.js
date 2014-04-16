// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //#1
//down x2
//right
//up
//right x2
//down
//attack

//#2
// up
// right
//get mushroom
// left
// up 
//attack x2

//#3
// right
//attack
// right
// down
//potion
// up 
// right 
//attack

//#4
//Right
//Door   
//Right
//say
//Left
//Left
//say
//Right
//say
//Right
//Right
//Up
//Up
//Right
//say
//Down
//Right
//Up
//Right

//#5
//Down
//Down
//say
//Up
//Up

//#6
//say x4
//#7
//move(70, 10) 
//say
//move(58, 33)
//say
//move(70, 10)

//#8
//move(75, 63)
//say x2
//move(63,43)
//say
//#9
//move(30, 26)  
//attack(46, 5)  
//move(49, 44)
//attack(68, 56) 
//attack(62, 51) 
//attack(49, 65) 
//move(56,34)
//attack(53, 43)

//Sorry, I didn't realize that I needed to paste the real code too for the first three missions. 
//Seemed like a waste of limited time to rewrite it all.

//#4
this.moveRight();
this.bustDownDoor();    
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//#5
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//#6
say x4

//#7
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(58, 33);
this.say("Eat this");
this.moveXY(70, 10);

//#8
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me");
this.moveXY(63,43);
this.say("Attack");

//#9
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(49, 44);
this.attackXY(68, 56); 
this.attackXY(62, 51); 
this.attackXY(49, 65); 
this.moveXY(56,34);
this.attackXY(53, 43);
 
 
 
// Reflection:
// Write your reflection here.
