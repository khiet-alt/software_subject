import React, { useState } from "react";

import ConfirmBooking from "./ConfirmBooking";

import data from "./data.json";

const BoxComponent = ({ params }) => {
  const [isOpenModal, setShowModal] = React.useState(false);

  return (
    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
      <div className="p-5 cursor-pointer" onClick={() => setShowModal(true)}>
        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-100 lg:opacity-100 flex justify-center items-center">
          <img
            src={params.link}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <p className="mb-2 font-bold">{params.name}</p>
        <p className="text-sm leading-5 text-gray-900">Giá tiền: {params.cost}</p>
        <p className="text-sm leading-5 text-gray-900">Loại phòng: {params.type}</p>
        <p className="text-sm leading-5 text-gray-900">Tình trạng phòng: {params.status}</p>
      </div>
      <ConfirmBooking isOpenModal={isOpenModal} setShowModal={setShowModal} />
    </div>
  );
};

function ShowRoom({ filterOptions }) {
  const filteredData = data.filter((value) => {
    if (filterOptions.type === "All") {
      return (filterOptions.status === value.status) ? true : false
    } else {
      if (
        filterOptions.type === value.type &&
        filterOptions.status === value.status
      )
        return true;
    }
    return false;
  });

  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredData.map((item) => (
            <BoxComponent key={item.id} params={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowRoom;
