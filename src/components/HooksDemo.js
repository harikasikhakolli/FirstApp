import {useState} from 'react'
import ReactDOM from 'react-dom';

function HooksDemo()
{
    const [count,setCount]=useState(0);
    return(
        <>
        <h2>count</h2>
        <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}
ReactDOM.render(   
    <HooksDemo/>,   
    document.getElementById('hooks')   
);   
export default HooksDemo