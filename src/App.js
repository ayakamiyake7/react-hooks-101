import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const increment2 = () => {
        setCount(previousCount => previousCount + 1)
    }
    const decrement2 = () =>{
        setCount(previousCount => previousCount - 1)
    }
    const reset = () => {
        setCount(0)
    }
    const multiply = () => {
        setCount(previousCount => previousCount * 2)
    }
    const threeTimes = () => {
        // if (count % 3 === 0) {
        //     setCount(count / 3)
        // } 
        setCount(previousCount => {
            if (previousCount % 3 === 0) {
                return previousCount / 3
            } else {
                return previousCount
            }
        })
    }


    return (
        <>
            <div>
                count: {count}
            </div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>

            <div>
            <button onClick={increment2}>+1</button>
            <button onClick={decrement2}>-1</button>
            </div>

            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={multiply}>×2</button>
                <button onClick={threeTimes}>/3 if multiples of 3</button>

            </div>

        </>
    )
}

export default App
