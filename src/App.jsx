import { createContext, useState } from 'react';
import './App.css';
import Events from './components/Events';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nopage from './components/Nopage';
import Layout from './components/Layout';

export const countContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = ()=>{
    setCount((prev)=>prev+1);
  }

  return (
    <>
      <countContext.Provider value={count}>
        <button onClick={increment}>increment</button>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="events" element={<Events />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Nopage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </countContext.Provider>
    </>
  );
}

export default App;
