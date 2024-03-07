import React, { Fragment } from "react";
import classes from "./Todo.module.css";
import darkStyles from "../../dark-mode.module.css";
import TodoList from "./Todo-List";
import TodoControl from "./TodoControl";
import TodoForm from "../layout/TodoForm";
import { useSelector } from "react-redux";

const Todo = () => {
  const isDark = useSelector((state) => state.ui.isDark);

  const lists = useSelector((state) => {
    const filter = state.todo.filter;
    if (filter === "all") {
      return state.todo.lists;
    } else if (filter === "active") {
      return state.todo.lists.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return state.todo.lists.filter((todo) => todo.completed);
    }
  });
  return (
    <Fragment>
      <div className={`${classes.todo} ${isDark && darkStyles.dark}`}>
        <TodoForm
          type="text"
          placeholder="Create a new todo.."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Create a new todo..")}
        />

        <div className={`${classes.lists} ${isDark && darkStyles.darkShadow}`}>
          <ul>
            {lists.map((app) => (
              <TodoList id={app.id} key={app.id} text={app.text} />
            ))}
          </ul>
          <TodoControl />
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
