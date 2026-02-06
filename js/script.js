const botao = document.getElementById("btnVerificar");
const input = document.getElementById("numero");
const resultado = document.getElementById("resultado");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !botao.disabled) {
    botao.click();
  }
});

botao.addEventListener("click", verificarNumero);

function verificarNumero() {
  botao.disabled = true;
  botao.style.cursor = "not-allowed";

  const valor = input.value;
  const numero = Number(valor);

  const resposta = {
    texto: "",
    cor: "",
  };

  if (!valor) {
    resposta.texto = "Digite algo";
    resposta.cor = "red";
  } else if (Number.isNaN(numero)) {
    resposta.texto = "Não é um número";
    resposta.cor = "red";
  } else {
    numero % 2 === 0
      ? ((resposta.texto = "O número é par"), (resposta.cor = "green"))
      : ((resposta.texto = "O número é ímpar"), (resposta.cor = "blue"));
  }

  mostrarResultado(resposta);
}

function mostrarResultado(resposta) {
  resultado.textContent = resposta.texto;
  resultado.style.color = resposta.cor;
  input.value = "";

  resultado.classList.remove("fade-out");
  void resultado.offsetWidth;
  resultado.classList.add("fade-in");

  setTimeout(() => esconderResultado(), 2500);
}

function esconderResultado() {
  resultado.classList.remove("fade-in");
  resultado.classList.add("fade-out");

  setTimeout(() => {
    resultado.textContent = "";
    resultado.classList.remove("fade-out");
    botao.disabled = false;
    botao.style.cursor = "pointer";
  }, 400);
}
