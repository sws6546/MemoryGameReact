import Plansza from "./components/Plansza.jsx";
import {useState} from "react";

function App(){
    const [win, setWin] = useState(false)
    function changeWin(){
        setWin((e) => !e)
    }

    return (
        <div style={{
        }}>
            <h1>Memory Game with FLOWERS ⚡⚡⚡</h1>
            {!win ? <Plansza changeWin={changeWin}/> : <h1>Wygrana</h1>}
        </div>
    )
}

export default App