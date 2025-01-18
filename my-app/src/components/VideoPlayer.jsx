import React, { useRef } from 'react'
import video from '../assets/video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
    // Reference to the player container for click detection
    const player = useRef(null);

    /**
     * Closes the video player when clicking outside the video element
     * @param {Event} e - Click event
     */
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    return (
        // Container div with conditional hide class based on playState
        <div className={`videoPlayer ${playState ? '' : 'hide'}`} 
             ref={player} 
             onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer