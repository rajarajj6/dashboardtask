import React from 'react';
import "./tabledata.css"



function Tabledata({ item, index, handleDelete, handleEdit }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{item.fullname}</td>
      <td>{item.userid}</td>
      <td>{item.product}</td>
      <td>
        <button onClick={(event) => handleEdit(event, item)} className="editbtn">Edit</button>
        <button onClick={(event) => handleDelete(event, item.id)} className="deletebtn">Delete</button>
      </td>
    </tr>
  )
}

export default Tabledata