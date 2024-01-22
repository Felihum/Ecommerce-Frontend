import "./index.css"
import img from '../../../images/god-ragnarok.jpg'
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

function GameCard(){
    return(
        <div className="gameCard">
            <div className="imgGame">
                <img src={img} />
            </div>
            <div className="description">
                <h1 className="title">God of War: Ragnarok</h1>
                <p className="price">$ 50,00</p>
                <button className="btnCarrinho"><IoCartOutline id="icon-cart" /><FaPlus id="icon-plus" /></button>
            </div> 
        </div>
    )
}

export default GameCard;