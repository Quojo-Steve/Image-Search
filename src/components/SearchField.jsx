import React, { useContext, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [pages, setPages] = useState(1);
  const [searchField, setSearchField] = useState("");
  const { fetchData, setimagename } = useContext(ImageContext);

  function getRandomNumber() {
    var num = Math.floor(Math.random() * 10) + 1;
    setPages(num)
  }

  useEffect(() => {
    getRandomNumber();
  }, []);

  const enterbutton = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/collections?page=${pages}&per_page=20&query=${searchField}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchField("");
      setimagename(searchField);
    }
  };

  const handle = (e) => {
    setSearchField(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/collections?page=${pages}&per_page=20&query=${searchField}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchField("");
    setimagename(searchField);
  };

  return (
    <div className="flex p-2">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl "
        type="search"
        placeholder="Search anything..."
        value={searchField}
        onChange={handle}
        onKeyDown={enterbutton}
      />
      <button
        disabled={!searchField}
        onClick={handleButtonSearch}
        className="bg-blue-700 flex justify-center md:px-4 lg:px-6 px-2 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        <Search color="white" size={25} className="mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchField;
