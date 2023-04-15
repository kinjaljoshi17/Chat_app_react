import { useEffect, useState } from "react";
import ChatUsersList from "../data/chatUsers";
import Headers from "./Headers";
import ChatUsers from "./ChatUsers";

const HomePage = (props) => {
  const { userId } = props;

  const getSelectedChatUsers = () => {
    const selectedChatUsers = ChatUsersList.filter(
      (c) => c.relationWith === userId
    );
    if (selectedChatUsers.length > 0) {
      return selectedChatUsers.map((u) => (
        <ChatUsers
          key={u.userId}
          message={u.message}
          sendTime={u.sendTime}
          photoUrl={u.photoUrl}
          friendName={u.friendName}
        />
      ));
    }
  };

  return (
    <>
      <Headers />
      <div>{getSelectedChatUsers()}</div>
    </>
  );
};

export default HomePage;
