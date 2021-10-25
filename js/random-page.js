var num = Math.round(Math.random() * 25);

var paginas = [
  `antartida.html`,
  `buenos-aires.html`,
  `capital-federal.html`,
  `catamarca.html`,
  `chaco.html`,
  `chubut.html`,
  `cordoba.html`,
  `corrientes.html`,
  `entre-rios.html`,
  `formosa.html`,
  `jujuy.html`,
  `la-pampa.html`,
  `la-rioja.html`,
  `mendoza.html`,
  `misiones.html`,
  `neuquen.html`,
  `rio-negro.html`,
  `salta.html`,
  `san-juan.html`,
  `san-luis.html`,
  `santa-cruz.html`,
  `santa-fe.html`,
  `santiago-del-estero.html`,
  `tierra-del-fuego.html`,
  `tucuman.html`
];

var nombre = paginas[num];

const prov = (`<a class="enlace-inspirate" href="${nombre}">Al infinito y más allá</a>`);

document.getElementById("btn").innerHTML = prov;
