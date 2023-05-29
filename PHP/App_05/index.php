<?php
    header('Access-Control-Allow-Origin: *');

    $nombre = $_POST["name"];

    if(isset($nombre)){
        
        $arr = array("name" => $nombre);
        $out = array_values($arr);
        $response = json_encode(array("data" => $out));
        echo $response;
    };
    
    
    
?>