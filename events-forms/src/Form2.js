import React from 'react';
import FormErrors from './FormErrors';

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''}
    }
  }

  changeHandler = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState((state) => (
      {
        [name]: value,
        formErrors: {
          ...state.formErrors,
          [name]: this.validateField(name, value)
        }
      })
    );
  }

  validateField(fieldName, value) {
    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid';
      case 'password':
        return value.length >= 6 ? '' : ' is too short';
      default:
        break;
    }
  }

  render() {
    return(
      <form>
        <div>
          <input 
            type="email" 
            name="email"
            value={this.state.email} 
            onChange={this.changeHandler} 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            value={this.state.password} 
            onChange={this.changeHandler} 
          />
        </div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </form>
    )
  }
}

export default Form2;