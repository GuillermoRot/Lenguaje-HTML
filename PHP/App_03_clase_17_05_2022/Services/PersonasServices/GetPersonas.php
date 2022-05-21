<?php

    $PersonaUno = array(
        'nombre' => 'Matias',
        'edad' => '20',
        'direccion' => 'Obera'
    );

    $PersonaDos = array(
        'nombre' => 'Ana',
        'edad' => '24',
        'direccion' => 'Apostoles'
    );

    $PersonaTres = array(
        'nombre' => 'Carla',
        'edad' => '21',
        'direccion' => 'Corrientes'
    );

    $PersonaCuatro = array(
        'nombre' => 'Osvaldo',
        'edad' => '26',
        'direccion' => 'Chaco'
    );

    $response = json_encode(array("personaUno" => $PersonaUno, "personaDos" => $PersonaDos, "personaTres" => $PersonaTres, "personaCuatro" => $PersonaCuatro));
    echo $response;
    
?>