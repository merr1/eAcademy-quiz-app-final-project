import React, { useRef, useState } from "react";
import CustomMenu from "./CustomMenu";
const ContextList = ({ id, time, score, local, setLocal }) => {
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

      <CustomMenu
        listItemRef={listItemRef}
        local={local}
        setLocal={setLocal}
        id={id}
        time={time}
        open={isOpen}
      />
    </tr>
  );
};
export default ContextList;
