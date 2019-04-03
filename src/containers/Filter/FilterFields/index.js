import React, { PureComponent } from "react";
import { Input, DatePicker } from "antd";

class FilterHeader extends PureComponent {
  handleChange = (e) => {
    this.props.setFilterData({ [e.target.name]: e.target.value });
  };

  onChangeDate = (date, dateString) => {
    this.props.setFilterData({ dateOfBirth: dateString });
  };

  render() {
    const { username, country } = this.props.filterData;

    return (
      <div className="filter">
        <h3>Filter</h3>

        <div className="filter-field">
          <Input
            name="username"
            value={username}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <DatePicker onChange={this.onChangeDate} />
          <Input
            name="country"
            value={country}
            placeholder="Enter country"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default FilterHeader;
