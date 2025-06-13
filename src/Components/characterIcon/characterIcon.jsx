import PropTypes from "prop-types"

export default function Character({ url, name  }) {
    return(
		<div>
			<img src={url}></img>
			{name && (
				<p>{name}</p>
			)}
		</div>
	)
}

Character.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

