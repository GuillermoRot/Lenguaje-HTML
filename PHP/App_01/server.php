<?php
    $nombre = $_POST["Nombre"];
    $apellido = $_POST["Apellido"];

    $data = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
    );

    $response = json_encode(array("user" => $data));
    echo $response;
?>