import React from 'react';
import ReactPlayer from 'react-player';

function ResultVideos({ result }) {
  return (
    <div className='flex flex-wrap'>
      {result.map((video, i) => (
        <div className='p-2' key={i}>
          {video?.additional_links?.[0]?.href && (
            <ReactPlayer
              url={video.additional_links?.[0].href}
              controls
              width='355px'
              height='200px'
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ResultVideos;
