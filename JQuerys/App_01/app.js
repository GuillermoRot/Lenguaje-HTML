$(document).ready(() => {

    $("#btnCambiar").on("click", () => {
        
        $("#H_1").html("Valor Cambiado...");

    });

    $("#btnChangePage").on("click", () => {
        
        $.get("About.html", (data) => {
            $("#contenedor").html(data);
        });

    });

});
