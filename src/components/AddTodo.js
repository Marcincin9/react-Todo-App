function AddTodo(props) {
  function openForm() {
    props.onOpen();
  }
  function closeForm() {
    props.onClose();
  }
  return (
    <div>
      <button className="addNewTask" onClick={openForm}>
        Open Form
      </button>
      <button className="resetTask" onClick={closeForm}>
        Close Form
      </button>
    </div>
  );
}

export default AddTodo;
