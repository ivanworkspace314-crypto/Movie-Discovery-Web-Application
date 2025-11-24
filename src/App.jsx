import React,{useState} from "react";
import Background from "./components/Background";
import BackgroundHero from "./components/BackgroundHero";
import SearchBar from "./components/SearchBar";
import Popular from "./components/Popular";
import Header from "./components/Header"
const App = () => {
  const [searchBarInput,setSearchBarInput]=useState('')
  const [year,setYear]=useState(0)
  
  return (
    <Background>
      <div className="flex flex-col items-center justify-start text-center space-y-6 px-4 pt-10 lg:pt-22">
        <BackgroundHero />
        <Header/>
      </div>
      <div style={{ backgroundColor: '#030014' }} className="mt-8 lg:mt-24">
        <SearchBar searchBarInput={searchBarInput} setSearchBarInput={setSearchBarInput} setYear={setYear} />
      <Popular searchBarInput={searchBarInput} year={year} />
      </div>
      
    </Background>
  );
};

export default App;
