import { useState } from "react";
import TargetList from "./Components/targetList/targetList";
import Timer from "./Components/timer/timer";
import ImageContainer from "./Components/imageContainer/imageContainer";
import StartModal from "./Components/startModal/startModal";
import GameOver from "./Components/gameOverModal/gameOverModal";
import ScoreBoard from "./Components/scoreModal/scoreModal";

export default function Waldo(){
    const [gameState, setGameState] = useState('waiting')
    const [targets, setTargets] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const [timer, startTimer] = useState(false)

    async function startGame() {
		//Change the react state to open/close modal
		try {
			const response = await fetch(`http://localhost:3000/game/start`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (!response.ok) {
				throw new Error(`Error ${response.status}`)
			}
			const json = await response.json()
			console.log(json)
		} catch (e) {
			console.log(e)
		}
		console.log('Game starting')
	}

    function renderModal(state){
        switch(state) {
            case 'waiting':
                return <StartModal callback={startGame} />;
            case 'game over':
                return <GameOver />;
            case 'replay':
                return <ScoreBoard />
        }
    }

    return(
        <div>
            <nav>
                <h1>Waldo</h1>
                {gameState != 'waiting' && (
                    <TargetList />
                )}
            </nav>

            <Timer />
            <ImageContainer />

            {renderModal(gameState)}
        </div>
    )
}