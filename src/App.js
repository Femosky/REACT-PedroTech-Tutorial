import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();

function App() {
    const client = new QueryClient({});

    return (
        <div className="App">
            <QueryClientProvider>
                <Router>
                    <Navbar name="femi" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<h1>ERROR 404</h1>} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </div>
    );
}

export default App;
