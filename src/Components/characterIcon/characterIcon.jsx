import PropTypes from "prop-types"
import Styles from "./characterIcon.module.css"

const hostURL = import.meta.env.VITE_API_URL

export default function Character({ url, name  }) {
    return(
		<div>
			<img className={Styles.image} src={hostURL+url}></img>
			{name && (
				<p>{name}</p>
			)}
		</div>
	)
}

Character.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string
}

