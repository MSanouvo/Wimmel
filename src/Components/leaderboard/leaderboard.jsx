import { useState, useEffect } from "react";
import Styles from "./leaderboard.module.css"
import PropTypes from "prop-types";
const hostURL = import.meta.env.VITE_API_URL

export default function Leaderboard({ current }) {
    const [leaderboard, setLeaderboard] = useState([])

    function secondsToTime(time) {
        const hour = Math.floor(time / 3600).toString().padStart(2, '0')
        const min = Math.floor(time % 3600 / 60).toString().padStart(2, '0')
        const sec = Math.floor(time % 60).toString().padStart(2, '0')
        return hour + ':' + min + ':' + sec;
    }

    useEffect(() => {
        async function fetchLeaderboard() {
            try {
                const response = await fetch(`${hostURL}/game/leaderboard`, {
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
                console.log(json.leaderboard)
                setLeaderboard(json.leaderboard)
            } catch (e) {
                console.log(e)
            }
        }

        fetchLeaderboard()
    }, [])

    return (
        <div className={Styles.container}>
            {leaderboard.map((score) => {
                if (score.id === current) {
                    return (
                        <div className={Styles.currentScore} key={score.id} >
                            <h2>{score.name}</h2>
                            <p>{secondsToTime(score.completion_time)}</p>
                        </div>
                    )
                } else {
                    return (
                        < div className={Styles.score} key={score.id} >
                            <h2>{score.name}</h2>
                            <p>{secondsToTime(score.completion_time)}</p>
                        </div>
                    )
                }

            })}
        </div >
    )
}

Leaderboard.propTypes = {
    current: PropTypes.number
}
