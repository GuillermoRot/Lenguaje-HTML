$(document).ready(() => {

    const urlSrvice = "../Services/persona_service.php";
    const methodForm = "POST";

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

            url: urlSrvice,
            type: methodForm,
            data: $("#formulario").serialize(),
            
            beforeSend: () => {
                msgElement.html("Enviando los datos"); 
                btnEnviar.attr("disabled","disabled");
            },
            success: (response) => {
                const datos = JSON.parse(response);
                msgElement.html("El resultado es: " + datos.user.usuario + " " + datos.user.password);
            },
            complete: () => {
                btnEnviar.removeAttr("disabled");
                $("#formulario").trigger("reset");
            },
            error:() => {
                msgElement.html("El servidor tiene problemas");
            }
            
        });

        return false;

    });

    const onVolverHome = () => {
        window.location.href = "../views/index.html";
    }
    
});