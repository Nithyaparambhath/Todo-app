import React, { useState } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [showPlusBtn, setShowPlusBtn] = useState(true);
  const [dataUpdate, setDataUpdate] = useState(null);

  const addTodo = () => {
    if (!todo) {
      alert("Plz fill data");
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteData = (data) => {
    setTodos(
      todos.filter((val, index) => {
        return index !== data;
      })
    );
  };

  const editData = (data, key) => {
    // console.log(data);
    setShowPlusBtn(false);
    setTodo(data);
    setDataUpdate(data);
  };

  const updateTodo = () => {
    console.log(todo);
    console.log(dataUpdate);
  };

  return (
    <div>
      <div className="add-items">
        <input
          type="text"
          placeholder="Enter items"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        {showPlusBtn ? (
          <i onClick={addTodo} className="fas fa-plus"></i>
        ) : (
          <i onClick={updateTodo} className="fas fa-edit"></i>
        )}
      </div>

      <div className="show-items">
        {todos.map((value, index) => {
          return (
            <div className="data" key={index}>
              <h3>{value}</h3>
              <div>
                <i
                  style={{ marginRight: 11 }}
                  onClick={() => {
                    editData(value, index);
                  }}
                  className="fas fa-edit"
                ></i>
                <i
                  onClick={() => {
                    deleteData(index);
                  }}
                  className="fas fa-trash-alt"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
