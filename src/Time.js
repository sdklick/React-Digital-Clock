import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";


const Time = () => {



const [cv,uv] = useState();

setInterval(()=>{
    const ti = new Date().toLocaleTimeString();
    uv(ti);
},1000);


  return (
    <div className='text-center my-3 '>
<button className='btn btn-success border border-warning mb-5'>Digital Clock</button><br/>
      <button className='btn btn-success border border-warning'>{cv}</button>
    </div>
  )
}

export default Time;