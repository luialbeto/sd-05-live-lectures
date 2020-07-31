import React from 'react';

class BusinessCard extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.intro}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.linkedin}</p>
        <p>{this.props.user.phone}</p>
        <img src={this.props.user.photo} alt="avatar"/>
      </div>
    );
  }
}

export default BusinessCard;