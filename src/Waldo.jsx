import { useState } from "react";
import TargetList from "./Components/targetList/targetList";
import Timer from "./Components/timer/timer";
import ImageContainer from "./Components/imageContainer/imageContainer";
import StartModal from "./Components/startModal/startModal";
import GameOver from "./Components/gameOverModal/gameOverModal";
import ScoreBoard from "./Components/scoreModal/scoreModal";
import TargetSelect from "./Components/targetSelect/targetSelect";

export default function Waldo() {
    const [gameState, setGameState] = useState('waiting')
    const [targets, setTargets] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const [timer, startTimer] = useState(false)
    const [xCoord, setXCoord] = useState('')
    const [yCoord, setYCoord] = useState('')
    const [targetSelect, openTargetSelect] = useState(false)
    const [totalTime, setTotalTime] = useState('')


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
            setImageUrl(json.image)
            setTargets(json.targets)
            startTimer(true)
            setGameState('playing')
            console.log(json)
        } catch (e) {
            console.log(e)
        }
        console.log('Game starting')
    }

    function renderModal(state) {
        switch (state) {
            case 'waiting':
                return <StartModal callback={startGame} />;
            case 'game over':
                return <GameOver time={totalTime} callback={openScoreBoard} />;
            case 'replay':
                return <ScoreBoard callback={startGame} />
        }
    }

    function openScoreBoard() {
        setGameState('replay')
    }

    function getCoordinates(x, y) {
        console.log(`Coordinates: ${x}, ${y}`)
        setXCoord(x)
        setYCoord(y)
        openTargetSelect(true)
    }

    async function sendHit(name) {
        try {
            const target = {
                x: xCoord,
                y: yCoord,
                target: name
            }
            console.log(target)
            const response = await fetch(`http://localhost:3000/game/target`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(target)
            });
            if (!response.ok) {
                throw new Error(`Error ${response.status}`)
            }
            const json = await response.json()
            if (json.time != undefined) {
                console.log('game over')
                setTotalTime(json.time)
                startTimer(false)
                setGameState('game over')
            }
            console.log(json)
        } catch (e) {
            console.log(e)
        }
        openTargetSelect(false)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Waldo</h1>
                    {gameState != 'waiting' && (
                        <TargetList />
                    )}
                </div>
            </nav>
        
            {gameState === 'game over' || gameState === 'replay' ? (
                <Timer start={timer} total={totalTime} />
            ):(
                <Timer start={timer} total={0} />
            )}
            

            {targetSelect != false && (
                <TargetSelect 
                x={xCoord}
                y={yCoord}
                callback={sendHit} />
            )}
            {gameState != 'waiting' && (
                <ImageContainer url={imageUrl} callback={getCoordinates} />
            )}

            {renderModal(gameState)}
        </div>
    )
}