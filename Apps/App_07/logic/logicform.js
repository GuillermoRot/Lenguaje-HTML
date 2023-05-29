$(document).ready(()=>{

    $("#form").on("submit", () => {

        $.ajax({
            url: $("#form").attr("action"),
            type: $("#form").attr("method"),
            data: $("#form").serialize(),
            success: (response) => {
                $("#rest").html(response);
            },
            complete: () => {
                $("#form").hide();
            },
        });

        return false;
    });

});