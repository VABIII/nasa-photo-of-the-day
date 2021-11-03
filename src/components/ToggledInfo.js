import React from "react";

export default function ToggledInfo(props) {
    const {data, toggleInfo} = props;

    return(
        <div>
            <h3>
                <button onClick={toggleInfo}>{data.title}</button>
            </h3>
            <p>{data.explanation}</p>
        </div>
    )

}














































