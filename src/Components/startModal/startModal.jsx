import Button from "../button/button"
import PropTypes from "prop-types"
// import { useState } from "react";

export default function StartModal({ callback }) {
	// const [modalView, setModalView] = useState(true)

	return (
		<div>
			<dialog open>
				<p> **Game Prompt goes here** </p>
				<Button text='Play' callback={callback} />
			</dialog>
		</div>
	)
}

StartModal.propTypes = {
	callback: PropTypes.func.isRequired
}