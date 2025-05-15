let song;
let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let gameOver = false; // Variable para saber si se perdió

function preload() {
  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
  song = loadSound('fondo.mp3');
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();

  if (song && song.isLoaded()) {
    song.setLoop(true); 
    song.play();
  } else {
    console.error("La canción no se cargó correctamente");
  }
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  background(bImg);

  if (!gameOver && random(1) < 0.005) {
    trains.push(new Train());
  }

  for (let t of trains) {
    t.move();
    t.show();

    if (unicorn.hits(t)) {
      console.log('game over');
      gameOver = true;
      noLoop(); // Detiene el juego
    }
  }

  unicorn.show();
  unicorn.move();

  if (gameOver) {
    fill(255); // Color blanco
    textAlign(CENTER, CENTER);
    textSize(64);
    text("Fck Spaiiiiiin .l. ", width / 2, height / 2);
  }
}
