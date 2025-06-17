import PropTypes from "prop-types";
import Styles from "./imageContainer.module.css"

export default function ImageContainer({ url, callback }){

    function getImageCoordinate(e){
        let image = e.target.getBoundingClientRect()
        let x = Math.floor(e.clientX - image.left);
        let y = Math.floor(e.clientY - image.top);
        callback(x, y)
    }

    return(
        <div className={Styles.container}>
            <img className={Styles.image} onClick={getImageCoordinate} src={url} alt="game board" />
        </div>
    )
}

ImageContainer.propTypes = {
    url: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}