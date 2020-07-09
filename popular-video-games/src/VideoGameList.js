import React from 'react';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="video-game-list">
        {games.map((game, index) => <VideoGame key={index} game={game} />)}
      </div>
    )
  }
}

export default VideoGameList;