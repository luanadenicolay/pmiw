// Amparo Alonso
// Luana De Nicolay
//https://www.youtube.com/watch?v=t9h6FsvsvWI

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
    botones (80, 400, 150, 50);        // creditos
    textSize (15);
    fill(0);
    text ("creditos", 125, 430);
  } else if (estado === "creditos") {
    image (imagenes[10], 0, 0);
    image(flecha2, 15, 240, 50, 50);
  } else if (estado === "img1") {
    image (imagenes[1], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(1);
  } else if (estado === "img2") {
    image (imagenes[2], 0, 0);
    cuento(2);
    botones (80, 360, 150, 50);        // opcion 1
    textSize (15);
    fill(0);
    text ("darse por vencido", 90, 390);

    botones(450, 360, 150, 50);        // opcion 2
    textSize (15);
    fill(0);
    text ("hacer nuevo grafitti", 460, 390);
  } else if (estado === "img3") {
    image (imagenes[3], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(3);
  } else if (estado === "img4") {
    image (imagenes[4], 0, 0);
    botones (80, 360, 150, 50);        // opcion 1
    textSize (15);
    fill(0);
    text ("ignorarlo", 125, 390);

    botones(450, 360, 150, 50);        // opcion 2
    textSize (15);
    fill(0);
    text ("descubrir quien es", 460, 390);
    cuento(4);
  } else if (estado === "img5") {
    image (imagenes[5], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(5);
  } else if (estado === "img6") {
    image (imagenes[6], 0, 0);
    botones (80, 360, 150, 50);        // opcion 1
    textSize (15);
    fill(0);
    text ("seguir esperando", 95, 390);

    botones(450, 360, 150, 50);        // opcion 2
    textSize (15);
    fill(0);
    text ("volver mañana", 470, 390);
    cuento(7);
  } else if (estado === "img7") {
    image (imagenes[7], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(6);
  } else if (estado === "img8") {
    image (imagenes[8], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(8);
  } else if (estado === "img9") {
    image (imagenes[9], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(9);
  } else if (estado === "img12") {
    image (imagenes[12], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(10);
  } else if (estado === "img13") {
    image (imagenes[13], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(11);
  } else if (estado === "img14") {
    image (imagenes[14], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(12);
  }else if (estado === "img15") {
    image (imagenes[15], 0, 0);
    image(flecha, 590, 240, 50, 50);
    image(flecha2, 15, 240, 50, 50);
    cuento(13);
  } else if (estado === "juego") {
    image (imagenes[11], 0, 0);
    botones (80, 360, 150, 50);        // opcion 1
    textSize (15);
    fill(0);
    text ("ganaste", 95, 390);

    botones(450, 360, 150, 50);        // opcion 2
    textSize (15);
    fill(0);
    text ("perdiste", 470, 390);
  }
}

function cuento(indice) {
  textSize(15);
  noStroke();
  fill (250);
  rect (60, 10, 500, 80);
  fill (0);
  text (texto[indice], 65, 20, 500);
}

function botones(x, y, an, al) {
  noStroke();
  fill (255);
  rect (x, y, an, al, al/4);
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
