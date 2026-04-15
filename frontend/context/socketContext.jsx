import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [newDataFlag, setNewDataFlag] = useState(false)
  let user = useSelector((state) => state.user);

  useEffect(() => {
    const socket = io("http://localhost:3535", {
      auth: {
        userId: user?.id,
      },
    });

    setSocket(socket);

    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => socket && socket.close();
  }, [user?.id]);
  
  console.log("Online Users: ", onlineUsers);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers, newDataFlag, setNewDataFlag }}>
      {children}
    </SocketContext.Provider>
  );
};
