import './App.css';
import { useToggle } from './useToggle';

function App() {
    const { state: isVisible, toggle } = useToggle(false);
    const { state: isVisible2, toggle: toggle2 } = useToggle(false);

    return (
        <div className="App">
            <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
            {isVisible && <h1>Hidden Text</h1>}
            <button onClick={toggle2}>{isVisible ? 'Hide' : 'Show'}</button>
            {isVisible2 && <h1>Hidden Text</h1>}
        </div>
    );
}

export default App;
