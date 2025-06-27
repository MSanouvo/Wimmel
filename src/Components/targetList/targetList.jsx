import Character from "../characterIcon/characterIcon";
import Styles from "./targetList.module.css"
import PropTypes from "prop-types";


export default function TargetList({ targets, found }) {
	return (
		<div className={Styles.list}>
			<p className={Styles.header}> Targets: </p>
			<div className={Styles.target}>
				{targets.map((target) => {
					if(found.length !=0 && found.includes(target.name)){
						return(
							<Character
							key={target.id}
							url={target.Icons[0].url}
							found={true}
						/>
						)
					} else {
						return (
							<Character
								key={target.id}
								url={target.Icons[0].url}
								found={false}
							/>
						)
					}
					
				})}
			</div>

		</div>
	)
}

TargetList.propTypes = {
	targets: PropTypes.array.isRequired,
	found: PropTypes.array
}

