import React, { useEffect, useState } from "react";
// We import useStore from @nanostores/react to get reactivity on our Counter for our React Component
import { useStore } from "@nanostores/react";
import { counter, subtractFromCounter, addToCounter } from "../stores/Counter";

function Counter() {
    // Simply create a new Constant and place the counter imported from our store inside.
    const count = useStore(counter);

    const [timer, setTimer] = useState<number | null>(null);

    useEffect(() => {
        if (timer === null) {
            setTimer(
                setInterval(() => {
                    addToCounter();
                }, 1000),
            );
        }
        return () => {
            if (timer !== null) {
                clearInterval(timer);
            }
        };
    }, [timer]);

    return (
        <div>
            <h1 className="bold text-xxl">React...</h1>
            <div className="counter">
                <button onClick={subtractFromCounter}>-</button>
                <pre>{count}</pre>
                <button onClick={addToCounter}>+</button>
            </div>
            <div className="message">
                <slot />
            </div>
        </div>
    );
}

export default Counter;
