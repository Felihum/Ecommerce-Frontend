import { Link } from "react-router-dom";
import "./index.css"
import { IoCartOutline } from "react-icons/io5";

function NavBar(){
    return(
        <nav className="navbar">
            <div className="cnt-logo">
                <Link to="/">Home</Link>
            </div>
            <div className="cnt-mid">
                <div className="btn-mid btn-biblioteca">
                    <Link to="#">Biblioteca</Link>
                </div>
                <div className="btn-mid btn-categoria">
                    <Link to="#">Categorias</Link>
                    <i id="icon-arrow" className='bx bx-chevron-down'></i>
                </div>  
            </div>
            <div className="cnt-end">
                <Link to="#" id="btn-profile">Profile</Link>
                <i id="icon-arrow" className='bx bx-chevron-down'></i>
            </div>
            <div className="cnt-end">
                <Link to="#" id="btn-carrinho"><IoCartOutline /></Link>
            </div>
        </nav>        
    )
}

export default NavBar;