import React from "react";

function Footer(){
    return (
        
            <footer className="d-flex justify-content-around bg-dark text-white py-5">
                {/* address 1 */}
                <div className="address-1">
                    <h4>KPHB</h4>
                    <h4>Hyderabad</h4>
                    <h4>508001</h4>
                </div>
                <div className="contact-info">
                    <h4>test@gmail.com</h4>
                    <h4>
                        2543118
                    </h4>
                </div>
                {/* address  */}
                <div className="address-2">
                    <h4>AMEERPET</h4>
                    <h4>Hyderabad</h4>
                    <h4>500043</h4>
                </div>
                

            </footer>
        

    )
}

export default Footer