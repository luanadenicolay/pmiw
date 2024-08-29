function dibujoCuadrado ( i, j) {

  let  px  = i * tam;
  let  py  = j * tam;
  let calculo = distancia (px, py);
  let tono = map (calculo, 0, 200, 0, 255 );

  fill (0);
  rect (px, py, tam, tam);

  fill (198, 196, 196);
  triangle (px, py, px+tam/2, py, px, py+tam/2); //triangulo sup
  triangle (px+tam/2, py+tam, px+tam, py+tam, px+tam, py+tam/2); //triangulo inf

  fill (tono);
  rect (px+tam/2, py, tam/2, tam/2);
}

function reinciarVar () {
  cant = 8;
  tam = width/2/cant;
}

function distancia (px, py) {
  return dist ( width/2+px, height/2, mouseX, mouseY);
}
