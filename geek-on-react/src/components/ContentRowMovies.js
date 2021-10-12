import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 0,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total de usuarios",
    valor: 0,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Total de categorias",
    valor: 0,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    let [cardPropsList,setCardProps] = useState(cardProps);    
    

useEffect( () => {
    function getProductos() {
        return fetch("http://localhost:4000/productos/")
        .then(resp => {
            return resp.json();
        })
    };

    function getUsuarios(){
        return fetch("http://localhost:4000/usuarios/")
        .then(resp => {
            return resp.json();
        })    
    };
    function getCategorias(){
        return fetch("http://localhost:4000/categorias/")
        .then(resp => {
            return resp.json();
        })
    };

    function getAll(){ return Promise.all([getProductos(),getUsuarios(), getCategorias()])}
    getAll()
    .then(([productos,usuarios,categorias]) => {
       const  cardPropsListCopy =[...cardPropsList];
       cardPropsListCopy[0].valor = productos.total;
        //setCardProps(cardPropsList);
        cardPropsListCopy[1].valor = usuarios.total;    
        //setCardProps(cardPropsList);
        cardPropsListCopy[2].valor = categorias.total;    
        setCardProps(cardPropsListCopy);
    })
},[]);


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardPropsList.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;