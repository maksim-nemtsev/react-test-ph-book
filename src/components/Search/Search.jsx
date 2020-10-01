import React, { Component } from 'react'

export class Search extends Component {
    handleSearch = (event) => {
        this.props.handleSearch(event.target.value)
    }

    render() {
        return (
            <input type="search" onChange={this.handleSearch} placeholder='Найти контакт' />
        )
    }
}

export default Search
