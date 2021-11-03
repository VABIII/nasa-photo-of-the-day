import React, {useState} from "react";
import ToggledInfOff from "./ToggledInffOff";
import ToggledInfo from "./ToggledInfo";

export default function Photo_Info(props) {
    const [isToggled, setIsToggled] = useState(true);
    const {data} = props;

    const toggleInfo = () => {
        !isToggled ? setIsToggled(true) : setIsToggled(false)
    };

    return(
        <div>
            {
               isToggled ? <button onClick={toggleInfo}>{data.title}</button> : <ToggledInfo data={data} toggleInfo={toggleInfo} />
            }
            {/*<ToggledInfOff data={data}/>*/}


        </div>
    )
}














































