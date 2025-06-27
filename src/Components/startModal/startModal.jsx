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
				<main className={Styles.text}>
					<p>
						Wimmelbilders (<i>German for &quot;teeming pictures&quot;</i>) are fun scavenger hunts defined by their unique images loaded with characters and details.
					</p>
					<p>
						Your goal is to locate 3 targets found within the image. Click on the image when you&apos;ve located a target and select the
						correct character from the pop-up list to check whether the target is correct.

					</p>
				</main>

				<Button text='Play' callback={callback} />
			</dialog>
		</div>
	)
}

StartModal.propTypes = {
	callback: PropTypes.func.isRequired
}