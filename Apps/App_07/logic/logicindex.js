const MAIN_CONTENDOR = "#contenedor_main";
const FORM_URL = "../views/formulario.html";

$(document).ready(() => {
    $("#ref_form").on("click", () => {
        loadPage(FORM_URL, MAIN_CONTENDOR);
        
    });
});

const loadPage = (url, contenedor) => {
    $.get(url, (response) => {
        $(contenedor).html(response);
    });
}