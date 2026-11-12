// My Soccer Drills — 30 easy drills per category, 4 steps each.
// Most are indoor-friendly: use a soft or mini ball and clear some space first.
const DRILLS = {
  shooting: [
    { name: "Basket Goal", place: "indoor", steps: [
      "Lay a laundry basket on its side to make a goal.",
      "Put your ball 4 big steps away from it.",
      "Use the inside of your foot.",
      "Kick the ball gently into the basket."] },
    { name: "Shoe Goal Aim", place: "indoor", steps: [
      "Put two shoes a few feet apart to make a goal.",
      "Set the ball 5 steps away.",
      "Look at the gap between the shoes.",
      "Roll a shot through the middle."] },
    { name: "Left Foot Shots", place: "indoor", steps: [
      "Make a goal with a basket or two pillows.",
      "Line up 3 balls (or rolled-up socks).",
      "Shoot each one with only your left foot.",
      "Count how many go in."] },
    { name: "Right Foot Shots", place: "indoor", steps: [
      "Set up a small goal against a wall.",
      "Stand 4 steps back with the ball.",
      "Shoot with only your right foot.",
      "Go get the ball and try 5 more times."] },
    { name: "Cup Knockdown", place: "indoor", steps: [
      "Stand 3 plastic cups in a row on the floor.",
      "Back up 4 steps with a soft ball.",
      "Aim at one cup.",
      "Shoot and try to knock it over."] },
    { name: "Wall Target Shot", place: "indoor", steps: [
      "Stick a piece of tape low on a wall as a target.",
      "Stand 5 steps away.",
      "Keep your eyes on the ball as you kick.",
      "Try to hit the tape."] },
    { name: "Low and Steady", place: "indoor", steps: [
      "Face a wall with a soft ball.",
      "Lean your body over the ball a little.",
      "Kick through the middle of the ball.",
      "Make it stay on the floor the whole way."] },
    { name: "Two-Touch Finish", place: "indoor", steps: [
      "Set up a small goal with two pillows.",
      "Tap the ball forward with one small touch.",
      "Get your feet behind the ball.",
      "Shoot it in with your second touch."] },
    { name: "Turn and Shoot", place: "indoor", steps: [
      "Stand with your back to your small goal.",
      "Keep the ball at your feet.",
      "Turn around with one touch.",
      "Shoot right away."] },
    { name: "Wall Rebound Shot", place: "indoor", steps: [
      "Stand 4 steps from a wall.",
      "Pass the ball softly against the wall.",
      "Let it roll back to you.",
      "Shoot it back at the wall without stopping it."] },
    { name: "Sock Ball Volley", place: "indoor", steps: [
      "Roll up a pair of socks into a ball.",
      "Toss it up a little in front of you.",
      "Point your toes down.",
      "Kick it into a basket before it lands."] },
    { name: "Tap-In Practice", place: "indoor", steps: [
      "Put a small goal 2 steps away.",
      "Roll the ball across in front of you with your foot.",
      "Step toward the ball.",
      "Tap it into the goal."] },
    { name: "Corner Picker", place: "indoor", steps: [
      "Make a goal with two water bottles.",
      "Say out loud which side you will aim for.",
      "Take your shot.",
      "Give yourself a point if it goes that way."] },
    { name: "Box Goal", place: "indoor", steps: [
      "Put an empty cardboard box on its side.",
      "Stand 3 steps from the opening.",
      "Open your foot like a golf club.",
      "Place the ball inside the box."] },
    { name: "Stop and Shoot", place: "indoor", steps: [
      "Dribble the ball slowly across the room.",
      "Stop it with the bottom of your foot.",
      "Line yourself up with the goal.",
      "Shoot from where the ball stopped."] },
    { name: "Chair Leg Goal", place: "indoor", steps: [
      "Use the space between two chair legs as a goal.",
      "Sit the ball 4 steps away.",
      "Aim for the middle of the gap.",
      "Pass-shoot it through without touching the legs."] },
    { name: "Swap Feet Shots", place: "indoor", steps: [
      "Line up 4 balls or sock balls.",
      "Shoot the first one with your right foot.",
      "Shoot the next one with your left foot.",
      "Keep switching feet until they are all gone."] },
    { name: "Score in 10", place: "indoor", steps: [
      "Set up any small goal.",
      "Take 10 shots, one at a time.",
      "Count your goals out loud.",
      "Write down your score to beat next time."] },
    { name: "Hallway Shot", place: "indoor", steps: [
      "Put a basket goal at the end of a hallway.",
      "Start at the other end with the ball.",
      "Dribble halfway down.",
      "Shoot it into the basket."] },
    { name: "Pillow Goalie", place: "indoor", steps: [
      "Stand a pillow up in the middle of a small goal.",
      "Back up 4 steps.",
      "Look for the open space next to the pillow.",
      "Shoot into the gap."] },
    { name: "Laces Tap", place: "indoor", steps: [
      "Hold onto a wall or chair for balance.",
      "Point your toes down to show your laces.",
      "Tap the ball softly with your laces.",
      "Do 10 taps on each foot."] },
    { name: "Side Angle Shot", place: "indoor", steps: [
      "Put the ball off to the side of your small goal.",
      "Look at the far side of the goal.",
      "Use the inside of your foot.",
      "Curl the ball into the far side."] },
    { name: "Line Shot", place: "indoor", steps: [
      "Put a strip of tape on the floor as your shooting line.",
      "Keep the ball behind the line.",
      "Shoot at a small goal.",
      "Take one step back after every goal."] },
    { name: "Celebration Finish", place: "indoor", steps: [
      "Dribble toward your small goal.",
      "Pick a side to aim at.",
      "Shoot and score.",
      "Do your best goal celebration."] },
    { name: "Quiet Shot", place: "indoor", steps: [
      "Use a soft ball and a basket goal.",
      "Kick as gently as you can.",
      "Make the ball just barely roll in.",
      "Try it 5 times without it bouncing out."] },
    { name: "Penalty Spot Practice", place: "outdoor", steps: [
      "Put the ball on the penalty spot.",
      "Take 3 small steps back.",
      "Pick a corner of the goal.",
      "Kick the ball with the inside of your foot toward that corner."] },
    { name: "Laces Power Shot", place: "outdoor", steps: [
      "Set the ball 10 big steps from the goal.",
      "Point your toes down so your laces face the ball.",
      "Plant your other foot next to the ball.",
      "Strike the middle of the ball with your laces."] },
    { name: "Rolling Ball Shot", place: "outdoor", steps: [
      "Stand at the edge of the box.",
      "Roll the ball forward with your hand.",
      "Jog after it as it rolls.",
      "Shoot before it stops."] },
    { name: "Chip It In", place: "outdoor", steps: [
      "Put a cone in front of the goal like a goalie.",
      "Stand 8 steps behind the ball.",
      "Kick under the ball with a little scoop.",
      "Make it float over the cone into the goal."] },
    { name: "Bounce Shot", place: "outdoor", steps: [
      "Hold the ball at waist height.",
      "Drop it and let it bounce once.",
      "Watch it come back down.",
      "Kick it toward the goal after the bounce."] },
  ],
  passing: [
    { name: "Wall Passes", place: "indoor", steps: [
      "Stand 4 steps from a wall.",
      "Pass the ball against the wall with your inside foot.",
      "Stop the ball when it comes back.",
      "Do 10 passes in a row."] },
    { name: "One-Touch Wall Pass", place: "indoor", steps: [
      "Face a wall 3 steps away.",
      "Pass the ball at the wall.",
      "When it comes back, do not stop it.",
      "Pass it right back with one touch."] },
    { name: "Left Foot Wall Pass", place: "indoor", steps: [
      "Stand in front of a wall.",
      "Pass only with your left foot.",
      "Stop the ball with your left foot too.",
      "Do it 10 times."] },
    { name: "Right Foot Wall Pass", place: "indoor", steps: [
      "Stand in front of a wall.",
      "Pass only with your right foot.",
      "Keep the ball on the floor.",
      "Count how many clean passes you make."] },
    { name: "Bottle Gate Pass", place: "indoor", steps: [
      "Set two water bottles apart like a gate.",
      "Stand 4 steps away.",
      "Pass the ball through the middle.",
      "Go to the other side and pass it back through."] },
    { name: "Tape Target", place: "indoor", steps: [
      "Put a tape X low on a wall.",
      "Stand 4 steps back.",
      "Lock your ankle and pass.",
      "Try to hit the X 5 times."] },
    { name: "Two-Touch Passing", place: "indoor", steps: [
      "Face a wall with your ball.",
      "Stop the ball with your first touch.",
      "Pass it with your second touch.",
      "Keep a steady rhythm for 20 passes."] },
    { name: "Ankle Lock Pass", place: "indoor", steps: [
      "Turn your foot sideways.",
      "Keep your ankle stiff like a board.",
      "Hit the middle of the ball.",
      "Watch it roll straight to the wall."] },
    { name: "Cup Bowling", place: "indoor", steps: [
      "Stand 6 plastic cups like bowling pins.",
      "Back up 5 steps.",
      "Pass the ball along the floor at the cups.",
      "Count how many you knock down."] },
    { name: "Couch Partner", place: "indoor", steps: [
      "Ask someone to sit on the couch.",
      "Pass the ball softly to their feet.",
      "Have them pass it back to you.",
      "Stop it with one touch every time."] },
    { name: "Soft Touch Pass", place: "indoor", steps: [
      "Put a pillow on the floor 3 steps away.",
      "Pass the ball very gently.",
      "Try to make it stop right at the pillow.",
      "Move the pillow farther after 3 good ones."] },
    { name: "Outside Foot Flick", place: "indoor", steps: [
      "Stand with the ball in front of you.",
      "Turn your toes in a little.",
      "Flick the ball with the outside of your foot.",
      "Send it to a wall on your side."] },
    { name: "Back Heel Pass", place: "indoor", steps: [
      "Stand with the ball next to your foot.",
      "Step your foot over the ball.",
      "Tap it backward with your heel.",
      "Turn around and get it."] },
    { name: "Look Before You Pass", place: "indoor", steps: [
      "Put two targets on different walls.",
      "Stand in the middle with the ball.",
      "Look up and pick a target.",
      "Pass to the one you picked."] },
    { name: "Hallway Bowling", place: "indoor", steps: [
      "Stand at one end of a hallway.",
      "Put a shoe at the other end.",
      "Pass the ball straight down the hall.",
      "Try to hit the shoe."] },
    { name: "Trap and Pass", place: "indoor", steps: [
      "Pass the ball at a wall.",
      "Trap it under your foot when it comes back.",
      "Look up at your target.",
      "Pass it again."] },
    { name: "Accuracy Ladder", place: "indoor", steps: [
      "Put a water bottle 2 steps away.",
      "Pass and hit the bottle.",
      "Move it one step farther.",
      "Keep going until you miss."] },
    { name: "Corner Pass", place: "indoor", steps: [
      "Stand facing the corner of a room.",
      "Pass the ball into one wall.",
      "Let it bounce to the other wall and back.",
      "Stop it, then try again."] },
    { name: "10 in a Row", place: "indoor", steps: [
      "Stand 3 steps from a wall.",
      "Pass back and forth with the wall.",
      "Count each good pass out loud.",
      "Try to reach 10 without a mistake."] },
    { name: "Under the Chair", place: "indoor", steps: [
      "Put a chair 4 steps away.",
      "Keep the ball low on the floor.",
      "Pass it under the chair.",
      "Do not let it touch the chair legs."] },
    { name: "Pass and Move", place: "indoor", steps: [
      "Pass the ball at a wall.",
      "Take one side step right away.",
      "Let the ball come back to your new spot.",
      "Pass again and step the other way."] },
    { name: "Sock Ball Toss Pass", place: "indoor", steps: [
      "Roll up socks into a ball.",
      "Toss it up a little.",
      "Pass it with the inside of your foot before it lands.",
      "Aim for a basket."] },
    { name: "Silent Target", place: "indoor", steps: [
      "Have a family member hold up a pillow.",
      "Watch where they move it.",
      "Pass along the floor to the pillow.",
      "Switch and let them try."] },
    { name: "Pass Through Legs", place: "indoor", steps: [
      "Ask someone to stand with their legs wide.",
      "Stand 4 steps away.",
      "Pass the ball through their legs.",
      "Switch places and try again."] },
    { name: "Wall Weave", place: "indoor", steps: [
      "Stand sideways to a wall.",
      "Pass with your front foot.",
      "Stop it with your back foot.",
      "Turn around and do the other side."] },
    { name: "Long Pass", place: "outdoor", steps: [
      "Set the ball 20 steps from a target.",
      "Run up at a little angle.",
      "Kick the bottom of the ball with your laces.",
      "Make it fly to the target."] },
    { name: "Triangle Passing", place: "outdoor", steps: [
      "Set up 3 cones in a triangle.",
      "Stand at one cone.",
      "Pass to the next cone and run after it.",
      "Keep going around the triangle."] },
    { name: "Give and Go", place: "outdoor", steps: [
      "Pass to a partner.",
      "Run forward right away.",
      "Have your partner pass it back into your path.",
      "Collect the ball as you run."] },
    { name: "Cross the Ball", place: "outdoor", steps: [
      "Dribble down the side of the field.",
      "Stop near the corner.",
      "Look at the middle of the box.",
      "Kick the ball into the middle."] },
    { name: "Through Ball", place: "outdoor", steps: [
      "Have a partner start jogging forward.",
      "Wait until they are a few steps ahead.",
      "Pass into the open space in front of them.",
      "Let them chase it down."] },
  ],
  defending: [
    { name: "Ready Stance", place: "indoor", steps: [
      "Stand with your feet shoulder-width apart.",
      "Bend your knees a little.",
      "Get up on your toes.",
      "Hold this stance for 10 seconds."] },
    { name: "Side Shuffle", place: "indoor", steps: [
      "Put two shoes 4 steps apart.",
      "Start at one shoe in your ready stance.",
      "Shuffle sideways to the other shoe.",
      "Shuffle back without crossing your feet."] },
    { name: "Backpedal", place: "indoor", steps: [
      "Stand at one end of a hallway.",
      "Take small steps backward.",
      "Keep your eyes looking forward.",
      "Stop after 8 steps."] },
    { name: "Quick Feet", place: "indoor", steps: [
      "Stand in your ready stance.",
      "Tap your feet fast in place.",
      "When someone claps, hop forward.",
      "Get right back into your stance."] },
    { name: "Mirror Drill", place: "indoor", steps: [
      "Face a family member.",
      "Have them shuffle left and right.",
      "Copy every move like a mirror.",
      "Switch who leads after 30 seconds."] },
    { name: "Block Tackle", place: "indoor", steps: [
      "Put the ball against a wall so it can't roll.",
      "Step in with the inside of your foot.",
      "Put your foot on the middle of the ball.",
      "Push into it firmly and hold for 3 seconds."] },
    { name: "Toe Poke", place: "indoor", steps: [
      "Have someone roll the ball slowly past you.",
      "Wait until it is close.",
      "Reach in with your toe.",
      "Poke the ball away."] },
    { name: "Shoe Slalom Shuffle", place: "indoor", steps: [
      "Set 4 shoes in a zigzag.",
      "Start at the first shoe.",
      "Slide sideways to each shoe.",
      "Keep your body low the whole time."] },
    { name: "Ball Watcher", place: "indoor", steps: [
      "Have someone do fake moves with the ball.",
      "Do not look at their head or arms.",
      "Watch only the ball.",
      "Move only when the ball moves."] },
    { name: "Block the Roll", place: "indoor", steps: [
      "Stand in front of a small goal.",
      "Have someone roll the ball at it.",
      "Move your feet to get in the way.",
      "Stop the ball with your feet."] },
    { name: "Protect the Cup", place: "indoor", steps: [
      "Put a plastic cup behind you.",
      "Have someone try to hit it with a rolled ball.",
      "Shuffle to block each roll.",
      "Count how many you stop."] },
    { name: "Turn and Recover", place: "indoor", steps: [
      "Stand in your ready stance.",
      "Have someone point left or right.",
      "Turn your hips that way fast.",
      "Take 3 quick steps and come back."] },
    { name: "Stay Low Hold", place: "indoor", steps: [
      "Bend your knees like you're sitting in a chair.",
      "Put your arms out a little for balance.",
      "Keep your back straight.",
      "Hold it for 15 seconds."] },
    { name: "Clap Catch Reaction", place: "indoor", steps: [
      "Stand in your ready stance.",
      "Have someone drop a ball from their hand.",
      "React when you see it fall.",
      "Trap it with your foot before it rolls away."] },
    { name: "Hallway Close Down", place: "indoor", steps: [
      "Put the ball at the end of a hallway.",
      "Walk quickly toward it.",
      "Slow down with tiny steps when close.",
      "Stop in your ready stance next to it."] },
    { name: "Steal the Sock", place: "indoor", steps: [
      "Put a rolled sock between you and a family member.",
      "Both stand 3 steps back.",
      "Have a third person yell \"Go!\"",
      "Race to grab it first."] },
    { name: "Show Them Outside", place: "indoor", steps: [
      "Have someone walk the ball toward you slowly.",
      "Stand a little to their inside.",
      "Guide them toward the wall.",
      "Keep them away from the middle of the room."] },
    { name: "Shadow Steps", place: "indoor", steps: [
      "Have someone walk around the room.",
      "Stay one step behind them.",
      "Copy their turns and stops.",
      "Do it for one minute."] },
    { name: "Talk Like a Defender", place: "indoor", steps: [
      "Stand in your ready stance.",
      "Shout \"Ball!\" and shuffle forward.",
      "Shout \"Man on!\" and turn your head.",
      "Shout \"Clear!\" and kick the air."] },
    { name: "Pillow Jockey", place: "indoor", steps: [
      "Put a pillow on the floor.",
      "Stand one big step from it in your stance.",
      "Shuffle backward slowly.",
      "Keep your eyes on the pillow the whole time."] },
    { name: "Hop and Hold", place: "indoor", steps: [
      "Stand on one foot.",
      "Hop forward a tiny bit.",
      "Land softly and hold still for 3 seconds.",
      "Switch to the other foot."] },
    { name: "Intercept the Roll", place: "indoor", steps: [
      "Have two people roll a ball to each other.",
      "Stand between them.",
      "Watch their feet to guess where it goes.",
      "Step in and stop it."] },
    { name: "Wall Clear", place: "indoor", steps: [
      "Roll a soft ball toward a wall.",
      "Run after it.",
      "Kick it firmly against the wall.",
      "Get back into your stance."] },
    { name: "Goal-Side Spot", place: "indoor", steps: [
      "Put a shoe down as your goal.",
      "Have someone move around the room.",
      "Always stand between them and the shoe.",
      "Move every time they move."] },
    { name: "Header Practice", place: "indoor", steps: [
      "Use a balloon or very soft ball.",
      "Have someone toss it gently to you.",
      "Keep your eyes open.",
      "Push it away with your forehead."] },
    { name: "Jockey the Attacker", place: "outdoor", steps: [
      "Have a partner dribble slowly at you.",
      "Stay one big step away from them.",
      "Move backward as they move forward.",
      "Do not dive in for the ball."] },
    { name: "Recovery Run", place: "outdoor", steps: [
      "Start 5 steps behind a partner.",
      "Let them dribble toward a goal.",
      "Sprint to catch up.",
      "Get between them and the goal."] },
    { name: "1v1 Box Battle", place: "outdoor", steps: [
      "Make a small box with cones.",
      "Have a partner try to dribble across.",
      "Stay in front of them.",
      "Stop them from reaching the other side."] },
    { name: "Win It Back", place: "outdoor", steps: [
      "Play keep-away with a partner.",
      "When you lose the ball, react fast.",
      "Chase right away.",
      "Try to win it back in 5 seconds."] },
    { name: "Clear the Ball", place: "outdoor", steps: [
      "Have someone roll a ball toward you.",
      "Run to meet it.",
      "Kick it high and far with your laces.",
      "Send it away from your goal."] },
  ],
};
