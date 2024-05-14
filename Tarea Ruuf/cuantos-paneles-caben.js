function cuantosPanelesCaben(baseA, alturaA, baseB, alturaB) {
  let rectangulo = baseA * alturaA;
  let panel = baseB * alturaB;
  
  if (rectangulo / panel === 1) {
    return "Cabe un panel";
  }
  else if (rectangulo / panel < 1) {
    return "No cabe ningún panel";
  }
  else { 
    return "Caben " + Math.floor(rectangulo / panel) + " paneles";
  }
  // Implementar la función cuantosPanelesCaben que reciba 4 parámetros

  // A es un rectangulo de baseA por alturaA
  // B es un panel de baseB por alturaB

  // Calculo de area de rectángulo A = baseA por alturaA  
  // Calculo de area de panel B = baseB por alturaB  

  // Area de rectangulo A entre Area de panel B = Cantidad de paneles que caben en A

  // Retornar la cantidad de paneles que caben en A
}

let Resultado = cuantosPanelesCaben(166, 68, 1000, 800);
console.log(Resultado);