import { Link } from "react-router-dom";
import "./index.css"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="cnt-logo">
                <Link to="/">Home</Link>
            </div>
            <div className="cnt-mid">
                <Link to="#">Biblioteca</Link>
                <div className="btn-categoria">
                    <Link to="#">Categorias</Link>
                    <i id="icon-arrow" className='bx bx-chevron-down'></i>
                </div>  
            </div>
            <div className="cnt-end">
                <Link to="#" id="btn-profile">Profile</Link>
                <i id="icon-arrow" className='bx bx-chevron-down'></i>
            </div>
        </nav>        
    )
}

export default NavBar;