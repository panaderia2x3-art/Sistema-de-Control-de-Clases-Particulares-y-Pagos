const formulario=document.getElementById("id_login");
const boton = document.getElementById("boton");

boton.disabled=true;

formulario.addEventListener("input",(evento)=>{
    
    const Campo_origen=evento.target;
    const Nombre_campo=Campo_origen.name;
    const elemento_del_campo= Campo_origen.value;

    const mensaje_error = document.getElementById(`error-${Nombre_campo}`);
    switch (Nombre_campo) {
        case "username":
        case "contraseña":
            if(elemento_del_campo.length <=0){
                mensaje_error.textContent="No deje al campo vacio porfavor";
            }else if(elemento_del_campo.length <8){
                mensaje_error.textContent="Muy pocos caracteres";
            }else{
                mensaje_error.textContent="";
            }
            break;
        default:
            break;
    }

    ValidarButton();
});

function ValidarButton(){
    const error = formulario.querySelectorAll("small");
    let hayErrores = false;

    error.forEach(element => {
        if(element.textContent !== ""){
            hayErrores = true;
        }
    });

    boton.disabled = hayErrores;
}