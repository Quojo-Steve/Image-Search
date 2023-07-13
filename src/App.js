import { createContext, useState, useEffect } from "react";
import "./App.css";
import Images from "./components/Images";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {
  
  const [pages, setPages] = useState(1);
  const [imagename, setimagename] = useState("");
  // console.log(isLoading)
  
  function getRandomNumber() {
    var num = Math.floor(Math.random() * 30) + 1;
    setPages(num)
  }

  useEffect(() => {
    getRandomNumber();
  }, []);
  

  const { response, isLoading, error, fetchData } = useAxios(
    `search/collections?page=${pages}&per_page=20&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(pages)

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    imagename,
    setimagename,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
