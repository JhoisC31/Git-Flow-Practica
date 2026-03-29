const UserList = ({ users, editUser, deleteUser }) => {
  if (users.length === 0) {
    return <p>No hay usuarios</p>;
  }

  return (
    <ul className="userlist">
      {users.map((u, i) => (
        <li key={i} className="userlist-item">
          <span>{u}</span>
          <div className="userlist-buttons">
            <button className="edit-button" onClick={() => editUser(i)}>
              Editar
            </button>

            <button className="delete-button" onClick={() => deleteUser(i)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;