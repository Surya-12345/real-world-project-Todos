import React from "react";
import "./index.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todolist, deleteHandler, editHandler }) => {
  return (
    <>
      <div className="container">
        {todolist.map((todo, index) => (
          <div
            className={
              index % 2 === 0 ? "saved-container-1" : "saved-container-2"
            }
          >
            <div key={index} className="saved-todo">
              <h5 className="todo-item">{todo}</h5>
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteHandler(index)}
                >
                  <IoIosCloseCircleOutline size={30} />
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => editHandler(index)}
                >
                  <FaEdit size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
