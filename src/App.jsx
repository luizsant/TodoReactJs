import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: "Criar funcionalidade X no sistema",
    //   category: "Trabalho",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   text: "Ir para academia",
    //   category: "Pessoal",
    //   isCompleted: false,
    // },
    // {
    //   id: 3,
    //   text: "Estudar React",
    //   category: "Estudos",
    //   isCompleted: false,
    // },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("ascendente");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <h1>Minha lista de tarefas</h1>
        <hr />
        <TodoForm addTodo={addTodo} />
        <hr />
        <Search search={search} setSearch={setSearch} />
        <hr />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <hr />
        <h1>Lista de Tarefas</h1>
        <hr />
        <div className="todo-lista">
          {todos
            .filter((todo) =>
              filter === "all"
                ? true
                : filter === "completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "ascendente"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
