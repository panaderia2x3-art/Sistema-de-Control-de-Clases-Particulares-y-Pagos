<?php 
    require_once "conexion_sistem.php";
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $materia = $_POST['materia'];
        $costoxhora = $_POST['costo'];
        $hora = $_POST['hora'];
        $total = $hora * $costoxhora;
        $fecha =$_POST['fecha'];
        
        $sql = "INSERT INTO alumnos (nombre, apellido, materia, costo_por_hora, horas_clase, total, fecha_clase) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nombre, $apellido, $materia, $costoxhora, $hora, $total, $fecha]);

        header("Location: index.html");
        exit;
    }
?>