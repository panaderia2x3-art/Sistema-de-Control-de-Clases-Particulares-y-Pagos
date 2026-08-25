<?php 
require_once "conexion_sistem.php";
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $id=$_POST['id'];

        $sql = "DELETE FROM alumnos WHERE id=?";
        $stmt= $pdo->prepare($sql);
        $stmt->execute([$id]);

        header("Location: ../HTML/index.html");
    }
?>