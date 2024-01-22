import GameCard from "../GameCard/index.jsx";
import "./index.css"

function GameShow(){
    return(
        <div className="containerGeral">
            <GameCard></GameCard>
            <GameCard></GameCard>
            <GameCard></GameCard>
            <GameCard></GameCard>
            <GameCard></GameCard>
        </div>
    )
}

export default GameShow;