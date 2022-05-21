$(document).ready(() => {

    const urlPersonasTableService = "../Services/PersonasServices/GetPersonas.php";
    const MethodGetPersonas = "GET";

    const onCargarPersonas = () => {

        $.ajax({

            type: MethodGetPersonas,
            url: urlPersonasTableService,

            success: (response) => {
                const personas = JSON.parse(response); 
                setDataTable(personas);
                handleTable();
            }

        });

        return false;

    }

    onCargarPersonas();


});

const setDataTable = (params) => {

    const tableBody = $("#tBodyTable");
    
    let values = Object.values(params);

    values.forEach((element, index) => {

        const itemTR = document.createElement("tr");

        let valElement = Object.values(element);

        valElement.forEach((elemento) => {
            const itemNodo = document.createElement("td");
            const itemElement = document.createTextNode(elemento);
            itemNodo.appendChild(itemElement);
            itemTR.appendChild(itemNodo);
        });

        const itemTDEditar = document.createElement("td");
        const itemTDEliminar = document.createElement("td"); 

        const actionEditarElement = document.createElement("a");
        const actionEliminarElement = document.createElement("a");

        const textEdit = document.createTextNode("Editar");
        const textDelete = document.createTextNode("Eliminar");

        actionEditarElement.appendChild(textEdit);
        actionEliminarElement.appendChild(textDelete);

        actionEditarElement.setAttribute('href', '#');
        actionEliminarElement.setAttribute('href', '#');

        actionEditarElement.setAttribute('id', index);
        actionEliminarElement.setAttribute('id', index);

        itemTDEditar.appendChild(actionEditarElement);
        itemTDEliminar.appendChild(actionEliminarElement);

        itemTR.appendChild(itemTDEditar);
        itemTR.appendChild(itemTDEliminar);

        tableBody.append(itemTR);
    });

}

const handleEditRow = (id) => {
    console.log("ID desde Edit " + id);
};

const handleDelteRow = (id) => {
    console.log("ID desde Delete " + id);
};

const handleTable = () => {
    $("#tableId tbody tr td a").on("click", (event) => {
        let id = $(event.currentTarget).attr("id");
        switch($(event.currentTarget).text()){
            case "Editar":
                handleEditRow(id);
                break;
            case "Eliminar":
                handleDelteRow(id);
                break;
        }
    });
}

