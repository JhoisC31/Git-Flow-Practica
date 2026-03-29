import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = () => {
    setUsers([...users, name]);
    setName("");
  };

  return (
    <div>
      <h1>Usuarios</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={addUser}>Agregar</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;