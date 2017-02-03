const Movie = (props) => {
  
  var source = '';
  if(props.singleMovie.poster_path !== null) {
  	source = "http://image.tmdb.org/t/p/w500/"+props.singleMovie.poster_path;
  } else {
  	source = 'noimage.png';
  }

  return(
	<div>
	  <section>
	    <img src={source} height="400" width="300" />
	  </section>
	  <section>
	    <p><strong>{props.singleMovie.title}</strong>  Release Date : {props.singleMovie.release_date}</p>
	  </section>
	</div>
  );
};

window.Movie = Movie;