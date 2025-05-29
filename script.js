function validarFormulario(event){
    event.preventDefault(); // Evitar el envío del formulario hasta que se validen los campos
    //Validar que el apellido tenga caracteres y no digitos
    var apellido = document.getElementById("apellido").value;
    if(apellido.length < 1 || !isNaN(apellido)){
        alert("El apellido debe contener al menos un carácter y no puede ser un número.");
        return false;
    }
    //Validar que el nombre tenga caracteres y no digitos
    var nombre = document.getElementById("nombre").value;
    if(nombre.length < 1 || !isNaN(nombre)){
        alert("El nombre debe contener al menos un carácter y no puede ser un número.");
        return false;
    }
    //Validar que el DNI tenga solo numeros y una longitud de 8 digitos
    var dni = document.getElementById("dni").value;
    if(dni.length !== 8 || isNaN(dni)){
        alert("El DNI debe contener exactamente 8 dígitos numéricos.");
        return false;
    }
    //Validar que al fecha solo acepte superiores al año 2006
    var fecha = document.getElementById("fecha").value;
    var fechaObj = new Date(fecha);
    if(fechaObj.getFullYear() < 2006){
        alert("La fecha debe ser posterior al año 2006.");
        return false;
    }

    //Validar que el email tenga un formato correcto
    var email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        alert("El email debe contener un '@' y un '.'");
        return false;
    }

    alert("¡Formulario enviado correctamente!");
}

function hacerPreguntas(event){
    event.preventDefault();
    const preguntasboton = [
    "Cual es tu nacionalidad?",
    "Cual es tu color favorito?",
    "Cual es el nombre de tu mascota?"
    ];
    const respuestas = [];
    for (let i = 0; i < preguntasboton.length; i++) {
        const respuesta = prompt(preguntasboton[i]);
        if (respuesta) {
            respuestas.push(respuesta);
        } else {
            alert("Respuesta no puede estar vacía.");
            i--; // Repetir la pregunta si la respuesta es vacía
        }
    }

    const campoRespuestas = document.getElementById("campo-respuestas");
    campoRespuestas.innerHTML = respuestas.join("-");
}