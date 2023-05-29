$(document).ready(() => {

    $("#link_form").on("click", () => {

        $.get("../views/formulario.html", (response) => {
           $("#main_contenedor").html(response);
        });

    });

});