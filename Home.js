import React from "react";
import imgOne from '../images/bg-1.jpeg'

function Home(){
    return(
        <div className="text-center container">
            <p className="display-1 text-info"> Welcome Page</p>
            <img src={imgOne} className='w-50' alt="" />
            <p className="lead my-5">lorem Navbar navigation links build on our .nav options with their
                 own modifier class and require the use of toggler classes for proper responsive styling. Navigation i
                 n navbars will also grow to occupy as much horizontal space as po
                 ssible to keep your navbar contents securely aligned.Navbar navigation links build on our .nav options with 
                 their own modifier class and require the use of toggler classes for proper responsive styling. Navigation in navbars will also grow to occupy as much horizontal space a
                s possible to keep your navbar contents securely aligned.</p>
        </div>
    )
}

export default Home;
