clear();
function clear() {
  var i;

  for (i = 1; i < 26; i++) {
    var fotos = document.getElementsByClassName("provFotos" + i);
    
    for (j = 0; j < fotos.length; j++) {
      if (j != 0) {
        fotos[j].style.display = "none";
      };
    };
  };
};

slideShow();
function slideShow() {
  var i;
  var pos = Math.floor(Math.random() * 25) + 1;

  // console.log(pos);

  var fotos = document.getElementsByClassName("provFotos" + pos);

  for (i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "none";
  }

  var slideIndex = Math.floor(Math.random() * 3) + 1;
  // console.log("slide:" + slideIndex);
  fotos[slideIndex - 1].style.display = "block";

  var tiempo = (Math.floor(Math.random() * 25) + 10) * 100;
  // console.log(time);
  setTimeout(slideShow, tiempo);
}
