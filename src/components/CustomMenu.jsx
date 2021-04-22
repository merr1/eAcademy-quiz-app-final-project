import React, { useState, useEffect } from "react";
import del from "../img/delete.svg";

const CustomMenu = ({ listItemRef, open, id, local, setLocal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const deleteOnClick = () => {
    let newArr = [...local];
    newArr = newArr.splice(id - 1, 1);
    setLocal(newArr);
    localStorage.clear();
    localStorage.setItem("myArray", JSON.stringify(newArr));
    setIsOpen(false);
  };
  useEffect(() => {
    open && setIsOpen(true);
  }, [open]);

  const CloseContextMenu = (e) => {
    let listItem = listItemRef.current;
    listItem && listItem.contains(e.target)
      ? e.preventDefault()
      : setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", CloseContextMenu);

    return () => {
      document.removeEventListener("click", CloseContextMenu);
    };
  });

  return isOpen ? (
    <div className="menu">
      <div className="delete" onClick={() => deleteOnClick()}>
        <img className="icon" src={del} alt="delete icon" />
        <span>delete</span>
      </div>
    </div>
  ) : null;
};
export default CustomMenu;
