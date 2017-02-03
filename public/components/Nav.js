const Nav = (props) => (

  <div id='nav'>
    <ul className="nav-ul">
      <Login />
      <Search searchInput={props.searching} />
    </ul>
  </div>

);

window.Nav = Nav;