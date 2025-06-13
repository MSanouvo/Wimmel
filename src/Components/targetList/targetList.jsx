// import { useState, useEffect } from "react";
import Character from "../characterIcon/characterIcon";

export default function TargetList(){
	// const [targets, setTargets] = useState([])
	
	// useEffect({
	// 	//prob need an API call here to get target info
	// })

    const targets = [
        {id: 1, imageURL: 'url', name: 'Dummy1'},
        {id: 2, imageURL: 'url', name: 'Dummy2'},
        {id: 3, imageURL: 'url', name: 'Dummy3'}
    ]
	
	return(
		<div>
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