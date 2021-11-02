import React from "react";

export default function PhotoOfDay(props) {
    const { data } = props;



    return(
        <div>
            <img src={data.url} alt="Nasa Photo of the Day"/>
        </div>
    )
}
















































