const Counter = (props) => {
    return (<div>
        <h2 >Hi, I am a Car {props.counter.id}!</h2>
        <h2 >Hi, I am a Car value{props.counter.value}!</h2>
        <span>
            <button onClick={() => props.ondelete(props.counter.id)}>Delete</button>
            <button onClick={() => props.onincrement(props.counter.id)}>increment</button>

            <button disabled={props.counter.value === 0 ? "disabled" : ""} onClick={() => props.ondecrement(props.counter.id)}>decrement</button>


        </span>
    </div>)
}

export default Counter