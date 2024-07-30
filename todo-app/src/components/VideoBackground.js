import React from 'react'
import Background from "../assets/Background.mp4";

function VideoBackground(){
    return(
        <div className='VideoBackground'>
           <video className="videoTag" autoPlay loop muted playsInline>
        <source src={Background} type="video/mp4" />
      </video>
        </div>
    )
}

export default VideoBackground