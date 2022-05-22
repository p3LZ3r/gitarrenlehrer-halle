import PropTypes from 'prop-types';
import React from 'react';

export default function YoutubeEmbed({ embedId }) {
  return (
    <div className='video-responsive shadow-lg'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
