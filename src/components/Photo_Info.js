import React from "react";

export default function Photo_Info(props) {
    const {data} = props;
    return(
        <div>
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
        </div>
    )
}














































