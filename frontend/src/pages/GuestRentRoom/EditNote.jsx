import React from "react";

const EditNote = ({
  editNotesData,
  handleEditNoteChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="number"         
          name="customer"
          required="required"
          placeholder="Khách hàng"
          onChange={handleEditNoteChange}
        ></input>
      </td>
      <td>
        <input
          type="string"
          name="type"
          required="required"
          placeholder="Loại khách"
          onChange={handleEditNoteChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          name="idp"
          required="required"
          placeholder="CMND"
          onChange={handleEditNoteChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          name="addr"
          required="required"
          placeholder="Địa chỉ"
          onChange={handleEditNoteChange}
        ></input>
      </td>
      <td>
        <button type="submit">Lưu</button>
        <button type="button" onClick={handleCancelClick}>Hủy bỏ</button>
      </td>
    </tr>
  );
};

export default EditNote;