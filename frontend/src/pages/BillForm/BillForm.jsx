import React from 'react'
import {nanoid } from 'nanoid'
import { useState, useEffect, Fragment } from 'react'
import ReadBills from './ReadBills'
import EditBill from './EditBill'

import './BillForm.scss'

import data from './fakeData.json'

function BillForm() {

  const [bills, setBills] = useState(data);

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
          onChange={handleAddBillChange}
        />
        <input
          type="number"
          name="numberOfDates"
          required="required"
          placeholder="Số ngày thuê"
          onChange={handleAddBillChange}
        />
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Đơn giá"
          onChange={handleAddBillChange}
        />
        <input
          type="number"
          name="finalPrice"
          required="required"
          placeholder="Thành tiền"
          onChange={handleAddBillChange}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  )
}

export default BillForm