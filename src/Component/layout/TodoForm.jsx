import React, { useState } from "react";
import classes from "./TodoForm.module.css";
import darkStyles from "../../dark-mode.module.css";

import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";
const TodoForm = (props) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.ui.isDark);

  const [enteredValue, setEnteredValue] = useState("");
  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return;
    }
    setEnteredValue("")
    dispatch(todoActions.addTodo(enteredValue));
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={enteredValue}
        onChange={inputChangeHandler}
        className={`${isDark && darkStyles.dark}`}
      />
      <button className={`${classes.button} ${isDark && darkStyles.dark}`}>
        + Add
      </button>
    </form>
  );
};

export default TodoForm;
