const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //Cancelar recarregamento da page ao enviar o form.

  const inputPeso = document.querySelector("#peso");
  const inputAltura = document.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Digite o peso", false);
    return;
  }

  if (!altura) {
    setResultado("Digite a altura", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = retornarIMC(imc);

  const mensagem = `Seu IMC é ${imc}${nivelIMC.toUpperCase()}`;

  setResultado(mensagem, true);
});

//////////////////////////////

function getIMC(peso, altura) {
  const imc = peso / (altura * altura);   //RETORNA IMC JÁ CONVERTIDO
  return imc.toFixed(2);
}

function retornarIMC(imc) {
    
  if (imc >= 0 && imc < 18.5) {
    return ", você está abaixo do peso";
  } 
  if (imc >= 18.5 && imc < 25) {
    return ", você está com o peso normal";
    
  } 
  if (imc >= 25 && imc < 30 ){
    return ", você está com sobrepeso";
    
  } 
  if (imc >= 30 && imc < 35) {
    return ", você está com obesidade 1";
    
  }
  if (imc >= 35 && imc < 40) {
    return ", você está com obesidade 2";
    
  }
  if (imc >= 40) {
    return ", você está com obesidade 3";
  }
}

function criaParagrafos() {
  const p = document.createElement("p");
  p.classList.add("p-resultado");
  return p;
}

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const paragrafoResultado = criaParagrafos();

  if (isValid) {
    paragrafoResultado.classList.add ("resultado") 
  } 
  else {
    paragrafoResultado.classList.add ("error")
  }

  paragrafoResultado.innerHTML = mensagem;
  resultado.appendChild(paragrafoResultado);
}
