import Button from "../button/button"
import PropTypes from "prop-types"
import Styles from "./startModal.module.css"

export default function StartModal({ callback }) {


	return (
		<div>
			<dialog 
			open
			className={Styles.container}
			>
				<p> **Game Prompt goes here** </p>
				<Button text='Play' callback={callback} />
			</dialog>
		</div>
	)
}

StartModal.propTypes = {
	callback: PropTypes.func.isRequired
}