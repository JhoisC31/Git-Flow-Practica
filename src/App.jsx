import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./components/style.css";

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
    <div className="container">
      <h1>Usuarios</h1>

      <UserForm
        name={name}
        setName={setName}
        addUser={addUser}
        editIndex={editIndex}
      />

      <h2>Lista de usuarios</h2>

      <UserList
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;