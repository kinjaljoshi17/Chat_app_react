import React from "react";
import '../Chatapppages/style.css';
import REACTLOGO from '../Chatapppages/image/logo.png';


function Welcome() {



    return (
        <div>

            <img alt=" " id="Logo" src={REACTLOGO} />
            <h1 id="Welcome-text"> Welcome to Lets Chat App!</h1>
            <button >Clock to login using email</button>
        </div >
    )
}

export default Welcome;