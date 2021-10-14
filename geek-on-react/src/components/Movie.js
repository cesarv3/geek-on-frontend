import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function Movie() {
  let [state, setState] = useState([]);

  // constructor() {
  // 	super()
  // 	this.state = {
  // 		moviesList: []
  // 	}
  // }

  // componentDidMount() {
  // 	fetch('http://localhost:3000/productos')
  // 	.then(response => response.json())
  // 	.then(res => {
  // 			this.setState({ moviesList: res.data})
  // 	})
  // }
  useEffect(() => {
    fetch("https://geek-on.herokuapp.com/productos/")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setState({ moviesList: res.data });
      });
  }, []);

  //render() {
  return (
    <React.Fragment>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className="h3 mb-2 text-gray-800">
        Todos los productos en la Base de datos
      </h1>

      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              {<MovieList movies={state.moviesList} />}
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
//}

export default Movie;
