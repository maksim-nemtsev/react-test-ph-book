import React, { Component } from "react";
import PhoneBook from "./PhoneBook";

class PhoneBookList extends Component {
  static defaultProps = {
    data: [],
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onRemove, onEdit } = this.props;
    const list = data.map(contactInfo => (
      <PhoneBook key={contactInfo.id} contactInfo={contactInfo} onRemove={onRemove} onEdit={onEdit} />
    ));

    return <div>
      <br/>
      <h4>Лист контактов</h4>
      {list}</div>;
  }
}
export default PhoneBookList;
