$(document).ready(() => {

    $("#linkFormUno").click(() => {
        onCargarFormularioUno();
    });

    $("#linkFormUno").hover((event) => {
        $(event.currentTarget).fadeOut( 100 );
        $(event.currentTarget).fadeIn( 500 );
    });

    $("#linkFormDos").on("click", () => {
        onCargarFormularioDos();
    });

    $("#linkPersonas").click(() => {
        onCargarPersonas();
    });

    onCargarFormularioUno();

});

//Son funciones globales
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

const onCargarPersonas = () => {
    $.get("../views/ViewPersonas/tablaPersonas.html", (response) => {
        $("#contenedor").html(response);
    });
}