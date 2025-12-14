import { useState } from "react";

interface ITodo {
  title: string;
  completed: boolean;
  id: string;
}

const generateRandomId = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export function Kata2() {
  const [todos, setTodos] = useState<Array<ITodo>>([]);
  const [currText, setCurrText] = useState<string>("");
  const [currCompleted, setCurrCompleted] = useState<boolean>(false);
  const [filterIncompleted, setFilterIncompleted] = useState<boolean>(false);

  const addTodo = (todo: Omit<ITodo, "id">) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        ...todo,
        id: generateRandomId(10),
      },
    ]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => todoId != prevTodo.id);
    });
  };

  const changeStatus = (todoId: string, status: boolean) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === todoId) {
          return {
            ...prevTodo,
            completed: status,
          };
        }

        return prevTodo;
      });
    });
  };

  const handleChangeFilter = () =>{ 
    setFilterIncompleted(prevFilter => !prevFilter)
  }

  const handleSave = () => {
    addTodo({
      completed: currCompleted,
      title: currText,
    });
    setCurrCompleted(false);
    setCurrText("");
  };

  return (
    <div>
      <div>
        <label htmlFor="text-todo">Text todo</label>
        <input
          id="text-todo"
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.currentTarget.value)}
        />
        <label htmlFor="completed-todo">is completed?</label>
        <input
          id="completed-todo"
          type="checkbox"
          checked={currCompleted}
          onChange={(e) => setCurrCompleted(e.currentTarget.checked)}
        />
        <button type="button" onClick={handleSave}>
          save todo
        </button>
        <button type="button" onClick={handleChangeFilter}>
          {filterIncompleted ? "show all": "show only incompleted"} 
        </button>
      </div>

      <div>
        <h1>Todos</h1>
        {todos.map((todo) => {
          if (filterIncompleted && todo.completed) {
            return
          }

          return (
            <div key={todo.id}>
              <h4>title: {todo.title}</h4>
              <label htmlFor="mark-complete-todo">
                completed: {todo.completed ? "yes" : "no"}
              </label>
              <input
                checked={todo.completed}
                type="checkbox"
                name="mark-complete-todo"
                id="mark-complete-todo"
                onChange={() => {
                  changeStatus(todo.id, !todo.completed);
                }}
              />
              <button onClick={() => removeTodo(todo.id)} type="button">
                remove todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
