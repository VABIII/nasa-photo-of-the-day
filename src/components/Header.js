import React from "react";
import Search from "./Search";

export default function Header(props) {
    const {data, setData, call} = props;

    return(
        <div>
            <Search setData={setData} call={call} />
            <h1>{data.date}</h1>
        </div>
    )

}
















































