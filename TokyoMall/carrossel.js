const imagensCarrossel = [
  "https://flamboyant.com.br/blog/wp-content/uploads/2020/08/074E474F-BAD3-4A87-98B0-F67CE73CF7D4.jpeg",
  "https://www.falandodeviagem.com.br/imagens19/ViaParqueKids2.jpg",
  "https://invexo.com.br/blog/wp-content/uploads/2020/07/lojas-do-shopping-leblon-1.jpg",
];

//selecionando o elemento imagem dentro do carrossel
const imagem = document.querySelector("#carrossel>img");

let indexAtual = 0;

function trocaImagem() {
  if (indexAtual < imagensCarrossel.length - 1) {
    indexAtual++;
  } else {
    indexAtual = 0;
  }

  imagem.src = imagensCarrossel[indexAtual];
}

setInterval(() => {
  trocaImagem();
}, 2000);
