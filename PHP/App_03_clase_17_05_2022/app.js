$(document).ready(() => {

    $("#linkHome").on("click", () => {
        
        $.get("Home.html", (response) => {
            $("#contenedor").html(response);
        });

    });

    $("#linkAbout").on("click", () => {
        
        $.get("About.html", (data) => {
            $("#contenedor").html(data);
        });

    });

});
