import React, { useEffect, useState} from 'react'

const App = (props) => {
    const [state, setState] = useState(props)
    const { name, price } = state

    useEffect(() => {
        console.log('This is like componentDidMount or componentDidUpdate.');
    })
    useEffect(() => {
        console.log('This is like componentDidMount');
    }, [])
    useEffect(() => {
        console.log('this callback is for name only.');
    }, [name])

    const renderPeriod = () => {
        console.log('renderPeriod renders period');
        return '。'
    }

    return (
        <>
            <p>This is {name}'s {price}.{renderPeriod()}</p>
            <button onClick={()=> setState({...state, price: price + 1})}>+1</button>
            <button onClick={()=> setState({...state, price: price + 1})}>-1</button>
            <button onClick={()=> {setState(props)}}>Reset</button>

            <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
        </>
    )
}

App.defaultProps = {
    name: 'sample',
    price: 1000,
}

export default App
