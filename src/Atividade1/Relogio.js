import {useState, useEffect} from 'react';

function Relogio(){
    const[relogio, updateRelogio] = useState(new Date());
    
    useEffect(()=>{
        setTimeout(()=>{
            updateRelogio((relogio)=> relogio = new Date());
        }, 1000);
    });
    return(
        <div>
        <h1>{relogio.toLocaleTimeString()}</h1>
    </div>
);
}

export default Relogio;