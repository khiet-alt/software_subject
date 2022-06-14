import React from "react";
import { useEffect } from "react";
import "./RoomCategory.scss";
import RoomForm from "../../components/RoomForm"
import Spinner from "../../components/Spinner"
import RoomItem from "../../components/RoomItem"
import { useDispatch, useSelector } from "react-redux";
import { getAllRoom, reset } from "../../features/roomCategory/roomCategorySlice";

// chuẩn bị trước cho đọc từ database lên


function RoomCategory() {
  const dispatch = useDispatch();
  const { roomCategories, isLoading, isError, message } = useSelector(
    (state) => state.roomCategories
  );

  const { user } = useSelector((state) => state.auth);

  console.log(roomCategories)

  useEffect(() => {
      if (isError) {
        console.log(message);
      }

      console.log("dispatch getAllRoom()")
      dispatch(getAllRoom());

      return () => {
        dispatch(reset());
      };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="category-container">
      <table className="table-latitude">
          <caption>Danh Mục Phòng</caption>
          <thead>
            <tr>
              <th>Phòng</th>
              <th>Đơn giá</th>
              <th>Loại Phòng</th>
              <th>Ghi chú</th>
              { user ? (<th>Chỉnh Sửa</th>) : (<></>)}
            </tr>
          </thead>
          
            {roomCategories != null ?(
              roomCategories.map((room) => (
                <tbody>
                  <RoomItem key={room._id} room={room}/>
                </tbody>
              ))
            ):(
              <h3>Not Category Room</h3>
            )}
        </table>
      {user ? (<RoomForm />) : (
          <p></p>
        )
      }
    </div>
  );
}

export default RoomCategory;
