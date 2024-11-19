import { useState, useEffect } from "react";
import "./couter.css"
function Couters() {
    const [count, setcount] = useState(0);

    let Increment = () => {
        setcount(count + 1);
    }
    let decrement = () => {
        if (count > 0) {
            setcount(count - 1);
        } else {
            alert("count is zero");
        }
    }

    return (
        <div className="container">
            <div className="flexi">
                <button onClick={Increment} className="Increment">Increment +</button>
                <h2>{count}</h2>
                <button onClick={decrement} className="decrement">decrement -</button>
            </div>
        </div>
    )
}
export default Couters;