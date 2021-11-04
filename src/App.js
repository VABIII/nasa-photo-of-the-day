import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import {BASEURL, KEY_CONNECT, API_KEY, DATE} from "./constants/constants";
import PhotoOfDay from "./components/PhotoOfDay";
import Header from "./components/Header";
import Photo_Info from "./components/Photo_Info";
import Footer from "./components/Footer";

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() +1;
const day = date.getDate();

const initialValues = {
    dates: `${year}-${month}-0${day}`
}


function App() {
    const [data, setData] = useState({});
    const [search, setSearch] = useState(initialValues.dates);

    useEffect(() =>{
        call();
    },[])


    const call = () => {
        axios.get(BASEURL + KEY_CONNECT + API_KEY)
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        axios.get(BASEURL + KEY_CONNECT + API_KEY + DATE + search)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.error(err);
            })
    }

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

  return (
    <div className="App">
      <Header initialValues={initialValues} data={data} onSubmit={onSubmit} onChange={onChange} />
        <PhotoOfDay data={data}/>
        <Photo_Info data={data} />
        <Footer data={data}/>
    </div>
  );
}

export default App;
