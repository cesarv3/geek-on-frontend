const selectItemCategorias = document.querySelector('#category');
//let validator = function(){"use strict";var e=function(){this.config={resumeOnFailed:!1}},r=r?r:new e,t=[],n={dateFormat:function(e,r){var t={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(r)&&(r=r.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(r)&&(r=r.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return r},extend:function(e,r){for(var t in r)e[t]=r[t];return e},inArray:function(e,r){for(var t=0;t<e.length;t++)if(e[t]===r)return!0;return!1},split:function(e,r,t){if(!e)return[];for(var n=e.split(t),a=[],i=0;i<n.length;i++)for(var u=n[i].split(r),s=0;s<u.length;s++)i>0&&0===s?a[a.length-1]+=r+u[s]:a.push(u[s]);return a},"typeof":function(e){var r=Object.prototype.toString.call(e),t=(r=r.split(" "))&&r.length>1?r[1].substr(0,r[1].length-1):"";return t.toLowerCase()},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")}};e.prototype.requires={required:function(e,r){return!!e[r]},required_if:function(){if(arguments.length<4||arguments.length%2!=0)return!1;for(var e=arguments[0],r=arguments[1],t=2;t<arguments.length;t+=2){var n=arguments[t],a=arguments[t+1];if(!e[n]||e[n]!=a)return!0}return this.requires.required(r)},required_with:function(){if(arguments.length<3)return!1;for(var e=arguments[0],r=arguments[1],t=2;t<arguments.length;t++)if(arguments[t]in e)return this.requires.required(r);return!0},required_with_all:function(){if(arguments.length<3)return!1;for(var e=arguments[0],r=arguments[1],t=2;t<arguments.length;t++)if(!(arguments[t]in e))return!0;return this.requires.required(r)},required_without:function(){if(arguments.length<3)return!1;for(var e=arguments[0],r=arguments[1],t=2;t<arguments.length;t++)if(!(arguments[t]in e))return this.requires.required(r);return!0},required_without_all:function(){if(arguments.length<3)return!1;for(var e=arguments[0],r=arguments[1],t=2;t<arguments.length;t++)if(arguments[t]in e)return!0;return this.requires.required(r)}},e.prototype.validators={accepted:/^(yes|on|1|true)$/i,after:function(e,r,t){var n=Date.parse(t),a=Date.parse(r);return isNaN(n)||isNaN(a)?!1:a>n},alpha:/^[A-Za-z]+$/,alpha_dash:/^[0-9A-Za-z_-]+$/,alpha_num:/^[0-9A-Za-z]+$/,array:function(e,r){return"[object Array]"===Object.prototype.toString.apply(r)},before:function(e,r,t){var n=Date.parse(t),a=Date.parse(r);return isNaN(n)||isNaN(a)?!1:n>a},between:function(e,r,t,a){var i=!1;switch(t=Number(t),a=Number(a),n["typeof"](r)){case"string":i=r.localeCompare(t)>=0&&r.localeCompare(a)<=0;break;case"number":i=r>=t&&a>=r;break;case"filelist":i=!!r.length;for(var u in r)if(i&&r.hasOwnProperty(u)&&"file"===n["typeof"](r[u])){var s=r[u];if(i=i&&parseInt(s.size/1024)>=t&&parseInt(s.size/1024)<=a,!i)break}break;case"file":i=parseInt(r.size/1024)>=t&&parseInt(r.size/1024)<=a}return i},"boolean":/^(true|false|1|0|"1"|"0"|'1'|'0')$/i,date:function(e,r){return!isNaN(Date.parse(r))},date_format:function(e,r,t){var a=new Date(Date.parse(r)),i=n.dateFormat(a,t);return r===i},different:function(e,r,t){return r!=e[t]},digits:function(e,r,t){var n=new RegExp("^[0-9]{"+t+"}$");return n.test(r)},digits_between:function(e,r,t,n){var a=new RegExp("^[0-9]{"+t+","+n+"}$");return a.test(r)},email:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,"in":function(){return arguments.length<=2?!1:n.inArray(Array.prototype.slice.call(arguments,2),arguments[1])},integer:function(e,r){return"number"===n["typeof"](r)&&isFinite(r)&&(0|r)===r},ip:function(e,r){var t=/((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/,n=/^((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?$/;return t.test(r)||n.test(r)},max:function(e,r,t){var a=!1;switch(t=Number(t),n["typeof"](r)){case"string":a=r.localeCompare(t)<=0;break;case"number":a=t>=r;break;case"filelist":a=!!r.length;for(var i in r)if(a&&r.hasOwnProperty(i)&&"file"===n["typeof"](r[i])){var u=r[i];a=a&&parseInt(u.size/1024)<=t}break;case"file":a=parseInt(r.size/1024)<=t}return a},mimes:function(){if(arguments.length<=2)return!1;var e,r,t=arguments[1],n=/\.([^\.]*)?$/;return null===(e=n.exec(t))||e.length<2?!1:(r=e[1],this.validators.inArray(Array.prototype.slice.call(arguments,2),r))},min:function(e,r,t){var a=!1;switch(t=Number(t),n["typeof"](r)){case"string":a=r.localeCompare(t)>=0;break;case"number":a=r>=t;break;case"filelist":a=!!r.length;for(var i in r)if(a&&r.hasOwnProperty(i)&&"file"===n["typeof"](r[i])){var u=r[i];if(a=a&&parseInt(u.size/1024)>=t,!a)break}break;case"file":a=parseInt(r.size/1024)>=t}return a},not_in:function(){return arguments.length<=2?!1:!this.validators.inArray(Array.prototype.slice.call(arguments,2),arguments[1])},numeric:function(e,r){return"number"===n["typeof"](r)&&isFinite(r)},regex:function(e,r,t){var n=new RegExp(t);return n.test(r)},same:function(e,r,t){return r===e[t]},size:function(e,r,t){var a=!1;switch(t=Number(t),n["typeof"](r)){case"string":a=t===r.length;break;case"number":a=r===t;break;case"filelist":a=!!r.length;for(var i in r)if(a&&r.hasOwnProperty(i)&&"file"===n["typeof"](r[i])){var u=r[i];a=a&&parseInt(u.size/1024)===t}break;case"file":a=parseInt(r.size/1024)===t}return a},string:function(e,r){return"string"===n["typeof"](r)},url:/^((https|http|ftp|rtsp|mms)?:\/\/)?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*\'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+\/?)$/},e.prototype.add=function(e,r){"function"===n["typeof"](r)||"regexp"===n["typeof"](r)?this.validators[e]=r:console.error("Invalid validator function or regular expression!")},e.prototype.setConfig=function(e){this.config=n.extend(this.config,e)};var a=function(e){for(var r=n.split(e,"|","\\|"),t=[],a=0;a<r.length;a++){var i=n.split(r[a],":","\\:");if(i.length){var u=i[0],s=[];2===i.length&&(s=n.split(i[1],",","\\,")),u=n.trim(u);for(var f=0;f<s.length;f++)s[f]=n.trim(s[f]);t.push({key:u,value:s})}}return t},i=function(e,t,a,i){if(!(a.key in t))return!0;var u=t[a.key];return"function"===n["typeof"](u)?(a.value.unshift(e,i),u.apply(r,a.value)):"RegExp"===u.constructor.name?u.test(i):void 0},u=function(e,r){for(var s in r){var f,o=r[s];if("object"===n["typeof"](o)&&s in e){if(u.apply(this,[e[s],r[s]])||this.config.resumeOnFailed)continue;return!1}"string"===n["typeof"](o)&&(f=a(o));for(var d=0;d<f.length;d++){{var l=f[d].key;f[d].value}if((!i(e,this.requires,f[d],s)||s in e&&!i(e,this.validators,f[d],e[s]))&&(t.push({object:e,field:s,rule:l}),!this.config.resumeOnFailed))return!1}}return!0};e.prototype.validate=function(e,r){if("string"===n["typeof"](e))try{e=JSON.parse(e)}catch(a){return{status:"failed",rejects:[{object:"Invalid JSON string!"}]}}return t=[],u.apply(this,[e,r]),{status:t.length?"failed":"success",rejects:t}},"undefined"!=typeof require&&"undefined"!=typeof module&&"undefined"!=typeof exports?module.exports=new e:"undefined"!=typeof define?define.amd?define(function(){return new e}):define.cmd&&define(function(r,t,n){n.exports=new e}):"undefined"!=typeof window&&(window.Validator=new e)}();
//var validator = require('validator');

let errores = [];
const categorias = fetch("http://localhost:3000/categorias/")
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

const selectItemEstatus = document.querySelector('#estatus');
const estatuses = ['agotado','disponible','pocas_unidades'];
estatuses.map(elemento => {        
        const opcion = document.createElement("option");
        opcion.textContent = elemento;
        opcion.value = elemento;
        selectItemEstatus.appendChild(opcion);
    })

function doActionRegistro(){
    let formData = new FormData();
    const nombre = document.querySelector('#name');
    const price = document.querySelector('#price');
    const discount = document.querySelector('#discount');
    const image = document.querySelector('#image');
    const image_img = document.querySelector('#img-prod');        
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
    console.log(typeof price.value);

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
        "descripcion": description.value
    }
    formData.append('image', image.files[0]);
    formData.append('data',JSON.stringify(data));
    const settings = {
        "method": "POST",
        
        "body": formData
    }

    fetch("http://localhost:3000/productos/crear", settings)
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


 