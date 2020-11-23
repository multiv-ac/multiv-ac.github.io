// Markov text (character n-grams)
// Laurence Bender
//
// Code based on:
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/eGFJ8vugIWA

let txt = "Escribo un manifiesto porque no tengo nada para decir. Todo lo sólido se desvanece en el aire. Para lanzar un manifiesto, es preciso querer: ABC para fulminar contra 1, 2, 3; volar de ira y aguzar las alas para conquistar  diseminar pequeños ABCs y grandes ABCs; firmar, gritar, maldecir; demostrar el propio non plus ultra; organizar la prosa en la forma de una evidencia absoluta e irrefutable. Estoy en contra de la acción; a favor de la continua contradicción, y también de la afirmación. No estoy a favor ni en contra y no explico porque odio el sentido común. Hablo solo por mí mismo, ya que no quiero convencer, no tengo derecho a arrastrar a otros a mi corriente, no obligo a nadie a seguirme y todo el mundo hace su arte a su manera, si es que conoce la alegría que sube cual flechas a los planos astrales, o aquella que desciende a las minas de flores de cadáveres y espasmos fértiles. ¿Acaso se ha hallado la base psíquica común a toda la humanidad? ¿Cómo es que se quiere ordenar el caos constitutivo de esa variación informe e infinita: el hombre?";

let order = 6; 
let caracteres = 1000;

let ngrams = {};
let button;

function setup() {
  
  createCanvas(400,400);
  background(192, 192, 196);
  
  textSize(14);
  
  //text(txt,10,20,width-20,height);

  for (let i = 0; i <= txt.length - order; i++) {
    let gram = txt.substring(i, i + order);

    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    ngrams[gram].push(txt.charAt(i + order));
  }
  
}

function draw() {
}

function markovIt() {

  var currentGram = txt.substring(0, order);
  var result = currentGram;

  for (var i = 0; i < caracteres; i++) {
    var possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    var len = result.length;
    currentGram = result.substring(len - order, len);
  }

  background(192, 192, 196);
  text(result,10,20,width-20,height);
  
}

function mousePressed() {
  markovIt();
}
