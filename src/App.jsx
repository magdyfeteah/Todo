import { Fragment, useState, useEffect } from "react";
import "./App.css";
import styles from './dark-mode.module.css'
import Header from "./Component/layout/Header";
import Todo from "./Component/Todo/Todo";
import {  useSelector } from "react-redux";

const App = () => {
  const isEmptyList = useSelector((state) => state.todo.lists);
  const isDark = useSelector(state=>state.ui.isDark)
  useEffect(() => {
    const root = document.body
    if (isDark) {
        root.classList.add(styles.dark);
    } else {
        root.classList.remove(styles.dark);
    }
}, [isDark]);

  return (
    <Fragment classname={isDark && styles.dark}>
     
      <Header />
      <Todo />
      {isEmptyList.length===0 && <p className="empty">No Todo Here!</p>}
    
    </Fragment>
  );
};

export default App;
