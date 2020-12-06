import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  return (
    <Search
      placeholder="Search For a Video"
      onSearch={() => onTermSubmit(term)}
      onChange={(e) => setTerm(e.target.value)}
      style={{
        width: "80%",
        minWidth: "400px",
        maxWidth: "800px",
        padding: "30px",
      }}
      value={term}
      autoFocus
    />
  );
};

export default SearchBar;
