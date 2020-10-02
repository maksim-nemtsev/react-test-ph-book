import React, { Component } from "react";
import PhoneBook from "./PhoneBook";

class PhoneBookList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data, onRemove } = this.props;
    const list = data.map(info => (
      <PhoneBook key={info.id} info={info} onRemove={onRemove} />
    ));

    return <div>
      <h3>Лист контактов</h3>
      {list}</div>;
  }
}
export default PhoneBookList;
