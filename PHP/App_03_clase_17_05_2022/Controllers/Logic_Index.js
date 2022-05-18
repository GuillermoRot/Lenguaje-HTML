$(document).ready(() => {

    $("#linkFormUno").on("click", () => {
        onCargarFormularioUno();
    });

    $("#linkFormDos").on("click", () => {
        onCargarFormularioDos();
    });

});

const onCargarFormularioUno = () => {
    $.get("../views/FormularioUno.html", (response) => {
        $("#contenedor").html(response);
    }); 
}

const onCargarFormularioDos = () => {
    $.get("../views/FormularioDos.html", (response) => {
        $("#contenedor").html(response);
    }); 
}