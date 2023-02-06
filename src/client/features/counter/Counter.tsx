import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, counter } from "./couterSlice";

const Counter = () => {
    const dispatch = useDispatch() 
    const number = useSelector(counter)
    console.log(number);
    

    return (
        <div>
            {number.count}
            <button
                onClick={ ()=> dispatch(increment())}
            > Bug Button</button>
        </div>
    )
}


export default Counter