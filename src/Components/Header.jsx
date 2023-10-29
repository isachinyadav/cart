import { useSelector } from "react-redux";
import "../styles/header.scss";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom"
const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);

  return (  

  <nav>
  <h2>Login Here</h2>
  <div>
  <Link to={''}>
  Home
  </Link>
  <Link to={'/cart'}>
  <FiShoppingBag/>
  <p>{cartItems.length}</p>
  </Link>
  </div>
  
  </nav>
  )
}

export default Header