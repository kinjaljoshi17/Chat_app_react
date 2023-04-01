import REACTLOGO from "../Chatapppages/image/logo.png";
import "../Chatapppages/style.css";

function Homepage(props) {
  return (
    <div className="home-container">
      <img id="Logo2" src={REACTLOGO} />
      <h1 id="Welcome-text"></h1>
      <button id="btn" onClick={() => props.setmsg("Welcome to chatapp")}>
        Click to Login
      </button>
    </div>
  );
}

export default Homepage;
