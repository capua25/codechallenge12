const URL = 'https://jsonplaceholder.typicode.com/users';

function showAlertSuccess(mensaje) {
    const positivo = document.getElementById("alert-success");
    const respuesta = document.createElement('p');
    respuesta.innerHTML = mensaje;
    positivo.appendChild(respuesta);
    positivo.classList.add("show");
    setTimeout(()=>{positivo.classList.remove("show");}, 2000)
}

function showAlertError(mensaje) {
    const negativo = document.getElementById("alert-danger");
    if(mensaje!=''){
        const respuesta = document.createElement('p');
        respuesta.innerHTML = mensaje;
        negativo.appendChild(respuesta);
    }
    negativo.classList.add("show");
    setTimeout(()=>{negativo.classList.remove("show");}, 2000)
}

async function envio(){
    let nombre = document.getElementById('name');
    let apellido = document.getElementById('lastname');
    let fecha = document.getElementById('date');

    if (nombre.value !== "" && apellido.value !== "" && fecha.value !== "") {
        const data = {
            name: nombre,
            lastname: apellido,
            date: fecha
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        try{
            const serverResponse = await fetch(URL, options);
            if(serverResponse.status==201){
                console.log(serverResponse);
                nombre.value = '';
                apellido.value = '';
                fecha.value = 0;
                showAlertSuccess('El servidor ha devuelto: '+serverResponse.statusText);
            }
        }catch(error){
            showAlertError(error);
        }
    }
    else {
        showAlertError('');
    }
}