import React from "react";

const ChatUsers = (props) => {
  const { message, sendTime, photoUrl, friendName } = props;
  return (
    <>
      <div className="chat-container">
        <img
          className="profileimg"
          alt={friendName}
          src={require(`../assets/${photoUrl}`)}
        ></img>
        <strong>{friendName}</strong>
        <p className="last-message">{message}</p>
        <span className="time-right">{sendTime}</span>
      </div>
    </>
  );
};
export default ChatUsers;
