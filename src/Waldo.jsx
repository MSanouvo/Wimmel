import { useState, useRef } from "react";
import TargetList from "./Components/targetList/targetList";
import Timer from "./Components/timer/timer";
import ImageContainer from "./Components/imageContainer/imageContainer";
import StartModal from "./Components/startModal/startModal";
import GameOver from "./Components/gameOverModal/gameOverModal";
import ScoreBoard from "./Components/scoreModal/scoreModal";
import TargetSelect from "./Components/targetSelect/targetSelect";
import Message from "./Components/gameMessage/gameMessage";
import Footer from "./Components/footer/footer";
import Styles from "./Waldo.module.css"
const hostURL = import.meta.env.VITE_API_URL

export default function Waldo() {
    const [gameState, setGameState] = useState('waiting')
    const [targets, setTargets] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const [timer, startTimer] = useState(false)
    const [xCoord, setXCoord] = useState('')
    const [yCoord, setYCoord] = useState('')
    const [targetSelect, openTargetSelect] = useState(false)
    const [totalTime, setTotalTime] = useState('')
    const [loading, setLoading] = useState(false)
    const [foundTargets, setFoundTargets] = useState([])
    //Message Component
    const [hitStatus, setHitStatus] = useState('')
    const timeout = useRef(null)


    async function startGame() {
        //Change the react state to open/close modal
        setLoading(true)
        setGameState('loading')
        setFoundTargets([])
        try {
            const response = await fetch(`${hostURL}/game/start`, {
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
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
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
            const response = await fetch(`${hostURL}/game/target`, {
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
                setFoundTargets(foundTargets => [...foundTargets,name] )
                setTotalTime(json.time)
                startTimer(false)
                setGameState('game over')
            }
            if(json.hit === true){
                setFoundTargets(foundTargets => [...foundTargets,name] )
            }
            messageTimer(json.hit)
        } catch (e) {
            console.log(e)
        }
        openTargetSelect(false)
    }

    function messageTimer(status) {
        if (status === false) setHitStatus('miss')
        else setHitStatus('hit')
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            setHitStatus('')
        }, 3000)
    }

    return (
        <div className={Styles.container}>
            <nav className={Styles.nav}>
                <h1 className={Styles.navHeader}>Wimmel</h1>
                <div>
                    {gameState != 'waiting' && gameState != 'loading' && (
                        <TargetList targets={targets} found={foundTargets} />
                    )}
                </div>

            </nav>
            <main className={Styles.content}>
                <Message status={hitStatus} />

                {targetSelect != false && (
                    <TargetSelect
                        x={xCoord}
                        y={yCoord}
                        callback={sendHit}
                        targets={targets}
                    />
                )}

                {loading != false && (
                    <div className={Styles.loaderContainer}>
                        <div className={Styles.loader}></div>
                    </div>

                )}
                {gameState != 'waiting' && gameState != 'loading' && (
                    <section>
                        {gameState === 'game over' || gameState === 'replay' ? (
                            <Timer start={timer} total={totalTime} />
                        ) : (
                            <Timer start={timer} total={0} />
                        )}
                        <ImageContainer url={hostURL + imageUrl} callback={getCoordinates} />
                    </section>

                )}

                {renderModal(gameState)}
            </main>


            <Footer />
        </div>
    )
}