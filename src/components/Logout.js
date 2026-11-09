import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "./Logout.css";

const Logout = () => {
  // Получаем пользователя из Redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Обработка кнопки Logout (самостоятельное задание 2)
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        {/* Самостоятельное задание 1: Вывод имени */}
        Welcome <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;