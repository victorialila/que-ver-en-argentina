function leerModo() {
   if (localStorage.getItem("modo") == "oscuro") {
      var element = document.body;
      element.classList.toggle("dark-mode");
   };
};

function activarModoOscuro() {
   if (localStorage.getItem("modo") == "oscuro") {
      localStorage.setItem("modo", "claro");
   } else {
      localStorage.setItem("modo", "oscuro");
   };
   var element = document.body;
   element.classList.toggle("dark-mode");
};