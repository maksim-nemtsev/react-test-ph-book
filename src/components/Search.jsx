import React, { Component } from 'react';

export class Search extends Component {
  handleSearch = (event) => {
    this.props.handleSearch(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Поиск котакта</h3>
        <input type="search" onChange={this.handleSearch} placeholder="Найти контакт" />
      </div>
    );
  }
}

export default Search;
