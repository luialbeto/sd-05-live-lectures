import React from 'react';

class VideoGame extends React.Component {
  render() {
    const { title, developer, sales } = this.props.game;
    return (
      <p>
        <strong>{title}</strong>,
        made by <em>{developer}</em>,
        sold {sales.toLocaleString('pt-BR')} units
      </p>
    );
  }
}

export default VideoGame;