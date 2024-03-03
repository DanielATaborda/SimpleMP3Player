import "./App.css"
import "./musicPlayer"

import playPause from "./assets/playPause.png";



const App = () => {

  return (
    <div className='conteiner'>

      <div className="musicPlayer">
        <i className='controlVolume bx bxs-chevron-down' id="controlVolume"></i>
        <input className="volumeRange" type="range" name="volumeRange" id="volumeRange" min="0" max="1" step="0.1" />
        <img className="controls" id="playPause" src={playPause}/>
        <p className="titleMP3">Digital MP3 Player</p>
        <div className="visor">
          <h1 className="artist-song" id="artist-song">Artist Song</h1>
          <h2 className="artist-name" id="artist-name">Artist Name</h2>
          <div className="progressPlayer" id="progressPlayer">
            <div className="progress" id="progress"></div>
            <div className="music-duration">
              <span id="currentTime">0:00</span>
              <span id="duration">0:00</span>
            </div>
          </div>
        </div>
        <p className="typeMP3">MP3/WMA/REC</p>

        <i className="controls bx bx-skip-previous" id="previous"></i>
        <i className="controls bx bx-skip-next" id="skip" > </i>

      </div>


    </div>
  )
}

export default App