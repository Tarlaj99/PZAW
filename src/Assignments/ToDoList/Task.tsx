import { useEffect, useState } from "react"

export default function Task({func}){
    let [x,setX] = useState<number>(0);

    useEffect(() => {
        setX(prevX => prevX + 1);
    })
    return(
        <h1>{x}</h1>
    )
}