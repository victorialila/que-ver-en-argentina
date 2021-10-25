var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

var validarNombre = function (e) {
    if (formulario.fname.value == 0) {
        alert("Completa tu nombre");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarApellido = function (e) {
    if (formulario.lname.value == 0) {
        alert("Completa tu apellido");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarMail = function (e) {
    if (formulario.mail.value == 0) {
        alert("Completa el mail");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarComentarios = function (e) {
    if (formulario.coment.value == 0) {
        alert("Completa el detalle");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarCompania = function (e) {
    if (formulario.company.value == 0) {
        alert("Completa nombre de tu empresa");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarRrpp = function (e) {
    if (formulario.rrpp.value == 0) {
        alert("Completa nombre del representante");
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarTelefono = function (e) {
    if (formulario.phone.value == 0) {
        alert("Completa el teléfono");
        e.preventDefault();
    } else {
        return "ok";
    };
};


var validarEdad = function (e) {

    var hoy = new Date();
    var hoyDia = hoy.getDate();
    var hoyMes = hoy.getMonth();
    var hoyAno = hoy.getFullYear();

    var cumple = new Date(formulario.birthday.value);
    console.log(cumple.toDateString());

    var cumpleDia = cumple.getDate();
    var cumpleMes = cumple.getMonth();
    var cumpleAno = cumple.getFullYear();

    //el -1 esta porque cuando tomo la fecha desde el formulario, toma un día antes de la fecha elegida
    //no pude encontrar el porque pero deja de funcionar correctamente el if para validar la edad y el FelizCumple
    //el dato en "show data" lo guarda correctamente

    var dias = hoyDia - cumpleDia - 1;
    //console.log(dias);
    var meses = hoyMes - cumpleMes;
    //console.log(meses);
    var anos = hoyAno - cumpleAno;
    //console.log(anos);

    if (formulario.birthday.value == "") {
        alert("Completa fecha de nacimiento");
        e.preventDefault();
    };

    if ((meses == 0) && (dias == 0)) {
        alert("Feliz cumpleaños!");
    };

    if ((anos < 18) || (anos == 18) && ((meses < 0) || ((meses == 0) && (dias < 0)))) {
        alert("Debes ser mayor de 18 años para registrarte");
        e.preventDefault();
    } else {
        return "ok";
    };

    if ((meses == 0) && (dias == 0)) {
        alert("Feliz cumpleaños!");
    };

};

var validarFrecuencia = function (e) {
    if (formulario.frequency.value == "empty") {
        alert("Elegir frecuencia de contacto")
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarPreferencias = function (e) {
    if ((formulario.prefer[0].checked == true || formulario.prefer[1].checked == true ||
        formulario.prefer[2].checked == true || formulario.prefer[3].checked == true) &&
        (formulario.prefer[4].checked == true || formulario.prefer[5].checked == true ||
            formulario.prefer[6].checked == true || formulario.prefer[7].checked == true)) {
        return "ok";
    } else {
        alert("Completa tus preferencias");
        e.preventDefault();
    };
};

var validarTransporte = function (e) {
    if (formulario.transport.value == "empty") {
        alert("Elegir transporte preferido")
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarHospedaje = function (e) {
    if (formulario.lodgement.value == "empty") {
        alert("Elegir hospedaje preferido")
        e.preventDefault();
    } else {
        return "ok";
    };
};

var validarTerminos = function (e) {
    if (formulario.terminos.checked == false) {
        alert("Acepta los términos y condiciones");
        e.preventDefault();
    } else {
        return "ok";
    };
};


var thanksMsj = function (personalizado) {
    alert("¡Muchas gracias por " + personalizado);
};


//Validación form "Sugerencias"
var validarSugerencias = function (e) {
    let nom = validarNombre(e);
    let ape = validarApellido(e);
    let mai = validarMail(e);
    let com = validarComentarios(e);
    if (nom == "ok" && ape == "ok" && mai == "ok" && com == "ok") {
        thanksMsj(
            personalizado="tus sugerencias!",
        );
    };
};

var frenarEnvioSugerencias = function () {
    formulario.addEventListener("submit", validarSugerencias);
};


//Validación form "Contacto Anunciates"
var validarContactoPromo = function (e) {
    let cia = validarCompania(e);
    let rp = validarRrpp(e);
    let mai = validarMail(e);
    let tel = validarTelefono(e);
    let com = validarComentarios(e);
    if (cia == "ok" && rp == "ok" && mai == "ok" && tel == "ok" && com == "ok") {
        thanksMsj(
            personalizado="tu interés en anunciar en nuestra web! Pronto nos pondremos en contacto.",
        );
    };
};

var frenarEnvioContatoPromo = function () {
    formulario.addEventListener("submit", validarContactoPromo);
};


//Validación form "Registro"
var validarRegistro = function (e) {
    let nom = validarNombre(e); console.log(nom);
    let ape = validarApellido(e); console.log(ape);
    let ed = validarEdad(e); console.log(ed);
    let mai = validarMail(e); console.log(mai);
    let fre = validarFrecuencia(e); console.log(fre);
    let pre = validarPreferencias(e); console.log(pre);
    let tra = validarTransporte(e); console.log(tra);
    let hos = validarHospedaje(e); console.log(hos);
    let ter = validarTerminos(e); console.log(ter);

    if (nom == "ok" && ape == "ok" && ed == "ok" && mai == "ok" && fre == "ok" &&
        pre == "ok" && tra == "ok" && hos == "ok" && ter == "ok") {
        thanksMsj(
            personalizado="registrate!",
        );
    };
};

var frenarEnvioRegistro = function () {
    formulario.addEventListener("submit", validarRegistro);
};