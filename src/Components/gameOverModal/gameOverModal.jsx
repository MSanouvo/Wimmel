import Button from "../button/button"
import { useState } from "react"
import PropTypes from "prop-types"
import Styles from "./gameOverModal.module.css"
const hostURL = import.meta.env.VITE_API_URL

export default function GameOver({ time, callback }) {
	const [name, setName] = useState('')

	function secondsToTime(time) {
		const hour = Math.floor(time / 3600).toString().padStart(2, '0')
		const min = Math.floor(time % 3600 / 60).toString().padStart(2, '0')
		const sec = Math.floor(time % 60).toString().padStart(2, '0')
		return hour + ':' + min + ':' + sec;
	}

	async function submitPlayInfo() {
		try {
			let player = {}
			if(name.trim() === ''){
				player = {
					name: "Player"
				}
			} else {
				player = {
					name: name
				}
			}
			const response = await fetch(`${hostURL}/game/game-over`, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(player)
			});
			if (!response.ok) {
				throw new Error(`Error ${response.status}`)
			}
			const json = await response.json()
			console.log(json)
			callback()
		} catch (e) {
			console.log(e)
		}
		// console.log(`${name} submitted time of ${time}`)
		console.log('player name submitted')
	}

	function handleChange(e) {
		setName(e.target.value)
	}

	return (
		<dialog
			open
			className={Styles.modal}
		>
			<div className={Styles.container}>
				<div className={Styles.content}>
					<h3 className={Styles.header}> Game Over ! </h3>
					<p> Your time was {secondsToTime(time)} </p>
					<p> Enter your name for the leaderboards ! </p>
				</div>

				<div className={Styles.form}>
					<input id="input" className={Styles.input} type='text' value={name} onChange={handleChange}/>
					<Button text='Submit' callback={submitPlayInfo} />
				</div>

			</div>

		</dialog>
	)
}

GameOver.propTypes = {
	time: PropTypes.number.isRequired,
	callback: PropTypes.func.isRequired
}
