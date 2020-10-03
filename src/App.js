import React, { Component } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import PhoneBookList from './components/PhoneBookList';

class App extends Component {
  id = 2;
  state = {
    dataContacts: [
      {
        id: 0,
        name: 'Maks',
        phone: '111 222 333',
      },
      {
        id: 1,
        name: 'Roma',
        phone: '333 4 4 44',
      },
    ],
    keyword: '',
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = (data) => {
    const { dataContacts } = this.state;
    this.setState({
      dataContacts: dataContacts.concat({ id: this.id++, ...data }),
    });
  };
  handleRemove = (id) => {
    const { dataContacts } = this.state;
    this.setState({
      dataContacts: dataContacts.filter((info) => info.id !== id),
    });
  };

  handleEdit = (id, data) => {
    const { dataContacts } = this.state;
    this.setState({
      dataContacts: dataContacts.map((e) => {
        if (id === e.id) {
          return { ...e, ...data };
        }
        return e;
      })
    })
  }

  render() {
    const { dataContacts, keyword } = this.state;
    const filteredList = dataContacts.filter(info => info.name.indexOf(keyword) !== -1)
    return (
      <div>
        <PhoneBookForm onCreate={this.handleCreate} />
        <div>
          <input onChange={this.handleChange}
            value={keyword}
            placeholder='найти контакт' />
        </div>
        <PhoneBookList data={filteredList} onRemove={this.handleRemove} onEdit={this.handleEdit} />
      </div>
    );
  }
}
export default App;
