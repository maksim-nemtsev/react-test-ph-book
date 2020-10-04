import React, { Component } from 'react';
import '../index.css';
import { Button } from 'react-bootstrap';

class PhoneBook extends Component {
  static defaultProps = {
    contactInfo: {
      name: 'Maksim',
      phone: '010-550-0000',
      email: 'example.example.com',
      id: 0,
    },
  };
  state = {
    editing: false,
    name: '',
    phone: '',
    email: '',
  };

  handleToggleEditing = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleRemove = () => {
    const { contactInfo, onRemove } = this.props;
    onRemove(contactInfo.id);
  };

  componentDidUpdate(prevProps, prevState) {
    const { contactInfo, onEdit } = this.props;
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: contactInfo.name,
        phone: contactInfo.phone,
        email: contactInfo.email,
      });
    }

    if (prevState.editing && !this.state.editing) {
      onEdit(contactInfo.id, {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.contactInfo === this.props.contactInfo
    ) {
      return false;
    }
    return true;
  }

  handleEdit = () => {
    const { contactInfo, onEdit } = this.props;

    onEdit(contactInfo.id);
    this.handleToggleEditing();
  };

  render() {
    const { editing } = this.state;
    if (editing) {
      return (
        <div className='phoneBook'>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              placeholder="Имя"
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="phone"
              value={this.state.phone}
              placeholder="Телефон"
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              placeholder="Почта"
            />
          </div>
          <Button variant="success" className='btn-edit' onClick={this.handleEdit}>Сохранить</Button>
          <Button variant="danger" onClick={this.handleRemove}>Удалить</Button>
        </div>
      );
    }

    const { name, phone, email } = this.props.contactInfo;
    return (
      <div className='phoneBook'>
        <div>
          <b>{name}</b>
          <div>{phone}</div>
          <div>{email}</div>
          <Button variant="secondary" className='btn-edit' onClick={this.handleToggleEditing}>Изменить</Button>
          <Button variant="danger" onClick={this.handleRemove}>Удалить</Button>
        </div>
      </div>
    );
  }
}
export default PhoneBook;
