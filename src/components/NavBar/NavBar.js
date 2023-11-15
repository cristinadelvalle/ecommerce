
import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";


const NavBar = () => {
  return (
    <nav className="hero is-primary">
      <h3>Ecommerce</h3>
      <div>
        <button className="button is-primary is-light">Remeras</button>
        <button className="button is-primary is-light">Jeans</button>
        <button className="button is-primary is-light">Camperas</button>

        <h1><CartWidget/></h1>
       
      </div>
    </nav>
  );
};

export default NavBar;
