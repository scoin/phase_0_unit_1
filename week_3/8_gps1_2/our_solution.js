// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ajay Singh
//  2. Greg Piccolo


// 1. "YOU SIGNED... WHO?!"

function Client (name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
};

function printClient(client){
      console.log(client.id + " "+ client.name + " " + client.age + " " + client.quote);   
    };

// 2. "Here they Come!"

var Adam = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
var Kristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")
var Jim = new Client("Jim Carrey", 52, "...So you're telling me there is a chance? YEAH!")

// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var people = [Adam, Kristen, Jim, shooterMcGavin];
// 4. "SHOW 'EM OFF!"

for(i = 0; i < people.length; i++){
    // console.log("Name: " + people[i].name);
    // console.log("Age: " + people[i].age);
    // console.log("Quote: " + people[i].quote);
    people[i].id = i+1;
    printClient(people[i]);
}


//  Your Reflection:
/*
Ajay and I naturally with the time constraints did our strategy on the fly. We wanted to use prototypes rather than
object literals, as was demonstrated by the shooterMcGavin code in place. We faced the problem of figuring out exactly
how to do that. We also needed to print it out "pretty" and wrestled between concatenation and other options. We also wanted to add an ID number.

Emily guided us through our questions, such as figuring out how to iterate through all the clients, which we did with an array.

I really learned javascript prototypes here, as well why some stuff works and doesn't - for example, our .id property
is added only in the scope of the for loop, and does not live on after.

I am very confident with the objectives here, and felt it an excellent primer to prototypes / classes. I really enjoyed
working with Ajay and Emily. I did not find any aspect tedious, though navigator - driver takes some getting used to.
