import React, { useRef, useState } from 'react'

import VideoFooter from './VideoFooter'

import './Video.css'

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play();
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video 
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/cbb043ec55f099892f3da70bd69eb5dd/5f4294e0/video/tos/useast2a/tos-useast2a-pve-0068/365c008e52244146977a6d63ce2988e1/?a=1233&br=2828&bt=1414&cr=0&cs=0&dr=0&ds=3&er=&l=202008211610080101890741485827E911&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajhpM3JvbnBwdTMzZjczM0ApOTVpNjU2N2U5NzwzaGQ0OmcwZjNgcnNrYzVfLS00MTZzc181M2EuMC02YTAxMF5jYWE6Yw%3D%3D&vl=&vr="></video>
      <VideoFooter channel="chars34" description="send it by props" song="la macarena - del rio"/>  
      {/*<VideoSidebar> */}    
    </div>
  )
}

export default Video