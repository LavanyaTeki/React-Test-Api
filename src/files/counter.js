import React, { useState } from 'react'
import axios from 'axios';
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [jokes, setJokes] = useState([]);

    const incrementHandler = (event) => {
        event.preventDefault();
        setCount(prev => (prev, count + 1))
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(function (response) {
                setJokes(prev => [response.data, ...prev]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const resetHandler = (event) => {
        event.preventDefault();
        setCount(0)
        setJokes([]);
    }
    return (
        <div className="counterContainer">
            <div className='counterWrapper'>
                <h3 className='counterClass'>COUNTER :<span className={count > 0 ? 'color' : ''}> {count}</span></h3>
                <button className='increment' onClick={incrementHandler} >Increment</button>
                <button className='reset' onClick={resetHandler}>Reset</button>
            </div>
            <div className='jokesContainer'>
                {jokes.map((data, index) =>
                    <div className='jokesWrapper' key={data.id}>
                        <p><span>{index + 1} - </span>{data.value}</p>
                    </div>
                )}
            </div>
        </div>

    );
}
export default Counter;