import "./index.css"
import img from '../../../images/god-ragnarok.jpg'

function GameCard(){
    return(
        <div className="gameCard">
            <div className="imgGame">
                <img src={img} />
            </div>
            <div className="description">
                <h1 className="title">God of War: Ragnarok</h1>
                <p className="price">$ 50,00</p>
            </div> 
        </div>
    )
}

export default GameCard;