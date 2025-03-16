import React from 'react';

interface YoutubeEmbedProps {
  embedId: string;
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className='video-responsive shadow-lg'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube-nocookie.com/embed/${embedId}?modestbranding=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}
