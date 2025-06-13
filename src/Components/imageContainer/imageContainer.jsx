// import { useState } from "react";

export default function ImageContainer(){
    // const [xCoordinates, setXCoordinates] = useState('')
    // const [yCoordinates, setYCoordinates] = useState('')

    function getCoordinate(e){
        let image = e.target.getBoundingClientRect()
        let x = Math.floor(e.clientX - image.left);
        let y = Math.floor(e.clientY - image.top);
        console.log("X : " + x + " Y : " + y + ".");
        // setXCoordinates(x)
        // setYCoordinates(y)
        // console.log(`x coord: ${xCoordinates}`)
        // console.log(`y coord: ${yCoordinates}`)
    }

    return(
        <div>
            <img onClick={getCoordinate} src="https://slqnrxbkxzpvpuzkidpd.supabase.co/storage/v1/object/public/maps/test/wimmelbilder.png" alt="game board" />
        </div>
    )
}