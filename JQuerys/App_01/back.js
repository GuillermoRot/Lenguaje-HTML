$(document).ready(() => {

    $("#form").on("submit", () =>{

        $.ajax({

            url: $("#form").attr("action"),
            type: $("#form").attr("method"),
            data: $("#form").serialize(),
            success: (response) => {
                const data = JSON.parse(response);
                console.log(data);
                $("#Resultado").html(data.user.nombre + data.user.apellido);
            }

        });

        return false;

    });
    
});