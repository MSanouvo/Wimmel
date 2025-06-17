// import { useState } from "react"
import Character from "../characterIcon/characterIcon"
import PropTypes from "prop-types"
import Styles from "./targetSelect.module.css"

export default function TargetSelect({ x, y, callback }) {
    // const [coordinates, setCoordinates] = useState('')

    function submitTarget(id, name) {
        console.log(`submitting target ${id}`)
        callback(name)
    }

    const targets = [
        { id: 1, imageURL: 'url', name: 'Dummy1' },
        { id: 2, imageURL: 'url', name: 'Dummy2' },
        { id: 3, imageURL: 'url', name: 'Dummy3' }
    ]

    return (
        <dialog 
        open 
        className={Styles.container}
        style={{
            position: 'absolute',
            top: `${y+100}px`,
            left: `${x+150}px`
        }}>
            {targets.map((target) => {
                return (
                    <button key={target.id} onClick={() => submitTarget(target.id, target.name)}>
                        <Character
                            url={target.imageURL}
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
    x:PropTypes.number.isRequired,
    y:PropTypes.number.isRequired
}