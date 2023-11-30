import React from 'react';
import episodes from '../data/episodesData';

const EpisodeTemplate = ({ seasonNumber }) => {
  const seasonEpisodes = episodes[seasonNumber] || [];

  return (
    <div>
      <h1>Season {seasonNumber}</h1>
      {seasonEpisodes.map((episode) => (
        <div key={episode.number}>
          <h2>{episode.title}</h2>
          <p>Number: {episode.number}</p>
          <p>Directed By: {episode.DirectedBy}</p>
          <p>Written By: {episode.WrittenBy}</p>
          <p>Original Air Date: {episode.OriginalAirDate}</p>
          <p>Summary: {episode.Summary}</p>
          {/* Add more elements as needed */}
        </div>
      ))}
    </div>
  );
};

export default EpisodeTemplate;
