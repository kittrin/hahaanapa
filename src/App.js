import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./components/menu/Menu";


function App() {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </div>

    );
}

export default App;
