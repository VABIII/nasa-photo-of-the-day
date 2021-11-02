import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BASEURL, KEY_CONNECT, API_KEY} from "./constants/constants";
import PhotoOfDay from "./components/PhotoOfDay";
import Header from "./components/Header";

function App() {
    const [data, setData] = useState({})

    useEffect(() =>{
        axios.get(BASEURL + KEY_CONNECT + API_KEY)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.error(err)
            })

    },[])



  return (
    <div className="App">
      <Header data={data}/>
        <PhotoOfDay data={data}/>
    </div>
  );
}

export default App;
