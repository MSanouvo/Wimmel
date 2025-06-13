// import { useState } from "react"
import Character from "../characterIcon/characterIcon"

export default function TargetSelect() {
    // const [coordinates, setCoordinates] = useState('')

    function submitTarget(id) {
        console.log(`submitting target ${id}`)
    }

    const targets = [
        { id: 1, imageURL: 'url', name: 'Dummy1' },
        { id: 2, imageURL: 'url', name: 'Dummy2' },
        { id: 3, imageURL: 'url', name: 'Dummy3' }
    ]

    return (
        <div>
            {targets.map((target) => {
                return (
                    <button key={target.id} onClick={() => submitTarget(target.id)}>
                        <Character
                            url={target.imageURL}
                            name={target.name}
                        />
                    </button>

                )
            })}
        </div>
    )

}