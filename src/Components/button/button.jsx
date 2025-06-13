import PropTypes from "prop-types"
import Style from "./button.module.css"

export default function Button({ text, callback }){

    return(
		<div>
			<button className={Style.button} onClick={callback}>{text}</button>
		</div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}