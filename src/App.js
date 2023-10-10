import './App.css';
import { Person } from './components/Person';

function App() {
    return (
        <div className="App">
            <Person
                name="Femi"
                email="femi@email.com"
                age={23}
                isMarried={false}
                friends={['jessica', 'jake', 'jerry', 'jasmine']}
            />
        </div>
    );
}

export default App;
