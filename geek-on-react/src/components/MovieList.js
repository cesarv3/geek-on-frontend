
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
      </tr>
      ))}
		</tbody>
  )
}

export default MoviesList