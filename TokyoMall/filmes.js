const cartoes = document.querySelector(".cartoes");

const imagensCartoes = [
  "https://www.claquete.com.br/fotos/filmes/poster/12758_medio.jpg",
  "https://cinema10.com.br/upload/filmes/filmes_14101_morbius.jpg?default=poster",
  "https://d128j1v7l5zqm9.cloudfront.net/vibezz_937993687.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/21/10/49/4342577.jpg",
];

let elemento = "";

//pra cada item de imagensCartoes faça: elemento é igual a ele mesmo + item
imagensCartoes.forEach((item) => {
  elemento += `<img src='${item}'>`;
});

//adicionando html dentro do elemento
cartoes.innerHTML = elemento;
