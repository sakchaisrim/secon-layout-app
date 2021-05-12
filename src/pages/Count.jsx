import React, { useState, useEffect } from 'react'

const Count = () => {

    // let counter = 0

    // const onChangeCounter = () => {
    //     counter = counter +1
    //     console.log(counter)
    // }

    // react hook useState()

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(50)
    },[])

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={ () => setCounter(counter + 1) }>Counter Up</button>
            <button onClick={ () => setCounter(counter - 1) }>Counter Down</button>
        </div>
    )
}

export default Count
