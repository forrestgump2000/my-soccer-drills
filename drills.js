// My Soccer Drills — 30 easy drills per category, 4 steps each,
// for both indoors (use a soft ball) and outdoors.
const DRILLS = {
  indoor: {
    shooting: [
      { name: "Basket Goal", steps: [
        "Lay a laundry basket on its side to make a goal.",
        "Put your ball 4 big steps away from it.",
        "Use the inside of your foot.",
        "Kick the ball gently into the basket."] },
      { name: "Shoe Goal Aim", steps: [
        "Put two shoes a few feet apart to make a goal.",
        "Set the ball 5 steps away.",
        "Look at the gap between the shoes.",
        "Roll a shot through the middle."] },
      { name: "Left Foot Shots", steps: [
        "Make a goal with a basket or two pillows.",
        "Line up 3 balls (or rolled-up socks).",
        "Shoot each one with only your left foot.",
        "Count how many go in."] },
      { name: "Right Foot Shots", steps: [
        "Set up a small goal against a wall.",
        "Stand 4 steps back with the ball.",
        "Shoot with only your right foot.",
        "Go get the ball and try 5 more times."] },
      { name: "Cup Knockdown", steps: [
        "Stand 3 plastic cups in a row on the floor.",
        "Back up 4 steps with a soft ball.",
        "Aim at one cup.",
        "Shoot and try to knock it over."] },
      { name: "Wall Target Shot", steps: [
        "Stick a piece of tape low on a wall as a target.",
        "Stand 5 steps away.",
        "Keep your eyes on the ball as you kick.",
        "Try to hit the tape."] },
      { name: "Low and Steady", steps: [
        "Face a wall with a soft ball.",
        "Lean your body over the ball a little.",
        "Kick through the middle of the ball.",
        "Make it stay on the floor the whole way."] },
      { name: "Two-Touch Finish", steps: [
        "Set up a small goal with two pillows.",
        "Tap the ball forward with one small touch.",
        "Get your feet behind the ball.",
        "Shoot it in with your second touch."] },
      { name: "Turn and Shoot", steps: [
        "Stand with your back to your small goal.",
        "Keep the ball at your feet.",
        "Turn around with one touch.",
        "Shoot right away."] },
      { name: "Wall Rebound Shot", steps: [
        "Stand 4 steps from a wall.",
        "Pass the ball softly against the wall.",
        "Let it roll back to you.",
        "Shoot it back at the wall without stopping it."] },
      { name: "Sock Ball Volley", steps: [
        "Roll up a pair of socks into a ball.",
        "Toss it up a little in front of you.",
        "Point your toes down.",
        "Kick it into a basket before it lands."] },
      { name: "Tap-In Practice", steps: [
        "Put a small goal 2 steps away.",
        "Roll the ball across in front of you with your foot.",
        "Step toward the ball.",
        "Tap it into the goal."] },
      { name: "Corner Picker", steps: [
        "Make a goal with two water bottles.",
        "Say out loud which side you will aim for.",
        "Take your shot.",
        "Give yourself a point if it goes that way."] },
      { name: "Box Goal", steps: [
        "Put an empty cardboard box on its side.",
        "Stand 3 steps from the opening.",
        "Open your foot like a golf club.",
        "Place the ball inside the box."] },
      { name: "Stop and Shoot", steps: [
        "Dribble the ball slowly across the room.",
        "Stop it with the bottom of your foot.",
        "Line yourself up with the goal.",
        "Shoot from where the ball stopped."] },
      { name: "Chair Leg Goal", steps: [
        "Use the space between two chair legs as a goal.",
        "Sit the ball 4 steps away.",
        "Aim for the middle of the gap.",
        "Pass-shoot it through without touching the legs."] },
      { name: "Swap Feet Shots", steps: [
        "Line up 4 balls or sock balls.",
        "Shoot the first one with your right foot.",
        "Shoot the next one with your left foot.",
        "Keep switching feet until they are all gone."] },
      { name: "Score in 10", steps: [
        "Set up any small goal.",
        "Take 10 shots, one at a time.",
        "Count your goals out loud.",
        "Write down your score to beat next time."] },
      { name: "Hallway Shot", steps: [
        "Put a basket goal at the end of a hallway.",
        "Start at the other end with the ball.",
        "Dribble halfway down.",
        "Shoot it into the basket."] },
      { name: "Pillow Goalie", steps: [
        "Stand a pillow up in the middle of a small goal.",
        "Back up 4 steps.",
        "Look for the open space next to the pillow.",
        "Shoot into the gap."] },
      { name: "Laces Tap", steps: [
        "Hold onto a wall or chair for balance.",
        "Point your toes down to show your laces.",
        "Tap the ball softly with your laces.",
        "Do 10 taps on each foot."] },
      { name: "Side Angle Shot", steps: [
        "Put the ball off to the side of your small goal.",
        "Look at the far side of the goal.",
        "Use the inside of your foot.",
        "Curl the ball into the far side."] },
      { name: "Line Shot", steps: [
        "Put a strip of tape on the floor as your shooting line.",
        "Keep the ball behind the line.",
        "Shoot at a small goal.",
        "Take one step back after every goal."] },
      { name: "Celebration Finish", steps: [
        "Dribble toward your small goal.",
        "Pick a side to aim at.",
        "Shoot and score.",
        "Do your best goal celebration."] },
      { name: "Quiet Shot", steps: [
        "Use a soft ball and a basket goal.",
        "Kick as gently as you can.",
        "Make the ball just barely roll in.",
        "Try it 5 times without it bouncing out."] },
      { name: "Under the Table Goal", steps: [
        "Push the chairs away from a table.",
        "Use the space under the table as your goal.",
        "Stand 4 steps back with a soft ball.",
        "Shoot low so it rolls under the table."] },
      { name: "Couch Rebound Shot", steps: [
        "Stand 4 steps from the bottom of the couch.",
        "Shoot the ball low at the couch.",
        "Let it bounce back to you.",
        "Shoot again with your other foot."] },
      { name: "Living Room Penalty", steps: [
        "Put a piece of tape down as the penalty spot.",
        "Ask someone to kneel in a small goal as the goalie.",
        "Pick a side before you kick.",
        "Shoot past the goalie."] },
      { name: "Toe Taps Then Shoot", steps: [
        "Put one foot on top of the ball.",
        "Tap the top of the ball 5 times, switching feet.",
        "Roll it forward with the bottom of your foot.",
        "Shoot it into the basket."] },
      { name: "Basket Lineup", steps: [
        "Line up 3 baskets or boxes side by side.",
        "Give each one a number: 1, 2, 3.",
        "Have someone call out a number.",
        "Shoot into that basket."] },
    ],
    passing: [
      { name: "Wall Passes", steps: [
        "Stand 4 steps from a wall.",
        "Pass the ball against the wall with your inside foot.",
        "Stop the ball when it comes back.",
        "Do 10 passes in a row."] },
      { name: "One-Touch Wall Pass", steps: [
        "Face a wall 3 steps away.",
        "Pass the ball at the wall.",
        "When it comes back, do not stop it.",
        "Pass it right back with one touch."] },
      { name: "Left Foot Wall Pass", steps: [
        "Stand in front of a wall.",
        "Pass only with your left foot.",
        "Stop the ball with your left foot too.",
        "Do it 10 times."] },
      { name: "Right Foot Wall Pass", steps: [
        "Stand in front of a wall.",
        "Pass only with your right foot.",
        "Keep the ball on the floor.",
        "Count how many clean passes you make."] },
      { name: "Bottle Gate Pass", steps: [
        "Set two water bottles apart like a gate.",
        "Stand 4 steps away.",
        "Pass the ball through the middle.",
        "Go to the other side and pass it back through."] },
      { name: "Tape Target", steps: [
        "Put a tape X low on a wall.",
        "Stand 4 steps back.",
        "Lock your ankle and pass.",
        "Try to hit the X 5 times."] },
      { name: "Two-Touch Passing", steps: [
        "Face a wall with your ball.",
        "Stop the ball with your first touch.",
        "Pass it with your second touch.",
        "Keep a steady rhythm for 20 passes."] },
      { name: "Ankle Lock Pass", steps: [
        "Turn your foot sideways.",
        "Keep your ankle stiff like a board.",
        "Hit the middle of the ball.",
        "Watch it roll straight to the wall."] },
      { name: "Cup Bowling", steps: [
        "Stand 6 plastic cups like bowling pins.",
        "Back up 5 steps.",
        "Pass the ball along the floor at the cups.",
        "Count how many you knock down."] },
      { name: "Couch Partner", steps: [
        "Ask someone to sit on the couch.",
        "Pass the ball softly to their feet.",
        "Have them pass it back to you.",
        "Stop it with one touch every time."] },
      { name: "Soft Touch Pass", steps: [
        "Put a pillow on the floor 3 steps away.",
        "Pass the ball very gently.",
        "Try to make it stop right at the pillow.",
        "Move the pillow farther after 3 good ones."] },
      { name: "Outside Foot Flick", steps: [
        "Stand with the ball in front of you.",
        "Turn your toes in a little.",
        "Flick the ball with the outside of your foot.",
        "Send it to a wall on your side."] },
      { name: "Back Heel Pass", steps: [
        "Stand with the ball next to your foot.",
        "Step your foot over the ball.",
        "Tap it backward with your heel.",
        "Turn around and get it."] },
      { name: "Look Before You Pass", steps: [
        "Put two targets on different walls.",
        "Stand in the middle with the ball.",
        "Look up and pick a target.",
        "Pass to the one you picked."] },
      { name: "Hallway Bowling", steps: [
        "Stand at one end of a hallway.",
        "Put a shoe at the other end.",
        "Pass the ball straight down the hall.",
        "Try to hit the shoe."] },
      { name: "Trap and Pass", steps: [
        "Pass the ball at a wall.",
        "Trap it under your foot when it comes back.",
        "Look up at your target.",
        "Pass it again."] },
      { name: "Accuracy Ladder", steps: [
        "Put a water bottle 2 steps away.",
        "Pass and hit the bottle.",
        "Move it one step farther.",
        "Keep going until you miss."] },
      { name: "Corner Pass", steps: [
        "Stand facing the corner of a room.",
        "Pass the ball into one wall.",
        "Let it bounce to the other wall and back.",
        "Stop it, then try again."] },
      { name: "10 in a Row", steps: [
        "Stand 3 steps from a wall.",
        "Pass back and forth with the wall.",
        "Count each good pass out loud.",
        "Try to reach 10 without a mistake."] },
      { name: "Under the Chair", steps: [
        "Put a chair 4 steps away.",
        "Keep the ball low on the floor.",
        "Pass it under the chair.",
        "Do not let it touch the chair legs."] },
      { name: "Pass and Move", steps: [
        "Pass the ball at a wall.",
        "Take one side step right away.",
        "Let the ball come back to your new spot.",
        "Pass again and step the other way."] },
      { name: "Sock Ball Toss Pass", steps: [
        "Roll up socks into a ball.",
        "Toss it up a little.",
        "Pass it with the inside of your foot before it lands.",
        "Aim for a basket."] },
      { name: "Silent Target", steps: [
        "Have a family member hold up a pillow.",
        "Watch where they move it.",
        "Pass along the floor to the pillow.",
        "Switch and let them try."] },
      { name: "Pass Through Legs", steps: [
        "Ask someone to stand with their legs wide.",
        "Stand 4 steps away.",
        "Pass the ball through their legs.",
        "Switch places and try again."] },
      { name: "Wall Weave", steps: [
        "Stand sideways to a wall.",
        "Pass with your front foot.",
        "Stop it with your back foot.",
        "Turn around and do the other side."] },
      { name: "Pass and Clap", steps: [
        "Pass the ball at a wall.",
        "Clap your hands once while it rolls.",
        "Stop it when it comes back.",
        "Do 10 in a row."] },
      { name: "Sock Basket Pass", steps: [
        "Put a basket on its side.",
        "Roll up 5 pairs of socks into balls.",
        "Pass each one into the basket with the inside of your foot.",
        "Count how many stay in."] },
      { name: "Book Gate Pass", steps: [
        "Stand two books up to make a narrow gate.",
        "Stand 3 steps away.",
        "Pass through without knocking a book over.",
        "Make the gate smaller after 3 good passes."] },
      { name: "Sitting V Pass", steps: [
        "Sit on the floor across from someone.",
        "Spread your legs out in a V.",
        "Pass the ball back and forth with your feet.",
        "Try to keep it inside the V."] },
      { name: "Straight Line Pass", steps: [
        "Find a straight line like a rug edge or tape.",
        "Pass the ball along the line.",
        "Try to keep it right on the line.",
        "Walk to it and pass it back the other way."] },
    ],
    defending: [
      { name: "Ready Stance", steps: [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees a little.",
        "Get up on your toes.",
        "Hold this stance for 10 seconds."] },
      { name: "Side Shuffle", steps: [
        "Put two shoes 4 steps apart.",
        "Start at one shoe in your ready stance.",
        "Shuffle sideways to the other shoe.",
        "Shuffle back without crossing your feet."] },
      { name: "Backpedal", steps: [
        "Stand at one end of a hallway.",
        "Take small steps backward.",
        "Keep your eyes looking forward.",
        "Stop after 8 steps."] },
      { name: "Quick Feet", steps: [
        "Stand in your ready stance.",
        "Tap your feet fast in place.",
        "When someone claps, hop forward.",
        "Get right back into your stance."] },
      { name: "Mirror Drill", steps: [
        "Face a family member.",
        "Have them shuffle left and right.",
        "Copy every move like a mirror.",
        "Switch who leads after 30 seconds."] },
      { name: "Block Tackle", steps: [
        "Put the ball against a wall so it can't roll.",
        "Step in with the inside of your foot.",
        "Put your foot on the middle of the ball.",
        "Push into it firmly and hold for 3 seconds."] },
      { name: "Toe Poke", steps: [
        "Have someone roll the ball slowly past you.",
        "Wait until it is close.",
        "Reach in with your toe.",
        "Poke the ball away."] },
      { name: "Shoe Slalom Shuffle", steps: [
        "Set 4 shoes in a zigzag.",
        "Start at the first shoe.",
        "Slide sideways to each shoe.",
        "Keep your body low the whole time."] },
      { name: "Ball Watcher", steps: [
        "Have someone do fake moves with the ball.",
        "Do not look at their head or arms.",
        "Watch only the ball.",
        "Move only when the ball moves."] },
      { name: "Block the Roll", steps: [
        "Stand in front of a small goal.",
        "Have someone roll the ball at it.",
        "Move your feet to get in the way.",
        "Stop the ball with your feet."] },
      { name: "Protect the Cup", steps: [
        "Put a plastic cup behind you.",
        "Have someone try to hit it with a rolled ball.",
        "Shuffle to block each roll.",
        "Count how many you stop."] },
      { name: "Turn and Recover", steps: [
        "Stand in your ready stance.",
        "Have someone point left or right.",
        "Turn your hips that way fast.",
        "Take 3 quick steps and come back."] },
      { name: "Stay Low Hold", steps: [
        "Bend your knees like you're sitting in a chair.",
        "Put your arms out a little for balance.",
        "Keep your back straight.",
        "Hold it for 15 seconds."] },
      { name: "Clap Catch Reaction", steps: [
        "Stand in your ready stance.",
        "Have someone drop a ball from their hand.",
        "React when you see it fall.",
        "Trap it with your foot before it rolls away."] },
      { name: "Hallway Close Down", steps: [
        "Put the ball at the end of a hallway.",
        "Walk quickly toward it.",
        "Slow down with tiny steps when close.",
        "Stop in your ready stance next to it."] },
      { name: "Steal the Sock", steps: [
        "Put a rolled sock between you and a family member.",
        "Both stand 3 steps back.",
        "Have a third person yell \"Go!\"",
        "Race to grab it first."] },
      { name: "Show Them Outside", steps: [
        "Have someone walk the ball toward you slowly.",
        "Stand a little to their inside.",
        "Guide them toward the wall.",
        "Keep them away from the middle of the room."] },
      { name: "Shadow Steps", steps: [
        "Have someone walk around the room.",
        "Stay one step behind them.",
        "Copy their turns and stops.",
        "Do it for one minute."] },
      { name: "Talk Like a Defender", steps: [
        "Stand in your ready stance.",
        "Shout \"Ball!\" and shuffle forward.",
        "Shout \"Man on!\" and turn your head.",
        "Shout \"Clear!\" and kick the air."] },
      { name: "Pillow Jockey", steps: [
        "Put a pillow on the floor.",
        "Stand one big step from it in your stance.",
        "Shuffle backward slowly.",
        "Keep your eyes on the pillow the whole time."] },
      { name: "Hop and Hold", steps: [
        "Stand on one foot.",
        "Hop forward a tiny bit.",
        "Land softly and hold still for 3 seconds.",
        "Switch to the other foot."] },
      { name: "Intercept the Roll", steps: [
        "Have two people roll a ball to each other.",
        "Stand between them.",
        "Watch their feet to guess where it goes.",
        "Step in and stop it."] },
      { name: "Wall Clear", steps: [
        "Roll a soft ball toward a wall.",
        "Run after it.",
        "Kick it firmly against the wall.",
        "Get back into your stance."] },
      { name: "Goal-Side Spot", steps: [
        "Put a shoe down as your goal.",
        "Have someone move around the room.",
        "Always stand between them and the shoe.",
        "Move every time they move."] },
      { name: "Header Practice", steps: [
        "Use a balloon or very soft ball.",
        "Have someone toss it gently to you.",
        "Keep your eyes open.",
        "Push it away with your forehead."] },
      { name: "Tape Line Hops", steps: [
        "Put a strip of tape on the floor.",
        "Stand next to it with your feet together.",
        "Hop side to side over the line.",
        "Do 10 quick hops."] },
      { name: "Freeze Defender", steps: [
        "Have someone play music.",
        "Shuffle side to side while it plays.",
        "When it stops, freeze in your ready stance.",
        "Hold still until it starts again."] },
      { name: "Sock Tail Steal", steps: [
        "Tuck a sock in someone's back pocket like a tail.",
        "Get in your ready stance and follow them.",
        "Wait for a good moment.",
        "Grab the sock tail."] },
      { name: "Wall Sit", steps: [
        "Lean your back flat against a wall.",
        "Slide down until your knees are bent.",
        "Keep your feet flat on the floor.",
        "Hold for 15 seconds to build strong legs."] },
      { name: "Pillow Block", steps: [
        "Ask someone to toss pillows gently at you.",
        "Stay in your ready stance.",
        "Block them with your body.",
        "Keep your eyes open the whole time."] },
    ],
  },
  outdoor: {
    shooting: [
      { name: "Penalty Spot Practice", steps: [
        "Put the ball on the penalty spot.",
        "Take 3 small steps back.",
        "Pick a corner of the goal to aim at.",
        "Kick the ball with the inside of your foot toward that corner."] },
      { name: "Laces Power Shot", steps: [
        "Set the ball 10 big steps from the goal.",
        "Point your toes down so your laces face the ball.",
        "Plant your other foot next to the ball.",
        "Strike the middle of the ball with your laces."] },
      { name: "Rolling Ball Shot", steps: [
        "Stand at the edge of the box.",
        "Roll the ball forward a little with your hand.",
        "Jog after it as it rolls.",
        "Shoot it into the goal before it stops."] },
      { name: "Low and Hard", steps: [
        "Place the ball 8 steps from the goal.",
        "Lean your body over the ball a little.",
        "Keep your eyes on the ball as you kick.",
        "Shoot so the ball stays low on the grass."] },
      { name: "Left Foot Only", steps: [
        "Line up 5 balls in front of the goal.",
        "Step up to the first ball.",
        "Shoot using only your left foot.",
        "Repeat until all 5 balls are kicked."] },
      { name: "Right Foot Only", steps: [
        "Line up 5 balls in front of the goal.",
        "Walk up to the first ball.",
        "Shoot using only your right foot.",
        "Count how many you score out of 5."] },
      { name: "Cone Target Shot", steps: [
        "Put a cone inside each corner of the goal.",
        "Stand 8 steps away with a ball.",
        "Aim to knock over one cone.",
        "Switch to the other cone next time."] },
      { name: "Dribble and Shoot", steps: [
        "Start at the halfway line with the ball.",
        "Dribble slowly toward the goal.",
        "Stop dribbling when you reach the box.",
        "Shoot the ball into the net."] },
      { name: "Side Angle Shot", steps: [
        "Set the ball on the side of the box.",
        "Look at the far post.",
        "Use the inside of your foot.",
        "Curl the ball toward the far post."] },
      { name: "Two-Touch Finish", steps: [
        "Stand 10 steps from the goal.",
        "Tap the ball forward with one small touch.",
        "Set your feet behind the ball.",
        "Shoot with your second touch."] },
      { name: "Bounce Shot", steps: [
        "Hold the ball at waist height.",
        "Drop it and let it bounce once.",
        "Watch it come back down.",
        "Kick it toward the goal after the bounce."] },
      { name: "Wall Rebound Shot", steps: [
        "Stand 5 steps from a wall.",
        "Pass the ball softly against the wall.",
        "Let it roll back to you.",
        "Shoot it back at the wall as hard as you can."] },
      { name: "Five-Ball Challenge", steps: [
        "Place 5 balls in a line at the box.",
        "Shoot the first ball.",
        "Move quickly to the next ball.",
        "Try to score all 5 in a row."] },
      { name: "Corner Picker", steps: [
        "Stand in front of the goal with a ball.",
        "Say out loud which corner you will aim at.",
        "Take your shot.",
        "Give yourself a point if it goes in that corner."] },
      { name: "Turn and Shoot", steps: [
        "Stand with your back to the goal.",
        "Have the ball at your feet.",
        "Turn around with one touch.",
        "Shoot right away."] },
      { name: "Volley Starter", steps: [
        "Hold the ball in your hands.",
        "Toss it up just a little bit.",
        "Lift your knee and point your toes.",
        "Kick it before it touches the ground."] },
      { name: "Chip It In", steps: [
        "Put a cone in front of the goal like a goalie.",
        "Stand 8 steps behind the ball.",
        "Kick under the ball with a little scoop.",
        "Make it float over the cone into the goal."] },
      { name: "Run-Up Rocket", steps: [
        "Set the ball 12 steps from the goal.",
        "Walk back 4 steps.",
        "Run up to the ball.",
        "Blast it with your laces."] },
      { name: "Near Post Finish", steps: [
        "Stand at an angle to the goal.",
        "Find the post closest to you.",
        "Use the inside of your foot.",
        "Slot the ball just inside the near post."] },
      { name: "Inside Foot Placement", steps: [
        "Place the ball 6 steps from the goal.",
        "Open your foot like a golf club.",
        "Swing your leg gently.",
        "Place the ball carefully into the net."] },
      { name: "Stop and Shoot", steps: [
        "Dribble the ball forward.",
        "Stop it dead with the bottom of your foot.",
        "Step back and line up.",
        "Shoot from where the ball stopped."] },
      { name: "Gate Shot", steps: [
        "Set up 2 cones like a small gate.",
        "Stand 5 steps away.",
        "Shoot the ball through the gate.",
        "Move back one step each time you score."] },
      { name: "Penalty Pressure", steps: [
        "Put the ball on the penalty spot.",
        "Take a deep breath.",
        "Pick your spot and do not change your mind.",
        "Shoot with confidence."] },
      { name: "Swap Feet Shooting", steps: [
        "Line up 6 balls.",
        "Shoot the first ball with your right foot.",
        "Shoot the next ball with your left foot.",
        "Keep swapping feet until all balls are kicked."] },
      { name: "Tap-In Practice", steps: [
        "Stand 2 steps from the goal.",
        "Roll the ball across in front of you.",
        "Step toward it.",
        "Tap it into the net."] },
      { name: "Through the Legs Goal", steps: [
        "Stand 6 steps from the goal.",
        "Pretend a defender is in front of you.",
        "Aim low and straight.",
        "Shoot like you are going through their legs."] },
      { name: "Pass-Back Shot", steps: [
        "Kick the ball against a wall or rebounder.",
        "Get your body ready as it comes back.",
        "Let it roll to your strong foot.",
        "Shoot it at the target with one touch."] },
      { name: "Score in 10", steps: [
        "Get 10 balls ready.",
        "Shoot one ball at a time.",
        "Count your goals out loud.",
        "Try to beat your score next time."] },
      { name: "Edge of the Box", steps: [
        "Place the ball on the edge of the box.",
        "Look up at the goal before you shoot.",
        "Keep your head over the ball.",
        "Shoot hard and follow through."] },
      { name: "Celebration Finish", steps: [
        "Dribble toward the goal.",
        "Pick a corner.",
        "Shoot and score.",
        "Do your best goal celebration."] },
    ],
    passing: [
      { name: "Wall Passes", steps: [
        "Stand 5 steps from a wall.",
        "Pass the ball against the wall with your inside foot.",
        "Stop the ball when it comes back.",
        "Do 10 passes in a row."] },
      { name: "Partner Pass", steps: [
        "Stand across from a partner.",
        "Pass the ball to their feet.",
        "Watch them pass it back.",
        "Stop it with one touch."] },
      { name: "Cone Gate Pass", steps: [
        "Set up 2 cones as a gate.",
        "Stand 5 steps from the gate.",
        "Pass the ball through the middle.",
        "Go get it and try again from the other side."] },
      { name: "Left Foot Passes", steps: [
        "Stand in front of a wall.",
        "Pass only with your left foot.",
        "Trap the ball with your left foot too.",
        "Do it 10 times."] },
      { name: "Right Foot Passes", steps: [
        "Face a partner or a wall.",
        "Pass only with your right foot.",
        "Keep the ball on the ground.",
        "Count how many good passes you make."] },
      { name: "One-Touch Pass", steps: [
        "Face a wall 4 steps away.",
        "Pass the ball at the wall.",
        "When it comes back, do not stop it.",
        "Pass it right back with one touch."] },
      { name: "Long Pass", steps: [
        "Set the ball 20 steps from a target.",
        "Run up at a little angle.",
        "Kick the bottom of the ball with your laces.",
        "Make it fly to the target."] },
      { name: "Pass and Move", steps: [
        "Pass the ball to a partner.",
        "Jog to a new spot.",
        "Call for the ball.",
        "Get the pass back in your new spot."] },
      { name: "Triangle Passing", steps: [
        "Set up 3 cones in a triangle.",
        "Stand at one cone.",
        "Pass to the next cone and run after the ball.",
        "Keep going around the triangle."] },
      { name: "Target Cone Pass", steps: [
        "Put a cone 8 steps away.",
        "Aim at the cone.",
        "Pass the ball softly.",
        "Try to hit the cone."] },
      { name: "Soft Pass", steps: [
        "Stand close to a partner.",
        "Pass the ball very gently.",
        "Make it stop right at their feet.",
        "Switch and let them pass to you."] },
      { name: "Ankle Lock Pass", steps: [
        "Turn your foot sideways.",
        "Keep your ankle stiff like a board.",
        "Hit the middle of the ball.",
        "Watch it roll straight."] },
      { name: "Pass Through Legs", steps: [
        "Ask a partner to stand with legs wide.",
        "Stand 5 steps away.",
        "Pass the ball through their legs.",
        "Switch places and try again."] },
      { name: "Two-Touch Passing", steps: [
        "Face a wall or partner.",
        "Stop the ball with your first touch.",
        "Pass it with your second touch.",
        "Keep a steady rhythm."] },
      { name: "Moving Target Pass", steps: [
        "Have a partner walk side to side.",
        "Watch where they are going.",
        "Pass the ball in front of them.",
        "Let them run onto the ball."] },
      { name: "Bounce Pass", steps: [
        "Stand 6 steps from a wall.",
        "Pass the ball hard enough to bounce back.",
        "Let it come back to you.",
        "Pass it again with the other foot."] },
      { name: "Back Heel Pass", steps: [
        "Stand with the ball beside you.",
        "Lift your foot over the ball.",
        "Tap it backward with your heel.",
        "Try to send it to a partner behind you."] },
      { name: "Chip Pass", steps: [
        "Put a cone between you and a target.",
        "Lean back a little.",
        "Scoop under the ball.",
        "Lift it over the cone to the target."] },
      { name: "Square Passing", steps: [
        "Set up 4 cones in a square.",
        "Put a friend or a ball at each corner.",
        "Pass around the square one way.",
        "Then pass around the other way."] },
      { name: "Look Before You Pass", steps: [
        "Stand with the ball at your feet.",
        "Look up and find your partner.",
        "Point to where you will pass.",
        "Make the pass."] },
      { name: "Pass on the Run", steps: [
        "Jog next to a partner.",
        "Dribble the ball as you move.",
        "Pass it to them while still jogging.",
        "Let them pass it back to you."] },
      { name: "10 in a Row", steps: [
        "Stand across from a partner.",
        "Pass back and forth.",
        "Count each good pass out loud.",
        "Try to get to 10 without a mistake."] },
      { name: "Outside Foot Pass", steps: [
        "Stand with the ball in front of you.",
        "Turn your toes in a little.",
        "Flick the ball with the outside of your foot.",
        "Send it to a target on your side."] },
      { name: "Through Ball", steps: [
        "Have a partner start running.",
        "Wait for them to get a few steps ahead.",
        "Pass the ball past them into open space.",
        "Let them chase it down."] },
      { name: "Give and Go", steps: [
        "Pass to a partner.",
        "Run forward right away.",
        "Have your partner pass it back to you.",
        "Collect the ball as you run."] },
      { name: "Cross the Ball", steps: [
        "Dribble down the side of the field.",
        "Stop near the corner.",
        "Look at the middle of the box.",
        "Kick the ball into the middle."] },
      { name: "Pass Across a Line", steps: [
        "Lay down a line with cones.",
        "Stand on one side of the line.",
        "Pass to a partner on the other side.",
        "Step back one step after each good pass."] },
      { name: "Trap and Pass", steps: [
        "Have someone roll the ball to you.",
        "Trap it under your foot.",
        "Look up for a target.",
        "Pass it to the target."] },
      { name: "Silent Passing", steps: [
        "Stand with 2 or 3 friends.",
        "Pass the ball around without talking.",
        "Use eye contact to show who gets it.",
        "Keep the ball moving."] },
      { name: "Accuracy Ladder", steps: [
        "Put a cone 3 steps away.",
        "Pass and hit the cone.",
        "Move the cone one step farther.",
        "Keep going until you miss."] },
    ],
    defending: [
      { name: "Ready Stance", steps: [
        "Stand with your feet shoulder-width apart.",
        "Bend your knees a little.",
        "Stay on your toes.",
        "Hold this stance for 10 seconds."] },
      { name: "Side Shuffle", steps: [
        "Put 2 cones 5 steps apart.",
        "Stand at one cone in your ready stance.",
        "Shuffle sideways to the other cone.",
        "Shuffle back without crossing your feet."] },
      { name: "Backpedal", steps: [
        "Stand on a line facing forward.",
        "Take small steps backward.",
        "Keep your eyes looking forward.",
        "Stop after 10 steps."] },
      { name: "Block Tackle", steps: [
        "Have a partner stand still with the ball.",
        "Step in with the inside of your foot.",
        "Put your foot on the middle of the ball.",
        "Push through the ball firmly."] },
      { name: "Jockey the Attacker", steps: [
        "Have a partner dribble slowly at you.",
        "Stay one big step away from them.",
        "Move backward as they move forward.",
        "Do not dive in for the ball."] },
      { name: "Poke Tackle", steps: [
        "Let a partner dribble near you.",
        "Wait until the ball is a little far from them.",
        "Reach in with your toe.",
        "Poke the ball away."] },
      { name: "Shadow Defending", steps: [
        "Have a partner jog in different directions.",
        "Stay close to them.",
        "Copy every move they make.",
        "Keep your body between them and a goal."] },
      { name: "Clear the Ball", steps: [
        "Have someone roll a ball toward you.",
        "Run to meet it.",
        "Kick it high and far with your laces.",
        "Send it away from your goal."] },
      { name: "Header Clear", steps: [
        "Have a partner toss the ball softly up.",
        "Keep your eyes open.",
        "Hit the ball with your forehead.",
        "Push it up and away."] },
      { name: "Block the Shot", steps: [
        "Stand between a partner and the goal.",
        "Have them get ready to shoot slowly.",
        "Turn your body sideways.",
        "Block the ball with your legs."] },
      { name: "Cone Tag Defending", steps: [
        "Set up a small square with 4 cones.",
        "Have a partner dribble inside it.",
        "Follow them closely.",
        "Try to touch the ball out of the square."] },
      { name: "Turn and Chase", steps: [
        "Stand facing a partner.",
        "Let them dribble past you.",
        "Turn your hips quickly.",
        "Chase them and get back in front."] },
      { name: "Stay on Your Feet", steps: [
        "Have a partner dribble toward you.",
        "Keep your knees bent.",
        "Do not slide or fall down.",
        "Wait for your chance to take the ball."] },
      { name: "Show Them Outside", steps: [
        "Have a partner dribble at you.",
        "Stand a little to their inside.",
        "Make them go toward the sideline.",
        "Keep them away from the middle."] },
      { name: "Mark Your Player", steps: [
        "Pick a partner to guard.",
        "Stay close to them while they move.",
        "Keep watching them and the ball.",
        "Stop them from getting a pass."] },
      { name: "Intercept the Pass", steps: [
        "Stand between 2 friends who are passing.",
        "Watch their eyes and feet.",
        "Guess where the pass will go.",
        "Step in and steal it."] },
      { name: "Recovery Run", steps: [
        "Start 5 steps behind a partner.",
        "Let them dribble toward a goal.",
        "Sprint to catch up.",
        "Get between them and the goal."] },
      { name: "Close Down Fast", steps: [
        "Stand 10 steps from a partner with the ball.",
        "Sprint toward them.",
        "Slow down with tiny steps when close.",
        "Stop in your ready stance."] },
      { name: "1v1 Box Battle", steps: [
        "Make a small box with cones.",
        "Have a partner try to dribble across.",
        "Stay in front of them.",
        "Stop them from reaching the other side."] },
      { name: "Win It Back", steps: [
        "Play keep-away with a partner.",
        "When you lose the ball, react fast.",
        "Chase right away.",
        "Try to win it back in 5 seconds."] },
      { name: "Goal-Side Position", steps: [
        "Put a cone down as a goal.",
        "Have a partner move around.",
        "Always stand between them and the cone.",
        "Move as they move."] },
      { name: "Shield the Goal", steps: [
        "Stand in front of a small goal.",
        "Have a partner try to roll the ball in.",
        "Move your feet to stay in the way.",
        "Stop the ball with your feet."] },
      { name: "Mirror Drill", steps: [
        "Face a partner.",
        "Have them shuffle left and right.",
        "Copy their moves like a mirror.",
        "Switch who leads after 30 seconds."] },
      { name: "Slide Steps", steps: [
        "Set up 4 cones in a zigzag.",
        "Start at the first cone.",
        "Slide sideways to each cone.",
        "Keep your body low the whole time."] },
      { name: "Pressure and Cover", steps: [
        "Work with a teammate.",
        "One of you goes to the ball.",
        "The other stands behind to help.",
        "Switch jobs after each try."] },
      { name: "Talk to Your Team", steps: [
        "Play with a teammate.",
        "Shout \"I got ball!\" when you go to it.",
        "Shout \"Man on!\" to warn your teammate.",
        "Keep talking the whole time."] },
      { name: "Quick Feet Defender", steps: [
        "Stand in your ready stance.",
        "Tap your feet fast in place.",
        "When someone claps, jump forward.",
        "Get back into your stance."] },
      { name: "Steal the Bacon", steps: [
        "Put a ball between you and a partner.",
        "Stand 5 steps away on each side.",
        "Have someone yell \"Go!\"",
        "Race to get the ball first."] },
      { name: "Protect the Cone", steps: [
        "Put a cone behind you.",
        "Have a partner try to hit it with a pass.",
        "Move to block each pass.",
        "Count how many you stop."] },
      { name: "Ball Watcher", steps: [
        "Have a partner do fake moves with the ball.",
        "Do not look at their head or arms.",
        "Watch only the ball.",
        "React only when the ball moves."] },
    ],
  },
};
