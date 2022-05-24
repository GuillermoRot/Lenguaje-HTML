$(document).ready(() => {

    $("#formulario").on("submit", () => {

        var msgNombre = $("#lblNombre");
        var msgApellido = $("#lblApellido");

        $.ajax({

            url: $("#formulario").attr("action"),
            type:$("#formulario").attr("method"),
            data:$("#formulario").serialize(),
            success: (response) => {
                const data = JSON.parse(response);
                console.log(data);
                msgNombre.html("El nombre es:" + data.curso.curso);
                msgApellido.html("El Apellido es:" + data.curso.dificultad);
            }

        });

        return false;

    });

});