import { useState } from "react";

function Counter(params) {
    
    const [count, setState] = useState(0)

    const increment = () => {
        setState(count +1)
    }

    return (

        <>
            <p>Button clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </>
    )
}

export default Counter