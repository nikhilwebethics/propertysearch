import navigation from "./navigation.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <ul>
                <li className="tag"><a className="badge">Properties</a>  </li>
                <li className="navp"> <Link to="/">Rent</Link></li>
                <li className="navp"> <Link to="/sell">Sell</Link></li>

            </ul>
        </>
    )
}
export default Navbar;