import React, { Component } from 'react';

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
    const style = {
      display: 'flex',
      flexDirection: 'column',
      padding: '5px',
      margin: '5px 0',
    };
    return (
      <div>
        <h3>Добавить новый контакт</h3>
        <form style={style} onSubmit={this.handleSubmit}>
          <input
            style={style}
            type="text"
            placeholder="Имя"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <input
            style={style}
            type="tel"
            placeholder="Телефон"
            value={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />
          <input
            style={style}
            type="email"
            placeholder="Почта"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
