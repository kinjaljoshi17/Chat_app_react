
import REACTLOGO from '../Chatapppages/image/logo.png';
import '../Chatapppages/style.css';

const Login = () => {

    return (
        <div className="container">
            <link rel="stylesheet" href="./Chatapppages/style.css"></link>
            <img id="Logo2" src={REACTLOGO} />
            <input type="text" id="Email" placeholder="Enter your E-mail" />
            <p>
                <input type="text" id="password" placeholder="Enter your Password" />
            </p>

            <button id="Loginbtn">Log in</button>



        </div>
    );
};

export default Login;
