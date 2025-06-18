import Character from "../characterIcon/characterIcon";
import Styles from "./targetList.module.css"
import PropTypes from "prop-types";


export default function TargetList({ targets }){
	
	return(
		<div className={Styles.list}>
			<p> Targets: </p>
			{targets.map((target) => {
				return(
					<Character 
						key={target.id} 
						url={target.Icons[0].url} 
						// name={target.name}
					/>
				)
			})}
		</div>
	)
}

TargetList.propTypes ={
	targets: PropTypes.array.isRequired
}

