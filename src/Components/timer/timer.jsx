import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    function secondsToTime(time) {
        const hour = Math.floor(time / 3600).toString().padStart(2, '0')
        const min = Math.floor(time % 3600 / 60).toString().padStart(2, '0')
        const sec = Math.floor(time % 60).toString().padStart(2, '0')

        return hour + ':' + min + ':' + sec;
    }

    //Pass down start from parent component when game begins
    useEffect(() => {
        if (start === true) {
            const key = setInterval(() => {
                setTime(time => time + 1)
            }, 1000);

            return () => {
                clearInterval(key);
            };
        }
    }, [start])

    return (
        <div>
            <p>Time:</p>
            <p>{secondsToTime(time)}</p>
            <button onClick={()=> setStart(true)}>Start Timer</button>
        </div>
    )
}