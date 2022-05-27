import React from "react";

const ReadNotes = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.no}</td>
      <td>{contact.customer}</td>
      <td>{contact.type}</td>
      <td>{contact.idp}</td>
      <td>{contact.addr}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}
        >
          Sửa
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.no)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ReadNotes;