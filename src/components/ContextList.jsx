import React, { useRef, useState } from "react";
import CustomMenu from "./CustomMenu";
const ContextList = ({ id, time, score }) => {
  const listItemRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <tr
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen(e);
      }}
    >
      <td>{id}</td>
      <td>{time}</td>
      <td>{score}</td>

      <CustomMenu listItemRef={listItemRef} time={time} open={isOpen} />
    </tr>
  );
};
export default ContextList;
