import React from "react";
import {useNavigate} from 'react-router-dom'
function ContactUs(){
    const navigate=useNavigate()

    return(
        <div className="text-center">
            <h1>ContactUs</h1>
            {/* link to navigate to user component */}
            <button className="btn btn-warning" onClick={()=>navigate('/users')}> Go To users</button>
        </div>
    )
}
export default ContactUs;