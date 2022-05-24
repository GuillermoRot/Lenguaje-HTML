<?php

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];

    $data = array(
        'curso' => $nombre."".$apellido,
        'dificultad' => $apellido,
    );

    $response = json_encode(array("curso" => $data));
    echo $response;
