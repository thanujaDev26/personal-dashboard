import './App.css';
import Signup from "./Components/Forms/Signup";
import { useState } from "react";
import axios from "axios";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Sigin from "./Components/Forms/Sigin";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
    const [lecoBalance, setLecoBalance] = useState('');
    const [fname, setFname] = useState('');

    const getNewUser = async (user) => {

        try {
            const response = await axios.post('http://localhost:3000/signup', user);
            console.log('Received response from backend:', response.data);

            // Assuming response.data contains the necessary data
            setLecoBalance(response.data.leco);
            setFname(response.data.lname);
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }

    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Sigin />} />
                <Route path="/signup" element={<Signup getNewUser={getNewUser} />} />
                <Route path="/dashboard" element={<Dashboard lecoBalance={lecoBalance} fname={fname} />} />
            </Routes>
        </div>
    );
}

export default App;
