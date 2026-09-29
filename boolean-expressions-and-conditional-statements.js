/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in your program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasMap = true;
let hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === 'mountains') {
  console.log("You turn towards the cold, looming, night-washed mountains.");

  const mountainChoice = readline.question("Do you try to 'climb' the mountains for a vantage point of the area, or do you go through the 'valley' between the mountains?");

  if (mountainChoice === 'climb') {
    console.log("It\'s so dark that as you get halfway up the mountain, you lose your footing and fall 100 feet, dying instantly.");
    console.log("GAME OVER");
  } else if (mountainChoice === 'valley') {
    console.log("You begin to pass through the valley between the mountains and quickly realize how dark it is. You can\'t see your own hand in front of your face, so you also can\'t see the monster leap from the top of the mountain and impale you.");
    console.log("Sorry lad. GAME OVER");
}
} else if (choice === 'village') {
  console.log("You turn towards the lively village, lights glowing in the night and smoke rising from the chimney tops.");

  const villageChoice = readline.question("As you walk into the village, the sound of music assails you. You feel jubilant and see hundreds of brightly colored dresses twirling around a fire. There are people dressed as jesters standing on the outskirts of the circle playing instruments. Do you interrupt a 'dancer' or a 'musician'?");

  if (villageChoice === 'dancer') {
    console.log("You pull aside one of the dancers as they spin past you. They are flustered and confused and slap you across the face.")
    console.log("You die on the spot of embarrassment. Tough luck, kid. GAME OVER");
  } else if (villageChoice === 'musician') {
    hasTorch = true;
    console.log("The musician puts down their flute, smiles at you, and hands you a torch without a single word.");
  
    const torchChoice = readline.question("Cool, you have a torch! Do you 'throw' the torch into the fire to join the festivities, or do you put the torch in your 'inventory' and check out what you have?");

    if (torchChoice === 'throw') {
    console.log("You stay and join in the festivities, mesmerized by the music. You lose track of time and end up staying there well past the time you were supposed to report back with your quest.");
    console.log("You miss the deadline to turn in your quest and are hunted down by mobs. They find you dancing beside the fire, take you by surprise, and throw you into the fire.");
    console.log("That\'s rough, buddy. GAME OVER");
  } else if (torchChoice === 'inventory') {
    console.log("You sort through your inventory and find that you still have your map of the area and you now have a torch. Congratulations!");
  
    const mountainChoice2 = readline.question("You have a torch, you have a map, you have a quest, don\'cha? You leave the village and head to the mountains, your path now well-lit. Do you begin to 'climb' the mountain for a better vantage point, or take the route through the 'valley'?");

    if (mountainChoice2 === 'climb') {
      console.log("You only have one hand to climb with and you\'re already holding a torch.");
      console.log("You lose your footing and fall over 50 feet down straight onto some rocks. You die instantly. GAME OVER");
    } else if (mountainChoice2 === 'valley') {
        console.log("With the pathway illuminated, you can see a sword stuck into the dirt at the edge of a ravine. It\'s a longsword, something you are adept with.");
      
        const swordChoice = readline.question("After spotting the sword, do you choose to 'leave' the sword, or 'take' the sword?");

        if (swordChoice === 'leave') {
          console.log("You decide to leave the sword behind. You walk a few paces before you are ambushsed by an enemy that leaps from the top of the mountain directly in front of you.");
          console.log("Since you have nothing to defend yourself with, you are promptly impaled by the monster. GAME OVER");
        } else if (swordChoice === 'take') {
          hasSword = true;
          console.log("You take the sword and equip it.");

          if (hasTorch && hasSword) {
            console.log("You have a sword equipped and a torch to light the way.");
          }

          const finalBattle = readline.question("The moment you equip the sword, a massive winged beast holding a spear jumps in front of you from the top of the mountain. Do you 'hold' sword and prepare to attack, or do you 'flee'?");

          if (finalBattle === 'hold') {
            console.log("You brace yourself for a battle and stab the monster before it can impale you.");
            console.log("The monster was defeated and you are able to continue safely through the rest of the valley to turn in your quest.");
            console.log("Congratulations!!!! YOU WON THE GAME!!!");
          } else if (finalBattle === 'flee') {
            console.log("Unfortunately, you are just not fast enough for a winged beast with a spear. You are promptly impaled.");
            console.log("GAME OVER");
          }
        }
      }
    }
  }
}