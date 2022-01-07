import React from 'react';
import Counter from "./counter";

class Counters extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:
                [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                    { id: 4, value: 0 },
                ]
        }
    }
    onclickIncrement = (counter_id) => {
        const counter = this.state.counter.map(c => {
            if (c.id === counter_id) {
                c.value++
                return c
            }
            else
                return c
        })
        this.setState({ counter })
    }

    onclickDecrement = (counter_id) => {
        const counter = this.state.counter.map(c => {
            if (c.id === counter_id) {
                c.value--
                return c
            }
            else
                return c
        })
        this.setState({ counter })
    }

    onclickreset = () => {
        const counters = [...this.state.counter]
        const counter = counters.map(c => {
            if (c.value !== 0) { c.value = 0; return c }
            else return c
        })
        console.log(counter)
        this.setState({ counter })
    }
    onclickDelete = (counter_id) => {
        console.log(counter_id)
        const counter = this.state.counter.filter(c =>
            c.id !== counter_id
        )
        this.setState({ counter })
    }
    render() {
        return <div>hello, I am a counters
            <button type="reset" onClick={() => { this.onclickreset() }}>RESET</button>
            {
                this.state.counter.map(val => {
                    return (< Counter
                        key={val.id}
                        ondelete={this.onclickDelete}
                        onincrement={this.onclickIncrement}
                        ondecrement={this.onclickDecrement}
                        counter={val} />)
                })}

        </div>;
    }
}

export default Counters
// ReactDOM.render(<Counters />, document.querySelector('#counter'));