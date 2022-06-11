import React from 'react'
import {nanoid } from 'nanoid'
import { useState, useEffect, Fragment } from 'react'
import ReadBills from './ReadBills'
import EditBill from './EditBill'

import './BillForm.scss'

import data from './fakeData.json'

function BillForm() {

  const [bills, setBills] = useState(data);

  const [roomIDVal, setRoomIDVal] = useState("");
  const [numberOfDatesVal, setNumberOfDatesVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [finalPriceVal, setFinalPriceVal] = useState("");

  const [addBillData, setAddBillData] = useState({
    roomID: "",
    numberOfDates: "",
    price: "",
    finalPrice: "",
  });

  const [editBillData, setEditBillData] = useState({
    roomID: "",
    numberOfDates: "",
    price: "",
    finalPrice: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddBillChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newBillData = { ...addBillData };
    newBillData[fieldName] = fieldValue;

    setAddBillData(newBillData);
  }

  const handleAddRoomID = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    setRoomIDVal(fieldValue);
    const newBillData = { ...addBillData };
    newBillData[fieldName] = fieldValue;
    setAddBillData(newBillData);
  };

  const handleAddNumberOfDates = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    setNumberOfDatesVal(fieldValue);
    const newBillData = { ...addBillData };
    newBillData[fieldName] = fieldValue;
    setAddBillData(newBillData);
  };

  const handleAddPrice = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    setPriceVal(fieldValue);
    const newBillData = { ...addBillData };
    newBillData[fieldName] = fieldValue;
    setAddBillData(newBillData);
  };

  const handleAddFinalPrice = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    setFinalPriceVal(fieldValue);
    const newBillData = { ...addBillData };
    newBillData[fieldName] = fieldValue;
    setAddBillData(newBillData);
  };

  const handleEditBillChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newBillData = { ...editBillData };
    newBillData[fieldName] = fieldValue;

    setEditBillData(newBillData);
  };

  const handleAddBillSubmit = (e) => {
    e.preventDefault();

    if (roomIDVal <= 0 || roomIDVal >= 1000){
      alert("Số phòng: 0 < .. < 1000");
    }
    else if (numberOfDatesVal <= 0 || numberOfDatesVal >= 1000){
      alert("Số ngày thuê: 0 < .. < 3650");
    }
    else if (priceVal <= 0 || priceVal >= 1000000000){
      alert("Đơn giá: 1000 < .. < 1,000,000,000");
    }
    else if (finalPriceVal <= 0 || finalPriceVal >= 1000000000){
      alert("Thành tiền: 0 < .. < 1000");
    } else {
      const newContact = {
        id: nanoid(),
        roomID: addBillData.roomID,
        numberOfDates: addBillData.numberOfDates,
        price: addBillData.price,
        finalPrice: addBillData.finalPrice,
      };
      const newBill = [...bills, newContact];
      setBills(newBill);
    };
  };

  const handleEditBillSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      roomID: addBillData.roomID,
      numberOfDates: addBillData.numberOfDates,
      price: addBillData.price,
      finalPrice: addBillData.finalPrice,
    };

    const newBills = [...bills];

    const index = bills.findIndex((contact) => contact.id === editContactId);

    newBills[index] = editedContact;

    setBills(newBills);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      roomID: contact.roomID,
      numberOfDates: contact.numberOfDates,
      price: contact.price,
      finalPrice: contact.finalPrice,
    };

    setEditBillData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newBills = [...bills];

    const index = bills.findIndex((contact) => contact.id === contactId);

    newBills.splice(index, 1);

    setBills(newBills);
  };

  return (
    <div className='maincontainer-billform'>
      <form onSubmit={handleEditBillSubmit}>
        <table class="table-latitude">
          <caption>Hoá đơn thanh toán</caption>
          <thead>
            <tr>
              <th>Số phòng</th>
              <th>Số ngày thuê</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditBill
                    editBillData={editBillData}
                    handleEditBillChange={handleEditBillChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadBills
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Thêm hóa đơn</h2>
      <form onSubmit={handleAddBillSubmit}>
        <input
          type="number"
          name="roomID"
          required="required"
          placeholder="Số phòng"
          onChange={handleAddRoomID}
          value={roomIDVal}
        />
        <input
          type="number"
          name="numberOfDates"
          required="required"
          placeholder="Số ngày thuê"
          onChange={handleAddNumberOfDates}
          value={numberOfDatesVal}
        />
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Đơn giá (VNĐ)"
          onChange={handleAddPrice}
          value={priceVal}
        />
        <input
          type="number"
          name="finalPrice"
          required="required"
          placeholder="Thành tiền (VNĐ)"
          onChange={handleAddFinalPrice}
          value={finalPriceVal}
        />
        <button type="submit" id="add">Thêm</button>
      </form>
    </div>
  )
}

export default BillForm