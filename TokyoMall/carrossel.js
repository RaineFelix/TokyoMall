//selecionando o elemento imagem dentro do carrossel
const imagem = document.querySelector("#carrossel>img");

const imagensCarrossel = [
  "https://magicgramas.com.br/blog/wp-content/uploads/2018/11/2.jpg",
  "https://d3nuqriibqh3vw.cloudfront.net/c4060b68092693.5b50a85b11e1c.jpg?T2YL_5u5SyqPYNjbjRmSAqJur.VBcFM.",
  "https://universalmediaus.com/wp-content/uploads/2015/07/universal-media-outdoor-advertising-shopping-malls-utah-california-newyork-florida-boston.jpg",
  "https://media-manager.noticiasaominuto.com.br/1920/naom_600a868105b81.jpg"
];

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
