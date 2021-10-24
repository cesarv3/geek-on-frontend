let errores = [];
function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

function doActionRegistro() {
let formData = new FormData();
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const nombre = document.querySelector('#nombre');
const aPaterno = document.querySelector('#aPaterno');
const aMaterno = document.querySelector('#aMaterno');
const rol_id = document.querySelector('#rol_id');
const avatar = document.querySelector('#avatar');
if(email.value == ""){
    errores.push("El email no puede estar vacio");
} else if(!validateEmail(email.value)){
    errores.push("El email es invalido");
}
if(nombre.value == ""){
    errores.push("El nombre no puede estar vacio");
} else if(nombre.value.length < 2){
    errores.push("El nombre debe contener al menos 2 caracteres");
}
if(apellido.value == ""){
    errores.push("El apellido no puede estar vacio");
} else if(apellido.value.length < 2){
    errores.push("El apellido debe contener al menos 2 caracteres");
}
if(materno.value == ""){
    errores.push("El apellido materno no puede estar vacio");
}

if(password.value == ""){
    errores.push("El password no puede estar vacio");
} else if(password.value.length < 6){
    errores.push("El password debe contener al menos 6 caracteres");
}
if(avatar.value == ""){
    errores.push("La imagen no puede estar vacia");
}
if(errores.length > 0){    
        //busco el div con el id errores
        let contenedor_errores = document.querySelector('#errores');
        contenedor_errores.innerHTML = "";
        for(let x =0; x < errores.length; x++){
            const parrafo = document.createElement('p');
            parrafo.innerText = errores[x];
            parrafo.style.color = 'red';
            contenedor_errores.appendChild(parrafo);
        }
        errores = [];
        
        return false;
    
} else {
    
const data = {
    "nombre": nombre.value,
    "aPaterno": aPaterno.value,
    "aMaterno": aMaterno.value,
    "rol_id": rol_id.value,
    "email": email.value,
    "password": password.value,
    "avatar": formData
}
formData.append('avatar', avatar.files[0]);
formData.append('data',JSON.stringify(data));
const settings = {
    "method": "POST",        
    "body": formData,
    'mode': 'cors'
}

fetch("https://geek-on.herokuapp.com/usuarios/registro", settings)
.then(res => {
    //console.log(res);
    return res.json();
})
.then(info => {
    if(info.status == 400){
        errores = info.errores;
        cargarErrores(errores);
    } else if(info.status == 200){
        alert("Usuario registrado con exito");
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        password.value = "";
        materno.value = ""

    }
    console.log(info);
})    

}



    return false;
}

function cargarErrores(errores) {
    if(errores.length > 0){
        //busco el div con el id errores
        let contenedor_errores = document.querySelector('#errores');
        contenedor_errores.innerHTML = "";
        for(let x =0; x < errores.length; x++){
            const parrafo = document.createElement('p');
            parrafo.innerText = errores[x];
            parrafo.style.color = 'red';
            contenedor_errores.appendChild(parrafo);
        }
        errores = [];
        
        return false;
    }
}


function cargarImagen() {    
    var file = document.getElementById('avatar').files[0];    
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    if(file != undefined){
        reader.onload = function(e)  {
            var image = document.createElement("img");
            // the result image data
            image.src = e.target.result;
            let contenedor_img = document.querySelector('.img-avatar');
            if(contenedor_img.childElementCount > 0){
                contenedor_img.innerHTML = "";
            }        
            contenedor_img.appendChild(image)            
         }
         // you have to declare the file loading
         reader.readAsDataURL(file);
    }
   
 }