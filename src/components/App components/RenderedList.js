import React from 'react';
import './RenderedList.css'

const RenderedList = ({ renderedVideos, videoId }) => {
  const currentDateMonth = new Date().getMonth() + 1;

  const run = renderedVideos.map(({id, snippet}) => {

    const getVideoInfo = () => {
      videoId(id.videoId, snippet);
    }

    return (
      <article className='single-video-detail' key={id.videoId} onClick={getVideoInfo}>
        <img src={snippet.thumbnails.default.url} alt="" />
        <div className='title-channel-views-time'>
          <p className='title'> {snippet.title} </p>
          <p className='channel-name'> {snippet.channelTitle} </p>
          <p className='time'> current month is {currentDateMonth} </p>
        </div>
      </article>
    )
  })

  return (
    <section className='all-videos'>
      {run}
    </section>
  )
}

export default RenderedList
