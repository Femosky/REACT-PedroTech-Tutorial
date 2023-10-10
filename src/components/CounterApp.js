import { useCounterApp } from '../useCounterApp';

export function CounterApp() {
    const { state, increase, decrease, reset } = useCounterApp();

    return (
        <div>
            <p>{state}</p>
            <button onClick={increase}>Add</button>
            <button onClick={decrease}>Subtract</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
