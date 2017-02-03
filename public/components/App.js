class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state={
      searchResult:[],
      image:'',
      name:'',
      genre:''
    }    
  }

  componentDidMount() {
    this.getMovies();
  }

  handleSearch (e) {
    var text = e.target.value;
    this.getMovies(text);
  }

  getMovies(inputText) {
     
     inputText = inputText || 'jason bourne';

    $.ajax({
      method:'GET',
      dataType: "json",
      header:'application/json',
      url:'http://api.themoviedb.org/3/search/movie?api_key=56f7c3af5c83bb35442e6706243ef578&query='+inputText,
      success: function(data) {
        this.setState({
          searchResult: data.results
        });
      }.bind(this),
      error: function(err) {
      }.bind(this)
    });
  }

  render() {
    return(
      <div>
        <Nav searching={this.handleSearch.bind(this)} />
        <Movies movieList={this.state.searchResult} /> 
      </div>
    );
  }
}

window.App = App;