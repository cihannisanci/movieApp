const Search = (props) => (

  <div>
    <form>
      <input style={{margin: 14+'px'}} onChange={props.searchInput} type="text"></input>
      <button type="button">Search</button>
    </form>
  </div>
);

window.Search = Search;