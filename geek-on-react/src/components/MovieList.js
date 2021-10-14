// function eliminar(movie){
//   if(confirm("Desea eliminar el producto? ")){
//     console.log("borrado");
//   } else {
//     console.log("cancelado");
//   }
// }
function MoviesList({ movies }) {
  
  return(
    <tbody>
      {movies?.map(movie => (
        <tr key={movie?.id}>
        <td>{movie?.id}</td>
        <td>{movie?.nombre}</td>
        <td>{movie?.descripcion}</td>
        <td>{movie?.categoria_id}</td>
        <td>{movie?.price}</td>
        <td>{movie?.estatus}</td>
        <td><button className="btn btn-danger" onClick={() => {if(window.confirm('Eliminar producto?')){eliminar(movie)};}}>Eliminar</button>
        <button className="btn btn-success" onClick={() => {if(window.confirm('Actualizar producto?')){actualizar(movie);};}}>Actualizar</button></td>        
      </tr>
      ))}
		</tbody>
  )
}

function eliminar(producto){
  fetch("https://geek-on.herokuapp.com/productos/"+producto.id,{
    
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .then(resp => {
    resp.json()
  })
  .then(window.location.replace("https://dashboard-geek-on.herokuapp.com/"));
}

function actualizar(producto){
  window.location.replace("https://geek-on-front.herokuapp.com/productos/actualizar/"+producto.id);
}

export default MoviesList