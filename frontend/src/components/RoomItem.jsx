import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryRoom } from "../features/roomCategory/roomCategorySlice";

function RoomItem({ room }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <tr>
      <td>{room.name}</td>
      <td>{room.cost}</td>
      <td>{room.type}</td>
      <td>{room.note}</td>
      {user ? (
        <td>
          <button type="button">Delete</button>
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
}

export default RoomItem;
