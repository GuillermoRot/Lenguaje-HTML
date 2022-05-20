<?php

    $valorUno = $_POST['numberUno'];
    $valorDos = $_POST['numberDos'];
    $Operacion = $_POST['operaciones'];
    $resultado = 0;

    if($Operacion == "Sumar"){
        $resultado = $valorUno + $valorDos;
    }

    if($Operacion == "Restar"){
        $resultado = $valorUno - $valorDos;
    }

    if($Operacion == "Multiplicar"){
        $resultado = $valorUno * $valorDos;
    }

    if($Operacion == "Dividir"){
        $resultado = $valorUno / $valorDos;
    }

    $data = array(
        'resultado' => $resultado,
        'operacion' => $Operacion
    );

    $response = json_encode(array("operacion" => $data));
    echo $response;

?>