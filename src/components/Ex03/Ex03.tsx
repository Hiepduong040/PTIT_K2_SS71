import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/reducers/themeReducer';
import "./Ex03.css"

export default function Ex03() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
  
    const handleToggleTheme = () => {
      dispatch(toggleTheme());
    };
  
    return (
     <div>Ex03
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="content">
          <button onClick={handleToggleTheme}>{isDarkMode ? "Dark" : "Light"}</button>
        </div>
      </div>
     </div>
    );
}
