import { useState } from 'react';

export function useCounterApp(initialVal = 0) {
    const [state, setState] = useState(initialVal);

    function increase() {
        setState((prev) => prev + 1);
    }

    function decrease() {
        setState((prev) => prev - 1);
    }

    function reset() {
        setState(0);
    }

    return { state, increase, decrease, reset };
}
