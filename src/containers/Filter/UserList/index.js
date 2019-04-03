import React, { PureComponent } from "react";

import MOCK_DATA from "./MOCK_DATA.json";

import { filterItem } from "../../../helpers";

import UserCard from "./UserCard";

class FilterBody extends PureComponent {
  renderData = () => {
    const { username, dateOfBirth, country } = this.props.filterData;

    return MOCK_DATA.map((item) => {
      if (!filterItem({ username, dateOfBirth, country }, item)) return;

      return <UserCard key={item.username} {...item} />;
    });
  };

  render() {
    return (
      <div className="user-list">
        <h3>User List</h3>
        {this.renderData()}
      </div>
    );
  }
}

export default FilterBody;
