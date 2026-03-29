import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addUser = () => {
    if (!name) return;

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = name;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, name]);
    }

    setName("");
  };

  const editUser = (index) => {
    setName(users[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Usuarios</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={addUser}>
        {editIndex !== null ? "Actualizar" : "Agregar"}
      </button>

      <h2>Lista de usuarios</h2>

      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {u}
              <button onClick={() => editUser(i)}>Editar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;