import { useState } from "react"

export const useCounter = (count = 100) => {
    const [state, setState] = useState(count);
    
    const increment = () => {
        setState(state + 1);
    }
    
    const decrement = () => {
        setState(state - 1);
    }

    const reset = () => {
        setState(100);
    }
    
    return {
        state,
        increment,
        decrement,
        reset 
    }
}
