import ChatLogo from "../assets/letschatlogo.png";
import Jessica from "../assets/Jessica.png";

const Header = () => {
  return (
    <div className="mob-container" id="recent-chats">
      <div className="main">
        <img className="logo" src={ChatLogo} target="blank"></img>
        <h1 className="heading">
          Chats
          <div class="container">
            <img class="jessica-profile" src={Jessica} />
            <p>Jessica </p>
            <p class="online">
              {" "}
              <br /> Online
            </p>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Header;
