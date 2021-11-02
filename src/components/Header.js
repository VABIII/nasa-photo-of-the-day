import React from "react";
import Search from "./Search";

export default function Header(props) {
    const {onSubmit, onChange, data} = props;

    return(
        <div>
            <Search onSubmit={onSubmit} onChange={onChange} />
            <h1>{data.date}</h1>
        </div>
    )

}
















































