import './App.css';
import {Header} from "../Header/Header";
import {useState} from "react";

function App() {
    const [task, setTask] = useState()

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
