import io from "socket.io-client";

function SocketComponent() {
  const SERVER = "http://localhost:4000";
  //   let socket = io();

  const connect = () => {
    console.log("handles the connection part");
    const socket = io(SERVER);
    socket.connect();
  };
  const disconnect = () => {
    const socket = io(SERVER);
    console.log("handles the disconnection part");
    socket.disconnect();
  };

  return (
    <div>
      <input type="button" value="Connect" onClick={connect} />
      <input type="button" value="Disconnect" onClick={disconnect} />
      <input type="text" disabled />
    </div>
  );
}

export default SocketComponent;
