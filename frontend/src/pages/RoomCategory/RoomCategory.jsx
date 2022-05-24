import React from 'react'
import {nanoid} from 'nanoid'
import { useState, useEffect, Fragment } from 'react'
import './RoomCategory.scss'
import ReadCategoryRoom from "../../components/ReadCaterogyRoom"
import EditCategoryRoom from "../../components/EditCategoryRoom"
// chuẩn bị trước cho đọc từ database lên
import data from "./data.json"


function RoomCategory() {

  const [categoryRooms, setcategoryRooms] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    type: "",
    cost: "",
    note: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    type: "",
    cost: "",
    note: "",
  });

  const [editContacId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      type: addFormData.type,
      cost: addFormData.cost,
      note: addFormData.note,
    };

    const newcategoryRooms = [...categoryRooms, newContact];
    setcategoryRooms(newcategoryRooms);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContacId,
      name: editFormData.name,
      type: editFormData.type,
      cost: editFormData.cost,
      note: editFormData.note,
    };

    const newcategoryRooms = [...categoryRooms];

    const index = categoryRooms.findIndex((contact) => contact.id === editContacId);

    newcategoryRooms[index] = editedContact;

    setcategoryRooms(newcategoryRooms);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      type: contact.type,
      cost: contact.cost,
      note: contact.note,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newcategoryRooms = [...categoryRooms];

    const index = categoryRooms.findIndex((contact) => contact.id === contactId);

    newcategoryRooms.splice(index, 1);

    setcategoryRooms(newcategoryRooms);
  };

  return (
    <div className="category-container">
      <form onSubmit={handleEditFormSubmit}>
        <table class="table-latitude">
          <caption>Danh Mục Phòng</caption>
          <thead>
            <tr>
              <th>Phòng</th>
              <th>Loại Phòng</th>
              <th>Đơn giá</th>
              <th>Ghi chú</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categoryRooms.map((contact) => (
              <Fragment>
                {editContacId === contact.id ? (
                  <EditCategoryRoom
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadCategoryRoom
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

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="type"
          required="required"
          placeholder="Type..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="cost"
          required="required"
          placeholder="Cost..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="note"
          required="required"
          placeholder="Note..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default RoomCategory