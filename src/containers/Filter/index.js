import React, { Component } from "react";

import FilterFields from "./FilterFields";
import UserList from "./UserList";

class Filter extends Component {
  state = {
    username: "",
    country: "",
    dateOfBirth: "",
  };

  setFilterData = (filter) => {
    this.setState({
      ...filter,
    });
  };

  render() {
    return (
      <>
        <FilterFields filterData={this.state} setFilterData={this.setFilterData} />
        <UserList filterData={this.state} />
      </>
    );
  }
}

export default Filter;
