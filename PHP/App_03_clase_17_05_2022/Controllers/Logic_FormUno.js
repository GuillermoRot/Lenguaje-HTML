$(document).ready(() => {

    $("#btnHome").click(() => {
        onVolverHome();
    });

    $("#btnAnimar").click(() => {
        $("#formAnimated").animate({left: '250px'});
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
            },
            error:() => {

            }
            
        });

        return false;

    });

    const onVolverHome = () => {
        window.location.href = "../views/index.html";
    }
    
});