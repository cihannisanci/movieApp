const Movies = (props) => (

  <div>
    {props.movieList.map((movieItem, index) => <Movie key={index} singleMovie={movieItem} />)}
  </div>
);

window.Movies = Movies;