import React, { useState, useRef } from "react";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [update, setUpdate] = useState(1);
  const inputRef = useRef(null);
  const ulRef = useRef(null);
  const TODOS_LS = "toDos";
  let toDos = [];

  const deleteToDo = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    setUpdate(update * -1);
    setValue("");
    saveToDos();
  };

  const saveToDos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  };

  const paintToDo = (text) => {
    const newId = toDos.length + 1;
    const toDoObj = {
      text: text,
      id: newId,
    };
    toDos.push(toDoObj);
    saveToDos();
  };

  const something = (toDo) => {
    paintToDo(toDo.text);
  };

  const loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(something);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = value;
    paintToDo(currentValue);

    setUpdate(update * -1);
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  loadToDos();

  const list = toDos.map((toDo, index) => (
    <li key={index} id={toDo.id} className="toDoLi">
      <div className="toDoText">{toDo.text}</div>
      <button onClick={deleteToDo} className="delBtn">
        X
      </button>
    </li>
  ));

  return (
    <div className="toDo">
      <form className="toDoForm" onSubmit={handleSubmit}>
        <input
          className="toDoInput"
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
          placeholder="write a memo"
        />
      </form>
      <div className="toDoList">
        <ul ref={ulRef} className="toDoUl">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;