<?php

    $usuario = $_POST["usuario"];
    $password = $_POST["password"];
    $edad = $_POST["edad"];
    $aux = "";

    if($edad > 18){
        $aux = "Es mayor de edad";
    }else{
        $aux = "Es menor de edad";
    }

    $data = array(
        'usuario' => $usuario,
        'password' => $password,
        'mayor' => $edad > 18 ? "Es mayor" : "Es menor",
    );

    $response = json_encode(array("user" => $data));
    echo $response;

?>