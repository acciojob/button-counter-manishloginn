import { useState } from "react";
import app from "./App"


const Counter =  ()=> {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev +1)
    }

    return (
        <>
        <p><p>Button clicked {count} times</p></p>
        <button onClick={increment}>Click me</button>
        </>
    )
} 

export default Counter