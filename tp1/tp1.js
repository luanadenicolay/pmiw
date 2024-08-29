// Luana De Nicolay
// Comision 1
// https://youtu.be/XUOMXwt9awk
let imagen;
let cant;
let tam;

function preload () {
  imagen = loadImage ('data/imagen.jpeg');
}

function setup() {
  createCanvas (800, 400);
  cant = 8;
  tam = width/2/cant;
}
function draw() {
  background (0);
  image (imagen, 0, 0, 400, 400);
  translate (400, 0);

  for ( let i=0; i<=8; i++) {
    for ( let j=0; j<=8; j++) {
      noStroke();
      dibujoCuadrado(i, j);
    }
  }

  if (keyIsPressed) {
    if (key === 't') {
      tam = tam+0.1;
    } else if (key === 'r') {
      reinciarVar ();
    }
  }
}
