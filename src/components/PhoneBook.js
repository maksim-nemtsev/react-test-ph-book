import React, { Component } from 'react';

class PhoneBook extends Component {
  static defaultProps = {
    contactInfo: {
      name: 'Maksim',
      phone: '010-550-0000',
      email: 'example.example.com',
      id: 0,
    },

  }; state = {
    editing: false,
    name: '',
    phone: '',
    email: ''
  }

  handleToggleEditing = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

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
        email: contactInfo.email
      })
    }

    if (prevState.editing && !this.state.editing) {
      onEdit(contactInfo.id, {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.editing && !nextState.editing && nextProps.contactInfo === this.props.contactInfo) {
      return false;
    }
    return true;
  }

  handleEdit = () => {
    const { contactInfo, onEdit } = this.props;

    onEdit(contactInfo.id);
    this.handleToggleEditing()
  }

  render() {
    const style = {
      width: '250px',
      border: '1.5px solid black',
      borderTop: '0px',
      borderRight: '0px',
      padding: '10px',
      margin: '11px',
    };
    const { editing } = this.state;
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              placeholder='Имя'
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name='phone'
              value={this.state.phone}
              placeholder='Телефон'
            />
          </div>
          <div>
            <input
              onChange={this.handleChange}
              name='email'
              value={this.state.email}
              placeholder='Почта'
            />
          </div>
          <button onClick={this.handleEdit}>Сохранить</button>
          <button onClick={this.handleRemove}>Удалить</button>
        </div>
      );
    }

    const { name, phone, email } = this.props.contactInfo;
    return (
      <div style={style}>
        <div>
          <b>
            {name}
          </b>
          <div>
            {phone}
          </div>
          <div>
            {email}
          </div>
          <button onClick={this.handleToggleEditing} >Изменить</button>
          <button onClick={this.handleRemove} >Удалить</button>
        </div>
      </div>
    )
  }
}
export default PhoneBook;
