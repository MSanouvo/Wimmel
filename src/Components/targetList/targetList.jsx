import Character from "../characterIcon/characterIcon";
import Styles from "./targetList.module.css"
// import PropTypes from "prop-types";

export default function TargetList(){

    const targets = [
        {id: 1, imageURL: 'url', name: 'Dummy1'},
        {id: 2, imageURL: 'url', name: 'Dummy2'},
        {id: 3, imageURL: 'url', name: 'Dummy3'}
    ]
	
	return(
		<div className={Styles.list}>
			<p> Targets: </p>
			{targets.map((target) => {
				return(
					<Character 
						key={target.id} 
						url={target.imageURL} 
						name={target.name}
					/>
				)
			})}
		</div>
	)
}

// TargetList.propTypes ={
// 	targets: PropTypes.array.isRequired
// }

