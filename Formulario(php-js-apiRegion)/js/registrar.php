<?php

$nombre = isset($_POST['txt_nombre'])? $_POST['txt_nombre'] : '';
$apellido = isset($_POST['txt_apellido'])? $_POST['txt_apellido'] : '';
$provincia = isset($_POST['provincia'])? $_POST['provincia'] : '';
$comuna = isset($_POST['comunaa'])? $_POST['comunaa'] : '';
$direccion = isset($_POST['txt_direccion'])? $_POST['txt_direccion'] : '';
$correo = isset($_POST['txt_correo'])? $_POST['txt_correo'] : '';


try{

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=formulario_api', 'root', '')
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    echo json_encode('Conectado correctamente');

}catch(PDOException $error)
    echo $error->getMessage();
    die();

