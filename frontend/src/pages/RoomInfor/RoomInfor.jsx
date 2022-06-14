import { useState } from "react";
import "./RoomInfor.scss";
import Select from "react-select";

import ShowRoom from "./ShowRooms";


const optionsRoomType = [
  { value: "150,000", label: "A" },
  { value: "170,000", label: "B" },
  { value: "200,000", label: "C" },
  { value: "", label: "All" },
];

const statusOptions = [{ label: "Busy" }, { label: "Available" }];

const initialSelection = {
  type: "All",
  status: "Available"
}

const customStyles = {
  option: (base, state) => ({
    ...base,
    color: "#1e2022",
    backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "white",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function RoomInfor() {
  const [filterOptions, setFilterOptions] = useState(initialSelection);

  return (
    <>
      <div id="i4">
        Booking date <input type="date" name="" value="LoveHTML" />
      </div>
      <div className="w3-container">
        <h1>Room Information detail</h1>
        <div className="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
          <h2>Tìm kiếm phòng phù hợp với bạn</h2>
          <label>Lọc theo loại phòng</label>
          <Select
            options={optionsRoomType}
            isClearable={true}
            styles={customStyles}
            onChange={(event) => {
              setFilterOptions((prevState) => ({
                ...prevState,
                type: event.label
              }))
            }}
          />
          <label>Tình trạng phòng : </label>
          <Select
            options={statusOptions}
            isClearable={true}
            styles={customStyles}
            onChange={(event) => {
              setFilterOptions((prevState) => ({
                ...prevState,
                status: event.label
              }))
            }}
          />
        </div>
      </div>

      <ShowRoom filterOptions={filterOptions} />
    </>
  );
}

export default RoomInfor;
