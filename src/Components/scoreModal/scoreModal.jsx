import { useEffect, useState } from "react";
import Button from "../button/button";
import PropTypes from "prop-types";
import Styles from "./scoreModal.module.css"
import Leaderboard from "../leaderboard/leaderboard";

export default function ScoreBoard({ callback }) {
    const [score, setScore] = useState([])
    const [tab, setTab] = useState('score')
    const [currentScore, setCurrentScore] = useState('')

    function secondsToTime(time) {
        const hour = Math.floor(time / 3600).toString().padStart(2, '0')
        const min = Math.floor(time % 3600 / 60).toString().padStart(2, '0')
        const sec = Math.floor(time % 60).toString().padStart(2, '0')
        return hour + ':' + min + ':' + sec;
    }

    useEffect(() => {
        //API call to get scores from DB
        async function fetchScores() {
            try {
                const response = await fetch(`http://localhost:3000/game/score`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                if (!response.ok) {
                    throw new Error(`Error ${response.status}`)
                }
                const json = await response.json()
                console.log(json)
                setScore(json)
                setCurrentScore(json.id)
            } catch (e) {
                console.log(e)
            }
        }

        fetchScores()
    }, [])

    return (
        <dialog
            open
            className={Styles.modal}
        >
            <div className={Styles.tabButton}>
                <button onClick={() => setTab('score')}>Score</button>
                <button onClick={() => setTab('leaderboard')}>Leaderboard</button>
                {/* <Button text="Score" callback={()=> setTab('score')} />
                <Button text="Leaderboard" callback={()=> setTab('leaderboard')} /> */}
            </div>


            {tab === 'score' && (
                <div className={Styles.container}>
                    <div className={Styles.score} key={score.id}>
                        <h2 className={Styles.player}>{score.name}</h2>
                        <p>{secondsToTime(score.time)}</p>
                    </div>
                    <Button text="Play Again" callback={callback} />
                </div>
            )}

            {tab === 'leaderboard' && (
                <Leaderboard current={currentScore} />
            )}


        </dialog>
    )
}

ScoreBoard.propTypes = {
    callback: PropTypes.func.isRequired
}