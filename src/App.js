import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BASEURL, KEY_CONNECT, API_KEY} from "./constants/constants";

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
