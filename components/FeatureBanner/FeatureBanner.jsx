import React from 'react'
import './FeatureBanner.css'
// import '../Banner/Banner.css'
import video2 from '../../public/videos/video1.mp4'
const FeatureBanner = () => {
  return (
     <div className="video-container">
    <div className="overlay"></div>
    <video src={video2} autoPlay muted loop />
    <div className="content">
      <h1>
      Transforming Spaces, Touching Souls. 
      </h1>
      <p>
      Experience the Magic of Home with Our Unique Blend of Care and Comfort. Your Haven, Our Heart.
      </p>
    </div>
  </div>
  )
}

export default FeatureBanner