import React, { Fragment, useState } from "react";
import classes from "./TodoList.module.css";
import styles from "../../dark-mode.module.css";
import crossImg from "../../assets/icon-cross.svg";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";
import { CheckOutlined } from "@ant-design/icons";
const TodoList = ({ id, text }) => {
  const isDark = useSelector((state) => state.ui.isDark);

  const [showCross, setShowCross] = useState(false);
  const dispatch = useDispatch();

  const isCompleted = useSelector(
    (state) => state.todo.lists.find((todo) => todo.id === id)?.completed
  );

  const onDeleteApp = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  const completedTodoHandler = () => {
    dispatch(todoActions.toggleTodoComplete(id));
  };

  return (
    <Fragment>
      <li
        className={`${classes.list} ${isCompleted && classes.complete} ${
          isDark && styles.dark
        }`}
        onMouseEnter={() => setShowCross(true)}
        onMouseLeave={() => setShowCross(false)}
      >
        <button
          className={`${classes.circle} ${isCompleted && classes.complete}`}
          onClick={completedTodoHandler}
        >
          {isCompleted && <CheckOutlined className={classes.check} />}
        </button>
        <p className={isDark &&!isCompleted&& styles.dark}>{text}</p>
        {showCross && (
          <button className={classes.cross} onClick={onDeleteApp}>
            <span>X</span>
          </button>
        )}
      </li>
    </Fragment>
  );
};

export default TodoList;
