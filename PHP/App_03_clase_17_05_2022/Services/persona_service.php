<?php

    $usuario = $_POST["usuario"];
    $password = $_POST["password"];

    $data = array(
        'usuario' => $usuario,
        'password' => $password,
    );

    $response = json_encode(array("user" => $data));
    echo $response;

?>