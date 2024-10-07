// Luana De Nicolay
// Amparo Alonso

let imagenes = [];
let texto = [];
let estado, index;

function preload () {
  for (let i=0; i<7; i++) {
    imagenes[i] = loadImage ("data/imagen"+i+".jpg");
  }
  texto = loadStrings ("data/cuento.txt");
}

function setup() {
  createCanvas (640, 480);
  textSize (15);
  index=0;
  estado=0;


  for (let i=0; i<7; i++) {
    imagenes[i].resize(640, 480);
  }
}

function draw() {
  background (0);
  image (imagenes[index], 0, 0);

  if (index>=1) {
    noStroke();
    fill (200);
    rect (45, 10, 500, 80);
    fill (0);
    text (texto[index], 50, 20, 500);
  }

  if (estado===0) {
    if (index<7) {
      estado++;
    } else {
      estado=0;
    }
  }
}

function mousePressed () {
  estado++;
  index++;
  if (index>=7) {
    index=0;
  }
}
