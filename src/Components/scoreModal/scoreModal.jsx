import { useEffect, useState } from "react";

export default function ScoreBoard() {
    const [leaderboard, setLeaderboard] = useState([])


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
                console.log([json])
                setLeaderboard([json])
            } catch (e) {
                console.log(e)
            }
        }

        fetchScores()
    }, [])

    return (
        <dialog open>
            {leaderboard.map((score) => {
                return (
                    <div key={score.id}>
                        <p>{score.name}</p>
                        <p>{score.time}</p>
                    </div>
                )
            })}
        </dialog>
    )
}