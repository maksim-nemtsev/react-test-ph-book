import React, { Component } from 'react';

class PhoneBook extends Component {
  static defaultProps = {
    info: {
      name: 'Maksim',
      phone: '010-550-0000',
      email: 'example.example.com',
      id: 0,
    },
  };
  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };
  render() {
    const style = {
      width: '250px',
      border: '1px solid black',
      padding: '5px',
      margin: '11px',
    };
    const { name, phone, email } = this.props.info;
    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <div>{email}</div>
        <button onClick={this.handleEdit}>Редактировать</button>
        <button onClick={this.handleRemove}>Удалить</button>
      </div>
    );
  }
}
export default PhoneBook;
