<?php
require_once "conexion_sistem.php";

try {
    $stmt = $pdo->query("SELECT * FROM alumnos");
    $alumnos = $stmt->fetchAll();
    
    header('Content-Type: application/json');
    echo json_encode($alumnos);
} catch(PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode(["error" => $e->getMessage()]);
}
?>