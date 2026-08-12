document.addEventListener("DOMContentLoaded", () => {  
    fetch("obtener_alumnos.php")
        .then(response => response.json())
        .then(data => {
            const tabla = document.querySelector("#tabla_alumnos tbody");
            tabla.innerHTML = "";
            
            if(data.error) {
                console.error("Error desde PHP:", data.error);
                return;
            }

            if(data.length === 0){
                tabla.innerHTML = "<tr><td colspan='7'>No hay alumnos registrados</td></tr>";
                return;
            }

            data.forEach(alumno => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${alumno.nombre}</td>
                    <td>${alumno.apellido}</td>
                    <td>${alumno.materia}</td>
                    <td>${alumno.costo_por_hora}</td>
                    <td>${alumno.horas_clase}</td>
                    <td>${alumno.fecha_clase}</td>
                    <td>${alumno.total}</td>
                `;

                tabla.appendChild(fila);
            });
        })
        .catch(error => console.error("Error al cargar los alumnos:", error));
});