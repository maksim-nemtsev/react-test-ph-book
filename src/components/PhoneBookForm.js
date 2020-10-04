import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
      email: '',
    });
  };
  render() {
    return (
      <div className="phoneBookForm">
        <h3 className="phoneBookForm__title">Добавить контакт</h3>
        <form className='form'  onSubmit={this.handleSubmit}>
          <input
            className="form__input"            
            type="text"
            placeholder="Имя"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input
            className="form__input"           
            type="tel"
            placeholder="Телефон"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />
          <input
            className="form__input"            
            type="email"
            placeholder="Почта"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />

          <Button type="submit">Добавить</Button>
        </form>
        <br/>
      </div>
    );
  }
}

export default PhoneForm;
