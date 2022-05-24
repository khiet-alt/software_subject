import React from "react";

const ReadBills = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.roomID}</td>
      <td>{contact.numberOfDates}</td>
      <td>{contact.price}</td>
      <td>{contact.finalPrice}</td>
      <td>
        <button
          type="button"
          onClick={(e) => handleEditClick(e, contact)}
        >
          Sửa
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ReadBills;