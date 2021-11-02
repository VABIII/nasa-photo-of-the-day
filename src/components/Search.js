import React, {useState} from "react";


export default function Search(props) {
 const {onSubmit, onChange} = props;

    return (
        <div>   <form>
                    Search:&nbsp;&nbsp;
                    <input type="date" onChange={onChange}  />
                    {/*<input type="form"/>*/}
                    <button formAction="submit" onClick={onSubmit}>Search</button>
                </form>
        </div>
    )


}















































