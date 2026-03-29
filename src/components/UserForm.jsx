const UserForm = ({ name, setName, addUser, editIndex }) => {
  return (
    <div className="userform-container">
      <input
        className="userform-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button className="userform-button" onClick={addUser}>
        {editIndex !== null ? "Actualizar" : "Agregar"}
      </button>
    </div>
  );
};

export default UserForm;