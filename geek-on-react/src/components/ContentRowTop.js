import React from 'react';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import { useState, useEffect } from 'react';
function ContentRowTop(){
	let [producto,setProducto] = useState({});
	
	useEffect(()=>{
		fetch("https://geek-on.herokuapp.com/productos/last")
		.then(resp => {
			return resp.json();
		})
		.then(ultimo => {
			console.log(ultimo);
			setProducto(ultimo);
			console.log(producto);
			
		}).catch(error => {
			console.log(error);
		})
	},[])
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Geek On Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado a la Base de Datos</h5>
								</div>
								<div className="card-body">
									<div className="text-center"> 
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={producto?.data?.imagen} alt="No se cargo"/>
									</div>									
									<h3>{producto?.data?.nombre}</h3>
									<p>{producto?.data?.descripcion}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href={"https://geek-on.herokuapp.com/productos/"+producto?.data?.id}>Detalle del producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;