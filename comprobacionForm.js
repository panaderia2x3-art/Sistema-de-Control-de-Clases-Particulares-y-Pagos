const formulario = document.getElementById("formulario");
const boton_guardar = document.getElementById("boton_guardar");

boton_guardar.disabled = true;

formulario.addEventListener("input", (evento) => {
    const campo_form = evento.target;
    const nombre_campo = campo_form.name;
    const valor_campo = campo_form.value;

    const mensaje_error = document.getElementById(`error-${nombre_campo}`);
    
    if (!mensaje_error) return; 
    
    switch(nombre_campo) {
        case "nombre":
        case "apellido":
        case "materia":
            if (valor_campo.length === 0) {
                mensaje_error.textContent = "El campo no puede estar vacío.";
            } else if (!verificarLetra(valor_campo)) {
                mensaje_error.textContent = "Solo debe contener letras y espacios.";
            } else if (valor_campo.length < 3) {
                mensaje_error.textContent = "Debe tener al menos 3 caracteres.";
            } else {
                mensaje_error.textContent = "";
            }
        break;
        
        case "costo":
            const costo_numero = Number(valor_campo);
            if (isNaN(costo_numero) || costo_numero <= 0) {
                mensaje_error.textContent = "El costo debe ser un número mayor a 0.";
            } else {
                mensaje_error.textContent = "";
            }
        break;
        
        case "hora":
            const hora_numero = Number(valor_campo);
            if (isNaN(hora_numero) || hora_numero < 1 || hora_numero > 24) {
                mensaje_error.textContent = "La hora debe estar entre 1 y 24.";
            } else {
                mensaje_error.textContent = "";
            }
        break;
    }

    validarFormulario(); 
});

function validarFormulario() {
    const errores = formulario.querySelectorAll('small');
    let hayErrores = false;


    errores.forEach(error => {
        if (error.textContent !== '') {
            hayErrores = true;
        }   
    });

    // Comprobamos que ningún input importante esté vacío
    const inputs = formulario.querySelectorAll('input:not([type="submit"]):not([type="date"])');
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            hayErrores = true;
        }
    });

    boton_guardar.disabled = hayErrores;
}


function verificarLetra(campo) {
    for (let index = 0; index < campo.length; index++) {
        const letra = campo[index];

        const esLetra = letra.toLowerCase() !== letra.toUpperCase();
        const esEspacio = letra === " ";

        if (!esLetra && !esEspacio) {
            return false;
        }
    }
    return true;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Alumno correctamente registrado.");
    formulario.reset();
    boton_guardar.disabled = true;
})