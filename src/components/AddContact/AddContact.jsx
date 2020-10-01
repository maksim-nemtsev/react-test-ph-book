import React, { Component } from 'react';
import './AddContact.css';

export class AddContact extends Component {
  state = {
    id: Date.now(),
    name: '',
    email: '',
    phone: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
    });
  };

  render() {
    return (
      <section>
        <header>
          <h3>Добавить новый контакт</h3>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>Имя</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            id="name"
            placeholder="Имя"
          />
          <label>Почта</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            id="email"
            placeholder="Электронная почта"
          />
          <label>Телефон</label>
          <input
            onChange={this.handleChange}
            value={this.state.phone}
            type="tel"
            id="phone"
            placeholder="Телефон"
          />
          <button>Добавить</button>
        </form>
      </section>
    );
  }
}

export default AddContact;
