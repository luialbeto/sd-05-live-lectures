import React from 'react';

class Form1 extends React.Component {

  submitFormHandler = event => {
    event.preventDefault();
    console.log(this.refs.name.value);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitFormHandler}>
          <div>
            <input type="text" name="name" ref="name" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form1;