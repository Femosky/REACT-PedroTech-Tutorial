import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CounterApp } from './components/CounterApp';
import { useState } from 'react';

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            },
        },
    });

    const [isVisible, setIsVisible] = useState(false);

    function toggle() {
        setIsVisible((prev) => !prev);
        // setIsVisible(!isVisible);
    }

    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>

                {isVisible && (
                    <div>
                        <CounterApp />
                    </div>
                )}
            </QueryClientProvider>
        </div>
    );
}

export default App;
