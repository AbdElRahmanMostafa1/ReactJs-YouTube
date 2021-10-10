import React from 'react'
import WaitingSearch from '../UI components/WaitingSearch';

const SelectedVideo = ({videoId, videotitle}) => {
  console.log(videoId);
  console.log(videotitle);

  if (videoId == null) {
    return <WaitingSearch>
      Select a Video to play! 🙂
    </WaitingSearch>
  }

  return (
    <iframe width="727" height="409" src={`https://www.youtube.com/embed/${videoId}`} title={videotitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
  )
}

export default SelectedVideo
