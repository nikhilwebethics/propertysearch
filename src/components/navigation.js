import "./navigation.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <><h1>codesphere</h1>
            <ul>

                <li className="tag"><p className="badge">Properties</p>  </li>
                <li className="navp"> <Link to="/">Rent</Link></li>
                <li className="navp"> <Link to="/sell">Sell</Link></li>

            </ul>
        </>
    )
}
export default Navbar;