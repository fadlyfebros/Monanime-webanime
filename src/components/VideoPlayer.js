"use client"

import YouTube from 'react-youtube'

export default function VideoPlayer({youtubeId}) {

  const options = {
    width: '800px',
    heigth: '500px'
  }
  
  return (
    <div className='flex justify-center w-full lg:w-full'>
      <YouTube 
        videoId={youtubeId}
        onReady={(event)=>(event.target.pauseVideo())}
        opts={options}
      />
    </div>
  )
}
