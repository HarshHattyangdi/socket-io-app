import { useState } from "react";
import SocketComponent from "./SocketComponent";

function AddNumberReceiverComponent() {
  const [socketComponent, setSocketComponent] = useState([]);
  const addSocketComponent = () => {
    setSocketComponent([...socketComponent, ""]);
  };
  return (
    <div>
      <input
        type="button"
        value="Add Number Receiver Component"
        onClick={addSocketComponent}
      />
      {socketComponent &&
        socketComponent.map((el, i) => {
          return <SocketComponent key={i} />;
        })}
    </div>
  );
}

export default AddNumberReceiverComponent;
