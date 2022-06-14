import React from "react";
import { useEffect } from "react";
import "./GuestRentRoom.scss";
import GuestRentRoomForm from "./GuestRentRoomForm"
import Spinner from "../../components/Spinner"
import GuestRentRoomItem from "./GuestRentRoomItem"
import { useDispatch, useSelector } from "react-redux";
import { getAllGuestRentRoom, reset} from '../../features/guestRenRoom/guestRenRoomSlice'

// chuẩn bị trước cho đọc từ database lên


function RoomCategory() {
  const dispatch = useDispatch();
  const { guestRentRooms, isLoading, isError, message } = useSelector(
    (state) => state.guestRentRooms
  );

  const { user } = useSelector((state) => state.auth);

  console.log(guestRentRooms)

  useEffect(() => {
      if (isError) {
        console.log(message);
      }

      console.log("dispatch getAllGuestRentRoom()")
      dispatch(getAllGuestRentRoom());

      return () => {
        dispatch(reset());
      };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="category-container">
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
              { user ? (<th>Chỉnh sửa</th>) : (<></>)}
            </tr>
          </thead>
          
            {guestRentRooms != null ?(
              guestRentRooms.map((guestRentRoom) => (
                <tbody>
                  <GuestRentRoomItem key={guestRentRoom._id} guestRentRoom={guestRentRoom}/>
                </tbody>
              ))
            ):(
              <h3>Not Category Room</h3>
            )}
          

        </table>
            
      {user ? (<GuestRentRoomForm />) : (
          <p></p>
        )
      }
    </div>
  );
}

export default RoomCategory;
