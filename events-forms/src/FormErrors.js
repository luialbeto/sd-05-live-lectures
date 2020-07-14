import React, { Component } from 'react';

class FormErrors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { formErrors } = this.props;
    return(
        <div>
          {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length === 0) return ''
            return <p key={i}>{fieldName} {formErrors[fieldName]}</p>
          })}
        </div>
    )
  }
}

export default FormErrors;