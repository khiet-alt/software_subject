import React from "react";
import { nanoid } from "nanoid";
import { useState, useEffect, Fragment } from "react";
import "./RoomInfor.scss";
import ReadInfoRoom from "../../components/componentsRoomInfo/ReadInfoRoom";
import EditroomInfo from "../../components/componentsRoomInfo/EditroomInfo";
// import { Link } from "react-router-dom";
import Select from "react-select";

import ShowRoom from './ShowRooms'
import data from "./data1.json";

const optionsRoomType = [
  { value: "150,000", label: "A" },
  { value: "170,000", label: "B" },
  { value: "200,000", label: "C" },
];

function RoomInfor() {
  const { click, setClick } = useState(false);
  const handleClick = () => setClick(!click);

  const [infoRooms, setinfoRooms] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    type: "",
    cost: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    type: "",
    cost: "",
    status: "",
  });

  const [editContacId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData(prevState => ({
      ...prevState,
      [event.target.getAttribute("name")]: event.target.value
    }))

  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    setEditFormData((prevState) => ({
      ...prevState,
      [event.target.getAttribute("name")]: event.target.value,
    }));
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      type: addFormData.type,
      cost: addFormData.cost,
      status: addFormData.status,
    };

    const newinfoRooms = [...infoRooms, newContact];
    setinfoRooms(newinfoRooms);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContacId,
      name: editFormData.name,
      type: editFormData.type,
      cost: editFormData.cost,
      status: editFormData.status,
    };

    const newinfoRooms = [...infoRooms];

    const index = infoRooms.findIndex(
      (contact) => contact.id === editContacId
    );

    newinfoRooms[index] = editedContact;

    setinfoRooms(newinfoRooms);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      type: contact.type,
      cost: contact.cost,
      status: contact.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newinfoRooms = [...infoRooms];

    const index = infoRooms.findIndex(
      (contact) => contact.id === contactId
    );

    newinfoRooms.splice(index, 1);

    setinfoRooms(newinfoRooms);
  };

  return (
    <>
      <div className="category-container">
      <form onSubmit={handleEditFormSubmit}>
        <table className="table-latitude">
          <caption>Tình trạng phòng</caption>
          <thead>
            <tr>
              <th>Phòng</th>
              <th>Đơn giá</th>
              <th>Loại Phòng</th>
              <th>Trạng Thái</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {infoRooms.map((contact) => (
              <Fragment>
                {editContacId === contact.id ? (
                  <EditroomInfo
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadInfoRoom
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

      <h2>Add a Room</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Phòng..."
          onChange={handleAddFormChange}
        />
        <Select
          options={optionsRoomType}
          name="type"
          placeholder="Chọn loại phòng..."
          onChange={event =>
            setAddFormData(prevState => ({
              ...prevState,
              'type': event.label,
              'cost': event.value
            }))
          }
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Trạng Thái..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>

    <ShowRoom />
    </>
  );
}

export default RoomInfor;
