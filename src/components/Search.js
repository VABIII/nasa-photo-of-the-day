import React, {useState} from "react";

export default function Search(props) {
    const {setData, call} = props;
    const [search, setSearch] = useState("");

    const onChange = evt => {
        console.log(evt.target.value)
        setSearch(evt.target.value)

    }



    return (
        <div>
            Search:&nbsp;&nbsp;
            <input type="date" onChange={onChange} />

        </div>
    )


}















































