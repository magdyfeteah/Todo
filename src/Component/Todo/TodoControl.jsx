import React, { Fragment, useState } from "react";
import classes from "./TodoControl.module.css";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todo-slice";
import darkStyles from "../../dark-mode.module.css";

const TodoControl = () => {
  const isDark = useSelector((state) => state.ui.isDark);
  const filter = useSelector(state =>state.todo.filter)
  const todos = useSelector((state) => state.todo.lists);
  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodos = useSelector((state) =>
    state.todo.lists.filter((todo) => todo.completed)
  );
  const dispatch = useDispatch();

  const allHandler = () => {
    dispatch(todoActions.setFilter("all"));
  };
  const activeHandler = () => {
    dispatch(todoActions.setFilter("active"));
  };
  const completedHandler = () => {
    dispatch(todoActions.setFilter("completed"));
  };
  const clearCompletedHandler = () => {
    completedTodos.forEach((todo) => {
      dispatch(todoActions.deleteTodo(todo.id));
    });
  };


  return (
    <div className={`${classes.control} ${isDark&&darkStyles.dark} `}>
      <div className={classes.description}>
        <p>{activeTodosCount} item(S) left</p>
      </div>
      <div className={classes.links}>
        <button className={`${filter==="all"&&classes.active}`} onClick={allHandler}>All</button>
        <button className={`${filter==="active"&&classes.active}`} onClick={activeHandler}>Active</button>
        <button className={`${filter==="completed"&&classes.active}`} onClick={completedHandler}>Completed</button>
      </div>
      <div className={classes.clear}>
        <button onClick={clearCompletedHandler}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoControl;
