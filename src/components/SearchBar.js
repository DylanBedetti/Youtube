import React from "react";
import { Input } from "antd";

const { Search } = Input;

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSearchChange = (event) => {
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <Search
        placeholder="Search..."
        onSearch={this.onSearchChange}
        onChange={this.onInputChange}
        style={{
          width: "80%",
          minWidth: "400px",
          maxWidth: "800px",
          padding: "30px",
        }}
        value={this.state.term}
        autoFocus
      />
    );
  }
}

export default SearchBar;
