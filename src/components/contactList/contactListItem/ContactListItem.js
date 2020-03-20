import React from "react";

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li>
      <span>{name}, </span>
      <span>{number}</span>
      <button onClick={deleteContact} type="button" id={id}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactListItem;
