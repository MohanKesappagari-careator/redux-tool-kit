import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { adduser } from "./features/userSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const user = useSelector((store: RootState) => store.user);
  const onClick = async () => {
    await dispatch(adduser(name));
  };

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={onClick}>Add To Store</button>

      {user && user.map((val: any) => <h1>{val}</h1>)}
    </div>
  );
}

export default App;
