import React, { Fragment } from "react";
import classes from "./Header.module.css";
import darkStyles from "../../dark-mode.module.css";
import darkIcon from "../../assets/icon-moon.svg";
import lightIcon from "../../assets/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const Header = () => {
  const isDark = useSelector((state) => state.ui.isDark);
  const dispatch = useDispatch();
  function getDarkHandler() {
    dispatch(uiActions.getDark());
  }
  return (
    <Fragment>
      <div className={`${classes.header} ${isDark && darkStyles.darkBackground}  `}>
        <div className="logo">
          <h1>T O D O</h1>
        </div>
        <div className={classes.darkIcon}>
          <button>
            <img
              src={isDark ? lightIcon : darkIcon}
              alt=""
              onClick={getDarkHandler}
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
