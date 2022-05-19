$(document).ready(() => {

    $("#btnHome").on("click", () => {
        onVolverHome();
    });

    $("#formulario").on("submit", () => {
        
        var msgElement = $("#Resultado");
        var btnEnviar = $("#btnEnviar");

        $.ajax({

            url: $("#formulario").attr("action"),
            type: $("#formulario").attr("method"),
            data: $("#formulario").serialize(),
            
            beforeSend: () => {
                msgElement.html("Enviando los datos");
                btnEnviar.attr("disabled","disabled");
            },
            success: (response) => {
                const datos = JSON.parse(response);
                msgElement.html(datos.user.usuario + " " + datos.user.password);
            },
            complete: () => {
                btnEnviar.removeAttr("disabled");
                $("#formulario").trigger("reset");
            }
            
        });

        return false;

    });

});


const onVolverHome = () => {
    //Para redireccionar al home
    window.location.href = "../views/index.html";
}