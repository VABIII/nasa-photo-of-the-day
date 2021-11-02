import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BASEURL, KEY_CONNECT, API_KEY} from "./constants/constants";
import PhotoOfDay from "./components/PhotoOfDay";
import Header from "./components/Header";
import Photo_Info from "./components/Photo_Info";


function App() {
    const [data, setData] = useState({})

    useEffect(() =>{
        call();

    },[])

    const call = () => {
        axios.get(BASEURL + KEY_CONNECT + API_KEY)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.error(err)
            })

    }



  return (
    <div className="App">
      <Header data={data} setData={setData} call={call}  />
        <PhotoOfDay data={data}/>
        <Photo_Info data={data} />
    </div>
  );
}

export default App;
