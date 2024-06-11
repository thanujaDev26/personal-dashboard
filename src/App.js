import './App.css';
import Signup from "./Components/Forms/Signup";
import { useState,useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Sigin from "./Components/Forms/Sigin";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

    let [lecoBalance, setLecoBalance] = useState('');

    let getNewUser = async (user) => {
        let formData = {
            leco : user.leco,
        }
        try {
            const response = await axios.post('http://localhost:3000/check-balance', formData);
            console.log(response);
            setLecoBalance(response.data.balance);
            //console.log(lecoBalance);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Sigin />} />
                <Route path="/signup" element={<Signup getNewUser={getNewUser} />} />
                <Route path="/dashboard" element={<Dashboard lecoBalance={lecoBalance} />} />
            </Routes>
        </div>
    );
}

export default App;
