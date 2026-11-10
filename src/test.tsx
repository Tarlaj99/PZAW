import { useEffect, useRef, useState } from "react"

export default function Test(){
    let [x,setX] = useState<number>(0);
    const refreshes = useRef(0);

    const input = useRef(null);
    useEffect(() => {
        refreshes.current += 1
    })
    return(
    <>
        <input type="text" ref={input} />
        <h1>{refreshes.current}</h1>
        <button onClick={() => input.current.focus()}>{x}</button>
    </>
    )
}