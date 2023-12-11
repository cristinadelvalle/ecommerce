
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>
      <div>

      <NavLink to="/category/men" className={({isActive}) => isActive ? "ActiveOption" : "Option" }>Men clothing</NavLink>
        <NavLink to="/category/women" className={({isActive}) => isActive ? "ActiveOption" : "Option" }>Women clothing</NavLink>
        <NavLink to="/category/electronics" className={({isActive}) => isActive ? "ActiveOption" : "Option" }>Electronics</NavLink>


        {/* <NavLink to={"/category/men's clothing"} className={({isActive}) =>isActive ? "ActiveOption" : "Option" }>Men clothing</NavLink>
        <NavLink to={"/category/women's clothing"} className={({isActive}) =>isActive ? "ActiveOption" : "Option" }>Women clothing</NavLink>
        <NavLink to={"/category/electronics"} className={({isActive}) =>isActive ? "ActiveOption" : "Option" }>Electronoics</NavLink> */}
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
