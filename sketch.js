
const MEMO = []; // memoria: carga de niveles
const MLDS = []; // moldes: graficos predefinidos

const CF = { // ajustes
  tam: 300, // tamaño caras
  mrg: 0.2, // margen -> % de tam
  red: 0.1, // borde redondeado -> % de tam
  grs: 40, // grosor circulos
  alp: 0, // transparencia
  vis: false, // solucion
  cnt: 1, // contador
}

///////////////////////////////////////////////////////////

function setup() {
  
  createCanvas(500, 600).parent("sk");
  windowResized(); // (*)
  frameRate(40);
  iniMOLDES();
  
  background(255, 217, 121);

}

///////////////////////////////////////////////////////////

function draw() {

  CF.vis = mouseIsPressed;

  background(255, 217, 121, 51);
  
  // reinicio
  if ((frameCount % 100) * 2 == 0) {
    // noLoop();
    // return;
    background(255, 217, 121);
    CF.cnt = (CF.cnt % 6) + 1;
    // if (!mouseIsPressed) CF.vis = false;
  }
  // else {
  //   background(255, 217, 121, Math.max(0, 140 - ((frameCount % 100) * 2)));
  // }

  // uno
  // CF.vis ? image(MLDS[0], (frameCount % 100) * 2, 0):0;
  image(MLDS[1], (frameCount % 100) * 2, 0);
  
  // dos
  // CF.vis ? image(MLDS[0], 0, (frameCount % 100) * 2):0;
  image(MLDS[2], 0, (frameCount % 100) * 2);
  
  // tres
  // CF.vis ? image(MLDS[0], 200 - ((frameCount % 100) * 2), (frameCount % 100) * 2):0;
  image(MLDS[3], 200 - ((frameCount % 100) * 2), (frameCount % 100) * 2);
  
  // cuatro
  // CF.vis ? image(MLDS[0], 200 - ((frameCount % 100) * 2), 200 - ((frameCount % 100) * 2)):0;
  image(MLDS[4], 200 - ((frameCount % 100) * 2), 200 - ((frameCount % 100) * 2));
  
  // cinco
  push();
  translate((frameCount % 100) * 2 + CF.tam * 0.5, 300 + CF.tam * 0.5);
  rotate(((frameCount % 100) * 2) * 0.01);
  // CF.vis ? image(MLDS[0], -CF.tam * 0.5,  -CF.tam * 0.5):0;
  image(MLDS[5], -CF.tam * 0.5,  -CF.tam * 0.5);
  pop();
  
  // seis
  // CF.vis ? image(MLDS[0], 0, 300 - ((frameCount % 100) * 2)):0;
  image(MLDS[6], 0, 300 - ((frameCount % 100) * 2));

  // contador color
  if (CF.cnt === 1) {
    CF.vis ? image(MLDS[9], (frameCount % 100) * 2, 0):0;
    image(MLDS[11], (frameCount % 100) * 2, 0);
  }
  else if (CF.cnt === 2) {
    CF.vis ? image(MLDS[10], 0, (frameCount % 100) * 2):0;
    image(MLDS[12], 0, (frameCount % 100) * 2);
  }
  else if (CF.cnt === 3) {
    CF.vis ? image(MLDS[9], 200 - ((frameCount % 100) * 2), (frameCount % 100) * 2):0;
    image(MLDS[13], 200 - ((frameCount % 100) * 2), (frameCount % 100) * 2);
  }
  else if (CF.cnt === 4) {
    CF.vis ? image(MLDS[10], 200 - ((frameCount % 100) * 2), 200 - ((frameCount % 100) * 2)):0;
    image(MLDS[14], 200 - ((frameCount % 100) * 2), 200 - ((frameCount % 100) * 2));
  }
  else if (CF.cnt === 5) {
    push();
    translate((frameCount % 100) * 2 + CF.tam * 0.5, 300 + CF.tam * 0.5);
    rotate(((frameCount % 100) * 2) * 0.01);
    CF.vis ? image(MLDS[9], -CF.tam * 0.5,  -CF.tam * 0.5):0;
    image(MLDS[15], -CF.tam * 0.5,  -CF.tam * 0.5);
    pop();
  }
  else if (CF.cnt === 6) {
    CF.vis ? image(MLDS[10], 0, 300 - ((frameCount % 100) * 2)):0;
    image(MLDS[16], 0, 300- ((frameCount % 100) * 2));
  }
}

///////////////////////////////////////////////////////////

// let evitarClickE = false;
// function touchStarted() {

//   // prevenir doble accion
//   if (evitarClickE) return;
//   evitarClickE = true;
//   setTimeout(function() {
//     evitarClickE = false;
//   }, 110);

//   if (CF.vis) CF.vis = false;
//   else CF.vis = true;
// }

///////////////////////////////////////////////////////////

// responsive ! ! copiar y pegar ! !
// (*)llamar despues de createCanvas
function windowResized() {
  
  const pag = document.querySelector("body");
  const cnv = document.querySelector("#defaultCanvas0");
  const mrg = 2; // margen
  
  pag.style.overflow = "hidden";
  pag.style.display = "flex";
  pag.style.justifyContent = "center";
  pag.style.alignItems = "center";
  pag.style.height = "100svh";
 
  if (windowWidth * height > windowHeight * width) {
    cnv.style.height = (100 - mrg * 2) + "svh";
    cnv.style.width = ((100 - mrg * 2) / height) * width + "svh";
  }
  else {
    cnv.style.width = (100 - mrg * 2) + "vw";
    cnv.style.height = ((100 - mrg * 2) / width) * height + "vw";
  }
}

///////////////////////////////////////////////////////////

function iniMOLDES() {

  // grafico borde (negro)
  MLDS[0] = createGraphics(CF.tam, CF.tam);
  MLDS[0].fill(255, CF.alp);
  MLDS[0].stroke(10);
  MLDS[0].strokeWeight(CF.tam * 0.01);
  MLDS[0].rect(
    CF.tam * 0.02,
    CF.tam * 0.02,
    CF.tam * 0.96,
    CF.tam * 0.96,
    CF.tam * CF.red
  );

  // para los numeros (negro)
  for (let i = 1; i <= 6; i++) {
    
    // inicializar graficos
    MLDS[i] = createGraphics(CF.tam, CF.tam);
    
    // ajustes
    MLDS[i].fill(10);
    MLDS[i].noStroke();
    // MDLS[i].background(random(99, 255), 20, 255 - random(99, 255), CONFIG.alp);
  }

  // grafico "1"
  MLDS[1].circle(
    MLDS[1].width * 0.5,
    MLDS[1].height * 0.5,
    CF.grs
  );

  // grafico "2"
  MLDS[2].circle(
    MLDS[2].width * CF.mrg,
    MLDS[2].height * CF.mrg,
    CF.grs
  );
  MLDS[2].circle(
    MLDS[2].width * (1 - CF.mrg),
    MLDS[2].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "3"
  MLDS[3].circle(
    MLDS[3].width * CF.mrg,
    MLDS[3].height * CF.mrg,
    CF.grs
  );
  MLDS[3].circle(
    MLDS[3].width * 0.5,
    MLDS[3].height * 0.5,
    CF.grs
  );
  MLDS[3].circle(
    MLDS[3].width * (1 - CF.mrg),
    MLDS[3].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "4"
  MLDS[4].circle(
    MLDS[4].width * CF.mrg,
    MLDS[4].height * CF.mrg,
    CF.grs
  );
  MLDS[4].circle(
    MLDS[4].width * CF.mrg,
    MLDS[4].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[4].circle(
    MLDS[4].width * (1 - CF.mrg),
    MLDS[4].height * CF.mrg,
    CF.grs
  );
  MLDS[4].circle(
    MLDS[4].width * (1 - CF.mrg),
    MLDS[4].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "5"
  MLDS[5].circle(
    MLDS[5].width * CF.mrg,
    MLDS[5].height * CF.mrg,
    CF.grs
  );
  MLDS[5].circle(
    MLDS[5].width * CF.mrg,
    MLDS[5].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[5].circle(
    MLDS[5].width * 0.5,
    MLDS[5].height * 0.5,
    CF.grs
  );
  MLDS[5].circle(
    MLDS[5].width * (1 - CF.mrg),
    MLDS[5].height * CF.mrg,
    CF.grs
  );
  MLDS[5].circle(
    MLDS[5].width * (1 - CF.mrg),
    MLDS[5].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "6"
  MLDS[6].circle(
    MLDS[6].width * CF.mrg,
    MLDS[6].height * CF.mrg,
    CF.grs
  );
  MLDS[6].circle(
    MLDS[6].width * CF.mrg,
    MLDS[6].height * 0.5,
    CF.grs
  );
  MLDS[6].circle(
    MLDS[6].width * CF.mrg,
    MLDS[6].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[6].circle(
    MLDS[6].width * (1 - CF.mrg),
    MLDS[6].height * CF.mrg,
    CF.grs
  );
  MLDS[6].circle(
    MLDS[6].width * (1 - CF.mrg),
    MLDS[6].height * 0.5,
    CF.grs
  );
  MLDS[6].circle(
    MLDS[6].width * (1 - CF.mrg),
    MLDS[6].height * (1 - CF.mrg),
    CF.grs
  );
  
  // relleno
  MLDS[7] = null;
  MLDS[8] = null;

  // grafico borde (rojo)
  MLDS[9] = createGraphics(CF.tam, CF.tam);
  MLDS[9].fill(255, CF.alp);
  MLDS[9].stroke(240, 132, 143);
  MLDS[9].strokeWeight(CF.tam * 0.01);
  MLDS[9].rect(
    CF.tam * 0.02,
    CF.tam * 0.02,
    CF.tam * 0.96,
    CF.tam * 0.96,
    CF.tam * CF.red
  );

  // grafico borde (azul)
  MLDS[10] = createGraphics(CF.tam, CF.tam);
  MLDS[10].fill(255, CF.alp);
  MLDS[10].stroke(0, 166, 220);
  MLDS[10].strokeWeight(CF.tam * 0.01);
  MLDS[10].rect(
    CF.tam * 0.02,
    CF.tam * 0.02,
    CF.tam * 0.96,
    CF.tam * 0.96,
    CF.tam * CF.red
  );

  // para los numeros (color)
  for (let i = 11; i <= 16; i++) {
    MLDS[i] = createGraphics(CF.tam, CF.tam);
    MLDS[i].noStroke();  
  }

  // grafico "11"
  MLDS[11].fill(240, 132, 143);
  MLDS[11].circle(
    MLDS[11].width * 0.5,
    MLDS[11].height * 0.5,
    CF.grs
  );

  // grafico "12"
  MLDS[12].fill(0, 166, 220);
  MLDS[12].circle(
    MLDS[12].width * CF.mrg,
    MLDS[12].height * CF.mrg,
    CF.grs
  );
  MLDS[12].circle(
    MLDS[12].width * (1 - CF.mrg),
    MLDS[12].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "13"
  MLDS[13].fill(240, 132, 143);
  MLDS[13].circle(
    MLDS[13].width * CF.mrg,
    MLDS[13].height * CF.mrg,
    CF.grs
  );
  MLDS[13].circle(
    MLDS[13].width * 0.5,
    MLDS[13].height * 0.5,
    CF.grs
  );
  MLDS[13].circle(
    MLDS[13].width * (1 - CF.mrg),
    MLDS[13].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "14"
  MLDS[14].fill(0, 166, 220);
  MLDS[14].circle(
    MLDS[14].width * CF.mrg,
    MLDS[14].height * CF.mrg,
    CF.grs
  );
  MLDS[14].circle(
    MLDS[14].width * CF.mrg,
    MLDS[14].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[14].circle(
    MLDS[14].width * (1 - CF.mrg),
    MLDS[14].height * CF.mrg,
    CF.grs
  );
  MLDS[14].circle(
    MLDS[14].width * (1 - CF.mrg),
    MLDS[14].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "15"
  MLDS[15].fill(240, 132, 143);
  MLDS[15].circle(
    MLDS[15].width * CF.mrg,
    MLDS[15].height * CF.mrg,
    CF.grs
  );
  MLDS[15].circle(
    MLDS[15].width * CF.mrg,
    MLDS[15].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[15].circle(
    MLDS[15].width * 0.5,
    MLDS[15].height * 0.5,
    CF.grs
  );
  MLDS[15].circle(
    MLDS[15].width * (1 - CF.mrg),
    MLDS[15].height * CF.mrg,
    CF.grs
  );
  MLDS[15].circle(
    MLDS[15].width * (1 - CF.mrg),
    MLDS[15].height * (1 - CF.mrg),
    CF.grs
  );

  // grafico "16"
  MLDS[16].fill(0, 166, 220);
  MLDS[16].circle(
    MLDS[16].width * CF.mrg,
    MLDS[16].height * CF.mrg,
    CF.grs
  );
  MLDS[16].circle(
    MLDS[16].width * CF.mrg,
    MLDS[16].height * 0.5,
    CF.grs
  );
  MLDS[16].circle(
    MLDS[16].width * CF.mrg,
    MLDS[16].height * (1 - CF.mrg),
    CF.grs
  );
  MLDS[16].circle(
    MLDS[16].width * (1 - CF.mrg),
    MLDS[16].height * CF.mrg,
    CF.grs
  );
  MLDS[16].circle(
    MLDS[16].width * (1 - CF.mrg),
    MLDS[16].height * 0.5,
    CF.grs
  );
  MLDS[16].circle(
    MLDS[16].width * (1 - CF.mrg),
    MLDS[16].height * (1 - CF.mrg),
    CF.grs
  );
}

///////////////////////////////////////////////////////////

class Cara {
  constructor(_t, _x, _y, _r) {
    this.t = _t; // tipo (1, 2, 3, 4, 5 o 6)
    this.x = _x; // posicion x (de 0 a 500)
    this.y = _y; // posicion y (de 0 a 600)
    this.r = _r; // rotacion (de 0 a 360)
  }
}

///////////////////////////////////////////////////////////

class Nivel {
  constructor() {
    this.id = _id; // hash256
    this.cs = _cs; // arreglo de caras
  }
}
