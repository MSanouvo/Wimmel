import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Styles from "./timer.module.css"

export default function Timer({ start, total }) {
    const [time, setTime] = useState(total)

    function secondsToTime(time) {
        const hour = Math.floor(time / 3600).toString().padStart(2, '0')
        const min = Math.floor(time % 3600 / 60).toString().padStart(2, '0')
        const sec = Math.floor(time % 60).toString().padStart(2, '0')

        return hour + ':' + min + ':' + sec;
    }

    //Pass down start from parent component when game begins
    useEffect(() => {
        if (start === true) {
            setTime(0)
            const key = setInterval(() => {
                setTime(time => time + 1)
            }, 1000);

            return () => {
                clearInterval(key);
            };
        }
    }, [start])

    return (
        <div className={Styles.container}>
            <p>Time:</p>
            {total != 0 ? (
                <p>{secondsToTime(total)}</p>
            ):(
                <p>{secondsToTime(time)}</p>
            )}
            
            {/* <button onClick={()=> setStart(true)}>Start Timer</button> */}
        </div>
    )
}

Timer.propTypes = {
    start: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired
}