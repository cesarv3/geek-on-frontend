const selectItemCategorias = document.querySelector('#category');

let errores = [];
const categorias = fetch("https://geek-on.herokuapp.com/categorias/")
.then(res => {
    return res.json();
})
.then(data => {
    data.data.map(cat => {           
    const opcion = document.createElement("option");
    opcion.textContent = cat.nombre;
    opcion.value = cat.id;
    selectItemCategorias.appendChild(opcion)
    })
});
let objProducto = {};
const selectItemEstatus = document.querySelector('#estatus');
const estatuses = ['agotado','disponible','pocas_unidades'];
estatuses.map(elemento => {        
        const opcion = document.createElement("option");
        opcion.textContent = elemento;
        opcion.value = elemento;
        selectItemEstatus.appendChild(opcion);
    })
    const url =  location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    let product = fetch("https://geek-on.herokuapp.com/productos/"+id)
    .then(response => {
        return response.json();
    }).then(prod => {
        console.log(prod);
     objProducto = prod;
    const nombre = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');
    const image = document.querySelector('#image');           
    const category = document.querySelector('#category');
    const estatus = document.querySelector('#estatus');
    const description = document.querySelector('#description');
    nombre.value = prod.data.nombre;
    price.value = prod.data.price;
    discount.value = prod.data.descuento;
    //image.value = prod.data.imagen;
    fetch(prod.data.imagen)
        .then( res => {            
            return res.blob();
        })
        .then(elemento => {
            console.log(elemento);
            //image.value = elemento;
            console.log(blobToFile(elemento,prod.data.imagen.substring(prod.data.imagen.lastIndexOf('/') + 1)));
            const blobimg = blobToFile(elemento,prod.data.imagen.substring(prod.data.imagen.lastIndexOf('/') + 1));
            cargarImagen2(blobimg);

        })
    cargarImagen();
    category.value = prod.data.categoria_id;
    estatus.value = prod.data.estatus;
    description.value = prod.data.descripcion;
        
    })
    function blobToFile(theBlob, fileName){
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }
function doActionRegistro(){
    let formData = new FormData();
    const nombre = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');
    const image = document.querySelector('#image');           
    const category = document.querySelector('#category');
    const estatus = document.querySelector('#estatus');
    const description = document.querySelector('#description');
    
    if(nombre.value == ""){
        errores.push("El nombre no puede estar vacio");        
    }
    if(nombre.value.length < 3){
        errores.push("El nombre debe tener por lo menos 3 caracteres")
    }
    if(price.value == ""){
        errores.push("El precio no puede estar vacio");        
    }    

    if(price.value < 0){
        errores.push("El precio debe ser un numero positivo");
    }
    if(description.value == ""){
        errores.push("La descripcion no puede estar vacia");        
    }
    if(image.value == ""){
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
    }
    
    const data = {
        "nombre": nombre.value,
        "price": price.value,
        "descuento": discount.value,
        "image": formData,
        "categoria_id": category.value,
        "estatus": estatus.value,
        "descripcion": description.value,
        "image_old": objProducto.data.imagen
    }
    
    formData.append('image', image.files[0]);
    formData.append('data',JSON.stringify(data));
    const settings = {
        "method": "PUT",
        
        "body": formData
    }
    console.log(objProducto.data);
    fetch("https://geek-on.herokuapp.com/productos/actualizar/"+objProducto.data.id, settings)
    .then(res => {
        return res.json();
    })
    .then(info => {
        if(info.status == 200){
            alert("Elemento creado con éxito");
            nombre.value = "";
            price.value = "";
            discount.value = "5";
            image.value = "";
            category.value = "5";
            estatus.value = "agotado"
            description.value = "";
        }
        console.log(info);
    })
    return false;
}

function cargarImagen() {    
    var file = document.getElementById('image').files[0];    
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    if(file != undefined){
        reader.onload = function(e)  {
            var image = document.createElement("img");
            // the result image data
            image.src = e.target.result;
            let contenedor_img = document.querySelector('.img-producto');
            if(contenedor_img.childElementCount > 0){
                contenedor_img.innerHTML = "";
            }        
            contenedor_img.appendChild(image)            
         }
         // you have to declare the file loading
         reader.readAsDataURL(file);
    }
   
 }

 function cargarImagen2(imagen) {    
    var file = imagen;
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    if(file != undefined){
        reader.onload = function(e)  {
            var image = document.createElement("img");
            // the result image data
            image.src = e.target.result;
            let contenedor_img = document.querySelector('.img-producto');
            if(contenedor_img.childElementCount > 0){
                contenedor_img.innerHTML = "";
            }        
            contenedor_img.appendChild(image)            
         }
         // you have to declare the file loading
         reader.readAsDataURL(file);
    }
   
 }


 