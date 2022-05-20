$(document).ready(() => {

    const urlServer = "../Services/operaciones_services.php";
    const methodServer = "POST";

    $("#formulario").on("submit", () => {

        $.ajax({

            url: urlServer, 
            type: methodServer,
            data: $("#formulario").serialize(),
            success: (respuesta) => {
                const data = JSON.parse(respuesta);
                $("#resultado").html("La operacion realizada es: " + data.operacion.operacion + " y el resultado es: " +  data.operacion.resultado);
            },
            error: (response) => {
                console.log("Datos de error__::", response);
            }

        });

        return false;
    });

});