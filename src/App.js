import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
    const [username, setUsername] = useState('Femosky');

    return (
        <div className="App">
            <AppContext.Provider value={{ username, setUsername }}>
                <Router>
                    <Navbar name="femi" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1>ERROR 404</h1>} />
                    </Routes>
                </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
