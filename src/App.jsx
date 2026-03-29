import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addUser = () => {
    if (!name.trim()) return;

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

  const deleteUser = (index) => {
    const filteredUsers = users.filter((_, i) => i !== index);
    setUsers(filteredUsers);
  };

  return (
    <div style={styles.container}>
      <h1> Usuarios</h1>

      <div style={styles.form}>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <button style={styles.button} onClick={addUser}>
          {editIndex !== null ? "Actualizar" : "Agregar"}
        </button>
      </div>

      <h2>Lista de usuarios</h2>

      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul style={styles.list}>
          {users.map((u, i) => (
            <li key={i} style={styles.item}>
              <span>{u}</span>
              <div>
                <button style={styles.editBtn} onClick={() => editUser(i)}>
                  Editar
                </button>
                <button style={styles.deleteBtn} onClick={() => deleteUser(i)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    width: "200px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
  },
  editBtn: {
    marginRight: "5px",
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
  },
};

export default App;