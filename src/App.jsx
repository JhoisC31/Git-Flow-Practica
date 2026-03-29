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

      <h2>Lista de usuarios</h2>

      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {i + 1}. {u}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;