import React from "react";

function List(props) {
  return (
    <div onKeyPress={(e) => (e.key === "Enter" ? props.add() : "")}>
      <div className="input-container">
        <input
          className="input-holder"
          type="text"
          onChange={props.change}
          value={props.note}
          placeholder="my task"
          required
        />
        <button onClick={props.add} className="add-btn">
          Add
        </button>
      </div>
      <div className="todo-container">
        {props.todo.map((item) => (
          <div
            key={item.id}
            className={item.done ? "todo-item-done" : "todo-item"}
          >
            {item.todo}
            <div className="btns">
              <img
                className="done-image"
                src="../images/done.png"
                onClick={() => props.done(item.id)}
              />
              <img
                className="delete-image"
                src="../images/delete.png"
                onClick={() => props.delete(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div>number of task {props.todo.length}</div>
    </div>
  );
}
export default List;
