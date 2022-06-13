import React from "react";
import Select from "react-select";

const optionsRoomType = [
  { value: "150,000", label: "A" },
  { value: "170,000", label: "B" },
  { value: "200,000", label: "C" },
];

const EditCategoryRoom = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  setEditFormData
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Name..."
          name="name"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Cost..."
          name="cost"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Select
          options={optionsRoomType}
          name="type"
          placeholder="Loại..."
          onChange={(event) =>
            setEditFormData((prevState) => ({
              ...prevState,
              type: event.label,
              cost: event.value,
            }))
          }
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Note..."
          name="note"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditCategoryRoom;