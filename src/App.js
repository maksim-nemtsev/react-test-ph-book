import React, { Component } from 'react';
import PhoneBookForm from './components/PhoneBookForm';
import PhoneBookList from './components/PhoneBookList';
import Search from './components/Search';

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
  render() {
    const { dataContacts } = this.state;
    return (
      <div>
        <PhoneBookForm onCreate={this.handleCreate} />
        <Search />
        <PhoneBookList data={dataContacts} onRemove={this.handleRemove} />
      </div>
    );
  }
}
export default App;
