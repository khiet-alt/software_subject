import React from 'react'
import {nanoid } from 'nanoid'
import { useState, Fragment } from 'react'
import ReadNotes from './ReadNotes'
import EditNote from './EditNote'

import './GuestRentRoom.scss'

import data from './data.json'

function GuestRentRoom() {

  const [notes, setNotes] = useState(data);

  const [addNoteData, setAddNoteData] = useState({
    no: "",
    customer: "",
    type: "",
    idp: "",
    addr: "",
  });

  const [editNoteData, setEditNoteData] = useState({
    no: "",
    customer: "",
    type: "",
    idp: "",
    addr: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddNoteChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newNoteData = { ...addNoteData };
    newNoteData[fieldName] = fieldValue;

    setAddNoteData(newNoteData);
  }

  const handleEditNoteChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newNoteData = { ...editNoteData };
    newNoteData[fieldName] = fieldValue;

    setEditNoteData(newNoteData);
  };

  const handleAddNoteSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      customer: addNoteData.customer,
      type: addNoteData.type,
      idp: addNoteData.id,
      addr: addNoteData.addr,
    };

    const newNote = [...notes, newContact];
    setNotes(newNote);
  };

  const handleEditNoteSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      customer: addNoteData.roomID,
      type: addNoteData.numberOfDates,
      idp: addNoteData.price,
      addr: addNoteData.finalPrice,
    };

    const newNotes = [...notes];

    const index = notes.findIndex((contact) => contact.no === editContactId);

    newNotes[index] = editedContact;

    setNotes(newNotes);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.no);

    const formValues = {
      customer: contact.customer,
      type: contact.type,
      idp: contact.id,
      addr: contact.addr,
    };

    setEditNoteData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newNotes = [...notes];

    const index = notes.findIndex((contact) => contact.no === contactId);

    newNotes.splice(index, 1);

    setNotes(newNotes);
  };

  return (
    <div className='maincontainer-guestrentroom'>
      <form onSubmit={handleEditNoteSubmit}>
        <table class="table-latitude">
          <caption>Phiếu thuê phòng</caption>
          <thead>
            <tr>  
              <th>Phòng: .................</th>
              <th>Ngày bắt đầu thuê: ..............................................</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>STT</th>
              <th>Khách hàng</th>
              <th>Loại khách</th>
              <th>CMND</th>
              <th>Địa chỉ</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((contact) => (
              <Fragment>
                {editContactId === contact.no ? (
                  <EditNote
                    editNoteData={editNoteData}
                    handleEditNoteChange={handleEditNoteChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadNotes
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

      <h2>Thêm phiếu thuê</h2>
      <form onSubmit={handleAddNoteSubmit}>
      <input
          type="number"
          name="no"
          required="required"
          placeholder="STT"
          onChange={handleAddNoteChange}
        />
        <input
          type="string"
          name="customer"
          required="required"
          placeholder="Khách hàng"
          onChange={handleAddNoteChange}
        />
        <input
           type="string"
           name="type"
           required="required"
           placeholder="Loại khách"
           onChange={handleAddNoteChange}
        />
        <input
          type="number"
          name="idp"
          required="required"
          placeholder="CMND"
          onChange={handleAddNoteChange}
        />
        <input
          type="number"
          name="addr"
          required="required"
          placeholder="Địa chỉ"
          onChange={handleAddNoteChange}
        ></input>
        <button type="submit">Thêm</button>
      </form>
    </div>
  )
}

export default GuestRentRoom