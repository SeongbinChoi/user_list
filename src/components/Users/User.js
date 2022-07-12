import React from "react";

const User = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
    console.log(props.id);
  }

  return (
    <li onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default User;