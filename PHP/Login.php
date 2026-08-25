<?php 
    require_once "conexion_sistem.php";
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $usuario = $_POST['username'];
        $contraseña = $_POST['contraseña'];

        $sql = "SELECT * FROM profesores WHERE usuarios = ? AND contraseña = ?"; 
        $stmt = $pdo->prepare($sql);
        $stmt ->execute([$usuario,$contraseña]);
        $usuario =$stmt->fetch();
        
        if ($usuario == null) {
            header("Location: ../HTML/Login.html?mensaje=ErrordeConexion");
            exit;
        }else{
            header("Location: ../HTML/index.html");
        }
    }
?>