

// Animation intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

// Initial color values for background
let g = 0; // Green component
let b = 0; // Blue component

// Initial values for sun and moon
let sunY = 540;
let moonY = 100;

// Counter variable
let counter = 0;

// Additional units for snow speed (increase or decrease with arrow keys)
let addUnits = 0;

// Snowflakes array for snow animation
let snowflakes = [];
for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * cnv.width, // initial position x-axis
    y: Math.random() * cnv.height, // initial position y-axis
    r: Math.random() * 5 + 2, // snowflake size
    speedY: 0.5 + Math.random() * 1.5 + addUnits, // vertical speed (impacted by addUnits)
    dx: Math.random() * 2 - 1, // horizontal drift
  });
}

requestAnimationFrame(loop);

function loop() {
  // Background scene
  counter++;

  if (counter <= 890) {
    // Getting lighter
    g += 0.2;
    b += 0.2 * (255 / 178);
    sunY -= 0.55;
    moonY += 0.55;
  } else if (counter > 890 && counter < 1780) {
    // Getting darker
    g -= 0.2;
    b -= 0.2 * (255 / 178);
    sunY += 0.55;
    moonY -= 0.55;
  } else if (counter == 1780) {
    // Starting again
    counter = 0;
  }

  // Draw a background with the updated color
  ctx.fillStyle = `rgb(0, ${g}, ${b})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw the sun
  fill("yellow");
  circle(800, sunY, 40, "fill");

  // Draw the moon
  fill("rgba(200, 215, 255, 1)");
  circle(200, moonY, 40, "fill");



  // Drawing without animation (background, mountains, etc.)
  fill("rgba(225, 236, 255, 1)");
  rect(0, 420, cnv.width, cnv.height, "fill");

  // Mountains
  fill("rgba(170, 183, 204, 1)");
  triangle(0, 420, 40, 420, 20, 380, 0, 420, "fill");

  fill("white");
  triangle(12, 395, 30, 395, 20, 380, 12, 395, "fill");

  fill("rgba(170, 183, 204, 1)");
  triangle(20, 420, 90, 420, 50, 320, 20, 420, "fill");

  fill("white");
  triangle(44, 340, 58, 340, 51, 320, 44, 340, "fill");

  fill("rgba(170, 183, 204, 1)");
  triangle(80, 420, 230, 420, 155, 220, 80, 420, "fill");

  fill("white");
  triangle(115, 330, 195, 330, 155, 220, 115, 330, "fill");

  fill("rgba(170, 183, 204, 1)");
  triangle(220, 420, 670, 420, 470, 320, 220, 420, "fill");

  fill("white");
  triangle(348, 370, 570, 370, 470, 320, 348, 370, "fill");

  fill("rgba(170, 183, 204, 1)");
  triangle(630, 420, 720, 420, 675, 250, 630, 420, "fill");

  fill("white");
  triangle(638, 390, 712, 390, 675, 250, 638, 390, "fill");

  // Christmas tree
  fill("rgba(150, 224, 255, 1)");
  ellipse(190, 520, 70, 120, 80.1, "fill");

  fill("rgba(91, 51, 29, 1)");
  rect(240, 520, 20, 30, "fill");

  fill("rgba(0, 45, 160, 1)");
  triangle(180, 430, 320, 430, 250, 380, 180, 430, "fill");

  fill("rgba(0, 45, 160, 1)");
  triangle(200, 400, 300, 400, 250, 350, 200, 400, "fill");

  fill("rgba(0, 45, 160, 1)");
  triangle(160, 460, 340, 460, 250, 410, 160, 460, "fill");

  fill("rgba(0, 45, 160, 1)");
  triangle(140, 490, 360, 490, 250, 440, 140, 490, "fill");

  fill("rgba(0, 45, 160, 1)");
  triangle(120, 520, 380, 520, 250, 470, 120, 520, "fill");

  fill("white");
  triangle(220, 380, 280, 380, 250, 350, 220, 380, "fill");

  // Christmas tree polygon
  let points1 = [
    { x: 680, y: 425 },
    { x: 920, y: 435 },
    { x: 960, y: 460 },
    { x: 820, y: 540 },
    { x: 780, y: 480 },
  ];

  fill("rgba(154, 191, 255, 1)");
  polygon(points1, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(800, 300, 830, 300, 815, 270, 800, 300, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(780, 330, 850, 330, 815, 290, 780, 330, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(760, 360, 870, 360, 815, 310, 760, 360, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(740, 390, 890, 390, 815, 330, 740, 390, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(720, 420, 910, 420, 815, 350, 720, 420, "fill");

  fill("rgba(0, 90, 41, 1)");
  triangle(700, 450, 930, 450, 815, 370, 700, 450, "fill");

  fill("rgba(91, 51, 29, 1)");
  rect(805, 450, 20, 30, "fill");

  // Draw the snowflakes (foreground)
  for (let i = 0; i < snowflakes.length; i++) {
    let snowflake = snowflakes[i];

    // Update the modified speed of flakes
    snowflake.y += snowflake.speedY;
    snowflake.x += snowflake.dx;

    // Reset snowflake if it goes off screen
    if (snowflake.y > cnv.height + snowflake.r) {
      snowflake.y = 0 - snowflake.r; // Start from top again
      snowflake.x = Math.random() * cnv.width; // Random x-position
    }

    // Draw the snowflake
    fill("white");
    circle(snowflake.x, snowflake.y, snowflake.r, "fill");
  }

  // Request next animation frame
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.key === "ArrowUp") {
    // Increase speed with up arrow
    addUnits += 0.1; // Increase snow speed
    // Upper speed limit
    if (addUnits >= 8) {
      addUnits = 8;
    }
    updateSnowflakeSpeed();
  } else if (event.key === "ArrowDown") {
    // Decrease speed with down arrow
    addUnits -= 0.1; // Decrease snow speed
    // Lower speed limit
    if (addUnits <= 0) {
      addUnits = 0.01;
    }
    updateSnowflakeSpeed();
  } else if (event.key === "ArrowRight") {
    // Add more snowflakes with right arrow
    addSnowflakes(10); // Add 10 new snowflakes
  } else if (event.key === "ArrowLeft") {
    reduceSnowflakes(10);
  }
}

function updateSnowflakeSpeed() {
  // Update snowflakes' speed according to addUnits
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].speedY = 0.5 + Math.random() * 1.5 + addUnits; // Update each snowflake's speed
  }
}

function addSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    // Add new snowflakes with random properties
    snowflakes.push({
      x: Math.random() * cnv.width, // Random position x-axis
      y: Math.random() * cnv.height, // Random position y-axis
      r: Math.random() * 5 + 2, // Random size
      speedY: 0.5 + Math.random() * 1.5 + addUnits, // Random speed (affected by addUnits)
      dx: Math.random() * 2 - 1, // Random horizontal drift
    });
  }
}

function reduceSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.pop();
  }
}
