import React, { Component } from 'react';
import AddContact from '../AddContact';
import Search from '../Search';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoading: true,
    };
  }

  handleSearch = (keyword) => {
    const filteredItems = this.state.contacts;
    filteredItems.forEach((item) => {
      if (!item.name.toLowerCase().includes(keyword.toString().toLowerCase())) {
        return (item.visibility = false);
      } else {
        return (item.visibility = true);
      }
    });
    this.setState({
      contacts: filteredItems,
    });
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddContact />
      </div>
    );
  }
}

export default App;
