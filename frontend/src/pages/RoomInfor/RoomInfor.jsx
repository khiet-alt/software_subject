import React, { useState } from "react";
import "./RoomInfor.scss";
import { Link } from "react-router-dom";
import Select from "react-select";

import ShowRoom from './ShowRooms'

const optionsRoomType = [
  { value: "150,000", label: "A" },
  { value: "170,000", label: "B" },
  { value: "200,000", label: "C" },
];

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
  const { click, setClick } = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div id="i4">
        Booking date <input type="date" name="" value="LoveHTML" />
      </div>
      <div class="w3-container">
        <h1>Room Information detail</h1>
        <div class="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
          <h2>Name room : I31</h2>
          <p>Floor : 3</p>
          <label>Room price : </label>
          <input
            class="w3-input w3-border"
            type="text"
            placeholder="300.000 VND"
          />
          <label>Room type : </label>
          <Select
            options={optionsRoomType}
            isClearable={true}
            styles={customStyles}
          />
          <label>Status : </label>
          <input
            class="w3-input w3-border"
            type="text"
            placeholder="empty room"
          />
          <button type="button" class="w3-button w3-red w3-margin-top">
            Booking
          </button>
        </div>
      </div>

      <ShowRoom />
    </>
  );
}

export default RoomInfor;
