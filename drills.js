// My Soccer Drills — 30 easy drills per category, 4 steps each.
const DRILLS = {
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
};
