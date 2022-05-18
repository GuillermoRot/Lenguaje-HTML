<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2>Formulario de Datos</h2>

    <form action="server.php" method="POST" id="form">
        <input type="text" name="Nombre" id="txtNombre">
        <input type="text" name="Apellido">
        <br />
        <input type="text" id="t1" name="fruit" list="l1">
        <datalist id="l1">
            <option>Plátano</option>
            <option>Cereza</option>
            <option>Manzana</option>
            <option>Fresa</option>
            <option>Limón</option>
            <option>Naranja</option>
        </datalist>
        <br />
        <input type="submit" value="Guardar Datos">
    </form>

    <h3 id="Resultado"></h3>

    <script src="jquery-3.6.0.min.js" type="text/javascript"></script>
    <script src="back.js" type="text/javascript"></script>

</body>
</html>