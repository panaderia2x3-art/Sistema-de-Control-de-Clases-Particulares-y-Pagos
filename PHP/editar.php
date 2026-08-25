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
            $id=$_POST['id'];
            

            $sql="UPDATE alumnos SET nombre = ?, apellido = ?, materia = ?, costo_por_hora = ?, horas_clase = ?, total = ?, fecha_clase = ? WHERE id = ?";
            $stmt=$pdo->prepare($sql);
            $stmt->execute([$nombre,$apellido,$materia,$costoxhora,$hora,$total,$fecha,$id]);

            header("Location: ../HTML/index.html");
            exit;
        }
?>