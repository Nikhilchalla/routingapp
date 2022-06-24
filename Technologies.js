import React from "react";
import {NavLink, Outlet} from 'react-router-dom'
function Technologies(){
    return (
        <div className="text-center container">
            
            {/*define links for child component*/ }
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link" to="" >HTML</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="javascript">Javascript</NavLink>
            </li>
            
            </ul>
            {/* placeholder to load selected componenet */}
            <div>
            <Outlet />
            </div>
         </div>
    )
}

export default Technologies;