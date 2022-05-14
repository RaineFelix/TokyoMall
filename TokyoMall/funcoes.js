function renderizar(lista, seletor) {
  const elemento = document.querySelector(seletor);
  elementoString = "";

  //pra cada item da lista faça: elemento é igual a ele mesmo + item
  lista.forEach((item) => {
    elementoString += `<img src = '${item}' data-aos="flip-left" >`;
  });

  //adicionando html dentro do elemento
  elemento.innerHTML = elementoString;
}
const marcasPraca = [
  "https://99prod.s3.amazonaws.com/uploads/c1723294-8cc6-4692-a9bd-8fdbcac6d50d/riachuelo.png",
  "https://acontecendoaqui.com.br/wp-content/uploads/2018/01/mcdonalds_16.jpg",
  "http://deuclick.com.br/wp-content/uploads/2021/07/burguer-king-marcas-e-etc.jpg",
  "https://play-lh.googleusercontent.com/8EcPDiW4wi9QlZzut0eDCM3fYL8ijbr1RSVQLLxQdVaBbWDGYgryKaQL84hxfw1Qcw",
  "https://www.anacouto.com.br/wp-content/uploads/2021/07/GALERIA-SITE-AMERICANAS.png",
  "https://cdn.guiadosac.com.br/CHANEL.png",
];

renderizar(marcasPraca,'#marcas')

const imagensFilmes = [
  "https://www.claquete.com.br/fotos/filmes/poster/12758_medio.jpg",
  "https://cinema10.com.br/upload/filmes/filmes_14101_morbius.jpg?default=poster",
  "https://d128j1v7l5zqm9.cloudfront.net/vibezz_937993687.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/21/10/49/4342577.jpg",
];

renderizar(imagensFilmes,'.cartoes')
