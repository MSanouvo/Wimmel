// import { useState } from "react"
import Character from "../characterIcon/characterIcon"
import PropTypes from "prop-types"
import Styles from "./targetSelect.module.css"

export default function TargetSelect({ x, y, callback , targets }) {

    function submitTarget(name) {
        console.log(`submitting target ${name}`)
        callback(name)
    }

    return (
        <dialog 
        open 
        className={Styles.container}
        style={{
            position: 'absolute',
            top: `${y}px`,
            left: `${x+150}px`
        }}>
            {targets.map((target) => {
                console.log(target)
                return (
                    <button className={Styles.button} key={target.id} onClick={() => submitTarget(target.name)}>
                        <Character
                            url={target.Icons[0].url}
                            name={target.name}
                        />
                    </button>

                )
            })}
        </dialog>
    )

}

TargetSelect.propTypes = {
    callback: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    targets:PropTypes.array.isRequired
}