import { useDispatch } from 'react-redux'

function RoomItem({ room }) {
  const dispatch = useDispatch()

  return (
    <tr>
      <td>{room.name}</td>
      <td>{room.cost}</td>
      <td>{room.type}</td>
      <td>{room.note}</td>
      {/* <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td> */}
    </tr>
  )
}

export default RoomItem