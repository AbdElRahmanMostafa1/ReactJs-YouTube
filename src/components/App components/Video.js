import React, { useState } from 'react';
import './Video.css'
import RenderedList from './RenderedList';
import SelectedVideo from './SelectedVideo';

import WaitingSearch from '../UI components/WaitingSearch';

const Video = ({renderedVideos}) => {

  const [getVideoId, setGetVideoId] = useState(null);
  const [getVideotitle, setGetVideoTitle] = useState(null);
  
  const videoId = (videoId, snippet) => {
    setGetVideoId(videoId);
    setGetVideoTitle(snippet.title);
  }

  // If No Item To Search
  if (renderedVideos.length === 0) {
    return <WaitingSearch> Please type to search! 😃 </WaitingSearch>
  }
 
  return (
    <section className='video'>
      <article className='rendered-list'>
        <RenderedList renderedVideos={renderedVideos} videoId={videoId} />
      </article>

      <article className='selected-video'>
        <SelectedVideo videoId={getVideoId} videotitle={getVideotitle} />
      </article>
    </section>
  )
}

export default Video
