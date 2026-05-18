"use client"
import { useState } from "react";

export default function AddToCartComponent(){
    // creating state
    //     state, functUpdateState,     intitize value 
    //        |         |              /
    const [count, setCount] = useState(0);
    // update state value
    // setCount(count+1)
    return(
         <div className="flex items-center justify-between mt-3">
            <button
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded"
                onClick={() => setCount(count + 1)}
            >
                Add To Cart
            </button>
            <span className="text-sm font-semibold text-gray-900"> {count} item(s)</span>
        </div>

    )
}