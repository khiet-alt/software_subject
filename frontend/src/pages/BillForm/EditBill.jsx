import React from "react";

const EditBill = ({
  editBillsData,
  handleEditBillChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="number"         
          name="roomID"
          required="required"
          placeholder="Số phòng"
          // value={editBillsData.roomID}
          onChange={handleEditBillChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          name="numberOfDates"
          required="required"
          placeholder="Số ngày thuê"
          //value={editBillsData.numberOfDates}
          onChange={handleEditBillChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Đơn giá"
          //value={editBillsData.price}
          onChange={handleEditBillChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          name="finalPrice"
          required="required"
          placeholder="Thành tiền"
          // value={editBillsData.finalPrice}
          onChange={handleEditBillChange}
        ></input>
      </td>
      <td>
        <button type="submit">Lưu</button>
        <button type="button" onClick={handleCancelClick}>Hủy bỏ</button>
      </td>
    </tr>
  );
};

export default EditBill;