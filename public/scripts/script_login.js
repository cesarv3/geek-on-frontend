let errores = [];
function doActionLogin(){
    
const email = document.querySelector('#email');
const password = document.querySelector('#password');

if(email.value == ""){
    errores.push("El correo no puede estar vacio");    
}

if(password.value == ""){
    errores.push("El password no puede estar vacio");
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

}

const data = {
    "email": email.value,
    "password": password.value
}
const settings = {
    "method": "POST",
    "headers": {
        "content-type": "application/json",        
    },
    "body": JSON.stringify(data)
}
//No funciona usando el boton, por el POST supongo
// fetch("https://geek-on.herokuapp.com/usuarios/25")
// .then(response => {
//     return response.json()
// })
// .then(inf => {
//     console.log(inf);
// })
// .catch(e=>{
//     console.log(e);
// })

fetch("https://geek-on.herokuapp.com/usuarios/login", settings)
.then(res => {
    //console.log(res);
    return res.json();
})
.then(info => {
    console.log(info);
    
    if(info.errors.length > 0){
        errores = info.errors;
        console.log(info,errors);

    
    //busco el div con el id errores
    let contenedor_errores = document.querySelector('#errores');        
    contenedor_errores.innerHTML = "";
    for(let x =0; x < errores.length; x++){
        const parrafo = document.createElement('p');
        parrafo.innerText = errores.msg[x];
        parrafo.style.color = 'red';
        contenedor_errores.appendChild(parrafo);
    }
    errores = [];
    
    return false;    



    } else {
        window.location.replace("https://geek-on-front.herokuapp.com/")
    }
})
.catch(function(error){
    console.error(error)
})

console.log(email.value);
console.log(password.value);
return false;

}
