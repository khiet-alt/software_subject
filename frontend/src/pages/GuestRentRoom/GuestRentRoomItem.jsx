import { useDispatch, useSelector } from "react-redux";
import { deleteGuestRentRoom } from '../../features/guestRenRoom/guestRenRoomSlice'

function GuestRentRoomItem({ guestRentRoom }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <tr>
      <td>{guestRentRoom.STT}</td>
      <td>{guestRentRoom.guestName}</td>
      <td>{guestRentRoom.guestType}</td>
      <td>{guestRentRoom.ID}</td>
      <td>{guestRentRoom.address}</td>
      {user ? (
        <td>
          <button type="button" onClick={() => dispatch(deleteGuestRentRoom(guestRentRoom._id))} className ='close'>Delete</button>
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
}

export default GuestRentRoomItem;
