import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timer from './Components/timer/timer.jsx'
import Character from './Components/characterIcon/characterIcon.jsx'
import StartModal from './Components/startModal/startModal.jsx'
import GameOver from './Components/gameOverModal/gameOverModal.jsx'
import TargetList from './Components/targetList/targetList.jsx'
import TargetSelect from './Components/targetSelect/targetSelect.jsx'
import ImageContainer from './Components/imageContainer/imageContainer.jsx'
import ScoreBoard from './Components/scoreModal/scoreModal.jsx'
import Waldo from './Waldo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Timer />
    <Character url='nourl' name='Test dummy' />
    <StartModal />
    <GameOver time='00:02:14' />
    <TargetList />
    <TargetSelect />
    <ImageContainer />
    <ScoreBoard /> */}
    <Waldo />
  </StrictMode>,
)
