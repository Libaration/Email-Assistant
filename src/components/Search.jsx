import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const submitSearch = () => {
    if (query === "" || !query.trim()) {
      setQuery("");
      window.electronAPI.showDialog("Please enter a valid address");
    } else {
      props.setSearching(true);
      props.setSearch(query);
      setQuery("");
      if (props.history.location.pathname !== "/search") {
        props.history.push("/search");
      }
    }
  };

  return (
    <div className="flex items-center mt-6 ml-20 mr-5">
      <div className="relative">
        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search by address"
          className="bg-gray-300 w-md px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={query}
          onChange={handleChange}
        />
      </div>
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={submitSearch}
        type="button"
      >
        Search
      </button>
    </div>
  );
}

export default withRouter(Search);
