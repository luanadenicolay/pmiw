class Juego {

  constructor() {
    this.personaje = new Personaje(width/2, height/2, 20);
    this.objetivos = [];
    for (let i=0; i<20; i++) {
      this.objetivos[i] = new Objetivos (random(0, width), 0, 80);
    }
    this.puntos = 0;
    this.estado = "pantalla inicio";
    this.botones = new Botones ();
  }

  mostrar() {
    this.personaje.mostrar();
    this.colision();
    this.contador();
    this.resultados();

    for (let i=0; i<5; i++) {
      this.objetivos[i].mostrar();
      this.objetivos[i].movimiento();
    }
  }
  

  reiniciarJuego() {
    this.personaje = new Personaje(width / 2, height / 2, 20); 
    this.objetivos = [];
    for (let i = 0; i < 20; i++) {
      this.objetivos.push(new Objetivos(random(0, width), 0, 80)); 
    }
    this.puntos = 0;
    this.vidas = 3; 
    this.estado = "pantalla inicio"; 
    
  }
  
 detectarBoton(){
    
   if (this.botones.mouse(220, 250, 200, 50)) {
      this.estado = "juego"; 
    }
    if (this.botones.mouse(220, 360, 200, 50)) {
      this.estado = "creditos"; 
  }
 }
  moverPersonajeD(keyCode) {
    this.personaje.moverD();
  }
  moverPersonajeI(keyCode) {
    this.personaje.moverI();
  }

  resultados () {
    if (this.puntos >= 10) {
      this.estado = "ganaste";
    }
  }

  contador() {
    image (imagenes[6], 550, 10, 50, 50);
    textSize (30);
    fill (255);
    text(this.puntos, 600, 50);
  }

  colision() {
    for (let i = 0; i < this.objetivos.length; i++) {
      let distancia = dist(this.personaje.x, this.personaje.y, this.objetivos[i].posX, this.objetivos[i].posY);

      if (distancia < (this.objetivos[i].tam/2 )) {
        //       sonido.play;
        this.puntos++;
        this.objetivos[i].reset();
      }
    }
  }
}
