import { Fragment, useEffect, useState } from "react";
import Button from "../components/Button";

const CounterPage = ({initialCount}) => {
    const [count, setCount] = useState(initialCount)

    useEffect(()=> {
        console.log(count);
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1 className="text-lg">Count is: {count}</h1>
            <div className="flex flex-row">
                <Button primary rounded onClick={increment}>Increment</Button>
                <Button danger rounded onClick={decrement}>Decrement</Button>
            </div>

            <form>
                
            </form>

        </div>
    );
}

export default CounterPage;