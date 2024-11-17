class Botones {

  constructor(bx, by, tam) {
    bx = bx;
    by = by;
    tam = tam;
  }

  botonesInicio(bx, by, tam) {
    // Botón "COMENZAR"
    fill(200);
    rect(this.bx, this.by, this.tam, this.tam);
    // Botón "CRÉDITOS"
    fill(200);
    rect(this.bx, this.by+100, this.tam, this.tam);
  }


  mouse(x, y, ancho, alto) {
    return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
  }
}
