<?php
    $nombre = $_POST["Nombre"];
    $apellido = $_POST["Apellido"];
    $fruit = $_POST["fruit"];

    $data = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
        'fruit' => $fruit
    );

    $response = json_encode(array("user" => $data));
    echo $response;
?>