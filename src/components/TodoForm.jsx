import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };
  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <div className="todo-input">
        <form onSubmit={handleSubmit}>
          <input
            className="input-especial"
            type="text"
            placeholder="digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar tarefa</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
