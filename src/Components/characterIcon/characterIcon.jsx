import PropTypes from "prop-types"
import Styles from "./characterIcon.module.css"

const hostURL = import.meta.env.VITE_API_URL

export default function Character({ url, name, found }) {
	return (
		<div>

			{found === true ? (
				<div className={Styles.found}>
					<img className={Styles.foundImage} src={hostURL + url}></img>
					{name && (
						<p>{name}</p>
					)}
				</div>
			) : (
				<div className={Styles.container}>
					<img className={Styles.image} src={hostURL + url}></img>
					{name && (
						<p>{name}</p>
					)}
				</div>
			)}

		</div>
	)
}

Character.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string,
	found: PropTypes.bool
}

