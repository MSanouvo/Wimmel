import PropTypes from "prop-types";

export default function ImageContainer({ url, callback }){

    function getImageCoordinate(e){
        let image = e.target.getBoundingClientRect()
        let x = Math.floor(e.clientX - image.left);
        let y = Math.floor(e.clientY - image.top);
        callback(x, y)
    }

    return(
        <div>
            <img onClick={getImageCoordinate} src={url} alt="game board" />
        </div>
    )
}

ImageContainer.propTypes = {
    url: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}