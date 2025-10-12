import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("hide");
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState("");
  const [revealKey, setRevealKey] = useState("");
  const [revealed, setRevealed] = useState("");

  const hideSecret = async () => {
  const res = await fetch("http://localhost:8000/hide", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret }),
  });
  const data = await res.json();
  setKey(data.key);
};

const revealSecret = async () => {
  const res = await fetch(`http://localhost:8000/reveal/${revealKey}`);
  const data = await res.json();
  setRevealed(data.secret || data.error);
};


  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setTab("hide")}>Hide</button>
      <button onClick={() => setTab("reveal")}>Reveal</button>

      {tab === "hide" && (
        <div>
          <h2>Hide Secret</h2>
          <input value={secret} onChange={e => setSecret(e.target.value)} placeholder="Enter your secret"/>
          <button onClick={hideSecret}>Hide</button>
          {key && <p>Tu key: {key}</p>}
        </div>
      )}

      {tab === "reveal" && (
        <div>
          <h2>Reveal Secret</h2>
          <input value={revealKey} onChange={e => setRevealKey(e.target.value)} placeholder="Enter your key"/>
          <button onClick={revealSecret}>Reveal</button>
          {revealed && <p>{revealed}</p>}
        </div>
      )}
    </div>
  );

}

export default App;
