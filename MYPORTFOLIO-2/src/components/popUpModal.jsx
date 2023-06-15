import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


const PopUpModal = ({closePopUp}) => {
    const [data , setData] = useState('')
    const navigate = useNavigate()


    const handleProceed = () =>{
        const pass = import.meta.env.VITE_PASSWORD

        if(pass === data){
            navigate("/AdminPanel")
        }else{
            alert(`Wrong Password`)
        }
    }

  return (
    <>
<div className='popup'>
        <p>Enter Admin Password</p>
        <div className="input">
            <input placeholder='Enter Password' type='password' value={data} onChange={(e)=>setData(e.target.value)}/>
            <div className="btns">
                <button onClick={closePopUp}>Cancel</button>
                <button onClick={handleProceed}>Proceed</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default PopUpModal;