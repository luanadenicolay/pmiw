// Alonso Amparo
// De Nicolay Luana
// https://youtu.be/NVOVfQL6gfA?si=PdOHcOV-dQk2sFd5

let objJuego;
let imagenes = [];
let sonido;
let tiempoInicio;
let limiteTiempo = 30000;

function preload() {
  for ( let i=0; i<10; i++) {
    imagenes [i] = loadImage("data/imagen"+i+".png");
  }
  sonido = loadSound ('data/policia.mp3');
}

function setup() {
  createCanvas (640, 480);
  objJuego = new Juego();
}

function draw() {
  background (0);
  if (objJuego.estado === "pantalla inicio") {
    image (imagenes [0], 0, 0, width, height);
    objJuego.botones.botonesInicio();
    sonido.stop();
  } else if (objJuego.estado === "instrucciones") {
    image (imagenes [9], 0, 0, width, height);
    textSize(20);
    fill(255);
    text ("presiona enter para ccomenzar el juego", 180, 400);
  } else if (objJuego.estado === "ganaste") {
    image (imagenes[2], 0, 0);
    text ("presiona 'r' para reiniciar el juego", 150, 320);
  } else if (objJuego.estado === "perdiste") {
    sonido.play();
    image (imagenes [4], 0, 0);
    text ("presiona 'r' para reiniciar el juego", 150, 320);
  } else if (objJuego.estado === "creditos") {
    image (imagenes [7], 0, 0);
    image (imagenes [8], 15, 240, 50, 50);
  } else if (objJuego.estado === "juego") {
    image (imagenes [3], 0, 0);
    objJuego.mostrar();
    if (!tiempoInicio) {
      tiempoInicio = millis();
    }
    let tiempoTranscurrido = millis() - tiempoInicio;
    textSize(25);
    text("Tiempo: " + floor((limiteTiempo - tiempoTranscurrido) / 1000), 500, 100);

    if (tiempoTranscurrido >= limiteTiempo) {
      objJuego.estado = "perdiste";
    }
  }
}

function mousePressed() {
  if (objJuego.estado === "pantalla inicio") {

    if (objJuego.botones.mouse(220, 340, 300, 300)) {
      objJuego.estado = "instrucciones";
    }

    if (objJuego.botones.mouse(220, 360, 200, 200)) {
      objJuego.estado = "creditos";
    }
  } else if (objJuego.estado === "creditos") {
    if (objJuego.botones.mouse(15, 240, 50, 50)) {
      objJuego.estado="pantalla inicio";
    }
  }
}

function keyPressed() {
  if (objJuego.estado === "instrucciones" && keyCode === ENTER) {
    objJuego.estado = "juego";
  } else if (objJuego.estado === "juego") {
    if (keyCode === RIGHT_ARROW) {
      objJuego.moverPersonajeD();
    } else if (keyCode === LEFT_ARROW) {
      objJuego.moverPersonajeI();
    }
  } else if ((objJuego.estado === "ganaste" || objJuego.estado === "perdiste") && key === 'r') {
    objJuego.reiniciarJuego();
  }
}
