import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategoryRoom } from '../features/roomCategory/roomCategorySlice'
import Select from "react-select";

const optionsRoomType = [
    { value: "150,000", label: "A" },
    { value: "170,000", label: "B" },
    { value: "200,000", label: "C" },
];

const initialForm = {
  name: "",
  type: "",
  cost: "",
  note: "",
};

function RoomForm() {
  const [addFormData, setAddFormData] = useState(initialForm);

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createCategoryRoom( addFormData ))
    setAddFormData(initialForm)
  }

  return (
    <>
    <h2>Add a Room</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Phòng..."
          onChange={(event) =>
            setAddFormData((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
        <Select
          options={optionsRoomType}
          name="type"
          placeholder="Chọn loại phòng..."
          onChange={(event) =>
            setAddFormData((prevState) => ({
              ...prevState,
              type: event.label,
              cost: event.value,
            }))
          }
        />
        <input
          type="text"
          name="note"
          required="required"
          placeholder="Ghi chú..."
          onChange={(event) => {
            setAddFormData((prevState) => ({
              ...prevState,
              note: event.target.value
            }))
          }
          }
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default RoomForm