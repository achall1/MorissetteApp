import React, { useState } from 'react';
import Footer from './footer'
import '../Styles/home_style.css';
import Header from './header'

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [selection, setSelection] = useState("");
    const enterKeyPressed = (e) => {
        //This function will send the search params to the API
        //After the user uses the enter key
        if (e.key === "Enter"){
            alert("Search Text: " + searchText + " Selection: " + selection)
        }
    }
    return (
        <div style={{textAlign: 'center'}}>
            <Header />
            <div id="homeBanner"> Get a new or used car delivered directly to your home!</div>
            <div className="userSearch">
                <input
                type="text"  
                placeholder="Search for a vehicle..." 
                onChange={e => setSearchText(e.target.value)}
                onKeyPress={enterKeyPressed}
                />
            </div>
                <div>
                    <input id="radioelem" type="radio" name="searchType" onClick={e => setSelection("Brand")} onKeyPress={enterKeyPressed}></input> Brand 
                    <input id="radioelem" type="radio" name="searchType" onClick={e => setSelection("Used")} onKeyPress={enterKeyPressed}></input> Used 
                    <input id="radioelem" type="radio" name="searchType" onClick={e => setSelection("New")} onKeyPress={enterKeyPressed}></input> New 
               </div>
            <Footer />
        </div>
    )
}

export default Home;