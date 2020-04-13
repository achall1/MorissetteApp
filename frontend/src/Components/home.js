import React, { useState } from 'react';
import Footer from './footer'

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [selection, setSelection] = useState("");
    const handleSearch = () => {
        //This function will send the search params to the API
        alert("Search Text: " + searchText + " Selection: " + selection)
    }
    return (
        <div>
            <div>
                <div id="homeBanner"> Get a new or used car delivered directly to your home!</div>
                <input type="text"  placeholder="Search" onChange={e => setSearchText(e.target.value)}/>
                <input type="button" onClick={handleSearch} value="Search"></input>
               <div>
                    <input type="radio" name="searchType" onClick={e => setSelection("Brand")}></input> Brand 
                    <input type="radio" name="searchType" onClick={e => setSelection("Used")}></input> Used 
                    <input type="radio" name="searchType" onClick={e => setSelection("New")}></input> New 
               </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;