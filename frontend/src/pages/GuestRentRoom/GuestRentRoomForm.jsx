import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGuestRentRoom } from '../../features/guestRenRoom/guestRenRoomSlice'
import Select from "react-select";

const optionsRoomType = [
    { label: "Nội địa" },
    { label: "Nước ngoài" },
];

const initialForm = {
  STT : "",
  guestName : "",
  guestType : "",
  ID : "",
  address : ""
};

function GuestRentRoomForm() {
  const [addFormData, setAddFormData] = useState(initialForm);

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGuestRentRoom( addFormData ))
    setAddFormData(initialForm)
  }

  return (
    <>
    <h2>Add a Room</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="STT"
          required="required"
          placeholder="STT..."
          onChange={(event) =>
            setAddFormData((prevState) => ({
              ...prevState,
              STT: event.target.value,
            }))
          }
        />

        <input
          type="text"
          name="guestName"
          required="required"
          placeholder="Name..."
          onChange={(event) =>
            setAddFormData((prevState) => ({
              ...prevState,
              guestName: event.target.value,
            }))
          }
          />

        <Select
          options={optionsRoomType}
          name="guestType"
          placeholder="Chọn loại khách..."
          onChange={(event) =>
            setAddFormData((prevState) => ({
              ...prevState,
              guestType: event.label,
            }))
          }
        />

        <input
          type="text"
          name="ID"
          required="required"
          placeholder="CMND..."
          onChange={(event) => {
            setAddFormData((prevState) => ({
              ...prevState,
              ID: event.target.value
            }))
          }
          }
        />

        <input
          type="text"
          name="address"
          required="required"
          placeholder="Địa chỉ..."
          onChange={(event) => {
            setAddFormData((prevState) => ({
              ...prevState,
              address: event.target.value
            }))
          }
          }
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default GuestRentRoomForm