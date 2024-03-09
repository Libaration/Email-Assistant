import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <Input
          type="text"
          placeholder="Search by address"
          value={query}
          onChange={handleChange}
        />
      </div>
      <Button className="ml-4" onClick={submitSearch}>
        Search
      </Button>


    </div>
  );
}

export default withRouter(Search); 
