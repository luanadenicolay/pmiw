// Amparo Alonso
// Luana De Nicolay
// https://youtu.be/Eq46vxt8Mqo?si=f0lzRMQbhDnYFIKr
let imagenes = [];
let texto = [];
let estado, sonido, index;

function preload () {
  for (let i=0; i<16; i++) {
    imagenes[i] = loadImage ("data/imagen"+i+".jpg");
  }
  flecha = loadImage ("data/flechader.png");
  flecha2 = loadImage ("data/flechaizq.png");
  texto = loadStrings ("data/cuento.txt");
  sonido = loadSound ("data/policia.mp3");
}

function setup() {
  createCanvas (640, 480);
  for (let i=0; i<16; i++) {
    imagenes[i].resize(640, 480);
  }

  estado="portada";
}

function draw() {
  background (0);

  if (estado === "portada") {
    image (imagenes[0], 0, 0);
    image(flecha, 590, 240, 50, 50);
    botones (80, 400, 150, 50, "creditos", 125, 430);        // creditos
  } else if (estado === "creditos") {
    image (imagenes[10], 0, 0);
    image(flecha2, 15, 240, 50, 50);
  } else if (estado === "img1") {
    image (imagenes[1], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (1, 60, 10, 500, 60);
  } else if (estado === "img2") {
    image (imagenes[2], 0, 0);
    cuento (2, 60, 10, 500, 60);
    botones (80, 360, 150, 50, "darse por vencido", 90, 390);        // opcion 1
    botones(450, 360, 150, 50, "hacer nuevo grafitti", 460, 390);        // opcion 2
  } else if (estado === "img3") {
    image (imagenes[3], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (3, 60, 10, 500, 60);
  } else if (estado === "img4") {
    image (imagenes[4], 0, 0);
    botones (80, 360, 150, 50, "ignorarlo", 125, 390);        // opcion 1
    botones(450, 360, 150, 50, "descubrir quien es", 460, 390);        // opcion 2
    cuento (4, 60, 10, 500, 60);
  } else if (estado === "img5") {
    image (imagenes[5], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (5, 60, 10, 500, 60);
  } else if (estado === "img6") {
    image (imagenes[6], 0, 0);
    botones (80, 360, 150, 50, 80, "seguir esperando", 95, 390);        // opcion 1
    botones(450, 360, 150, 50, "volver mañana", 470, 390);        // opcion 2
    cuento (7, 60, 10, 500, 60);
  } else if (estado === "img7") {
    image (imagenes[7], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (6, 60, 10, 500, 60);
  } else if (estado === "img8") {
    image (imagenes[8], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (8, 60, 10, 500, 60);
  } else if (estado === "img9") {
    image (imagenes[9], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (9, 60, 10, 500, 60);
  } else if (estado === "img12") {
    image (imagenes[12], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (10, 60, 10, 500, 60);
  } else if (estado === "img13") {
    image (imagenes[13], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (11, 60, 10, 500, 60);
  } else if (estado === "img14") {
    image (imagenes[14], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (12, 60, 10, 500, 60);
  } else if (estado === "img15") {
    image (imagenes[15], 0, 0);
    flechas (15, 590, 240, 50, 50);
    cuento (13, 60, 10, 500, 60);
  } else if (estado === "juego") {
    image (imagenes[11], 0, 0);
    botones (80, 360, 150, 50, "ganaste", 95, 390);        // opcion 1
    botones(450, 360, 150, 50, "perdiste", 470, 390);        // opcion 2
  }
}

function flechas (x, x2, y, t) {
  image (flecha2, x, y, t, t);
  image (flecha, x2, y, t, t);
}

function cuento(indice, px, py, anc, alt, t) {
  textSize(15);
  noStroke();
  fill (250);
  rect (px, py, anc, alt);
  fill (0);
  text (texto[indice], px, py, anc, alt);
}

function botones(x, y, an, al, string, tx, ty ) {
  noStroke();
  fill (255);
  rect (x, y, an, al, al/4);
  textSize (15);
  fill(0);
  text (string, tx, ty);
}

function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX <x+ancho && mouseY > y && mouseY < y+alto;
}

function mousePressed () {

  if (estado === "portada") {
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img1";
    }
    if (detectarBoton(80, 400, 150, 50)) {
      estado = "creditos";
    }
  } else if (estado === "creditos") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="portada";
    }
  } else if (estado === "img1") {
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img2";
    }
    if (detectarBoton(15, 240, 50, 50)) {
      estado="portada";
    }
  } else if (estado === "img2") {
    if (detectarBoton(450, 360, 150, 50)) {
      estado="img3";
    }
    if (detectarBoton(80, 360, 100, 50)) {
      estado="portada";
    }
  } else if (estado === "img3") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img2";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img4";
    }
  } else if (estado === "img4") {
    if (detectarBoton(80, 360, 150, 50)) {
      estado="img5";
    }
    if (detectarBoton(450, 360, 150, 50)) {
      estado="img15";
    }
  } else if (estado === "img15") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img4";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img6";
    }
  } else if (estado === "img5") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img4";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img7";
      sonido.play();
    }
  } else if (estado === "img7") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img5";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      sonido.stop();
      estado="portada";
    }
  } else if (estado === "img6") {
    if (detectarBoton(80, 360, 150, 50)) {
      estado="img9";
    }
    if (detectarBoton(450, 360, 100, 50)) {
      estado="img8";
      sonido.play();
    }
  } else if (estado === "img8") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img6";
    }
    if (detectarBoton(590, 240, 50, 50)) {
      sonido.stop();
      estado="juego";
    }
  } else if (estado === "img9") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img6";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="img12";
    }
  } else if (estado === "img12") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="img9";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="portada";
    }
  } else if (estado === "juego") {
    if (detectarBoton(80, 360, 150, 50)) {
      estado="img13";
    }
    if (detectarBoton(450, 360, 150, 50)) {
      estado="img14";
      sonido.play();
    }
  } else if (estado === "img13") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="juego";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="portada";
    }
  } else if (estado === "img14") {
    if (detectarBoton(15, 240, 50, 50)) {
      estado="juego";
    }
    if (detectarBoton(600, 245, 30, 40)) {
      estado="portada";
      sonido.stop();
    }
  }
}
