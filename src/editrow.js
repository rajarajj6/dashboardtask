import React from 'react';
import "./editrow.css";


function Editrow({ Cancelhandle, editlist, editrowchange, onsavepress }) {
  return (
    <tr>
      <td>
        <input type="text" placeholder='Enter a Name' required="required" />
      </td>
      <td>
        <input type="text" placeholder='Enter a Name' name="fullname" value={editlist.fullname} required="required" onChange={editrowchange} />
      </td>
      <td>
        <input type="text" placeholder='Enter a userid' name="userid" value={editlist.userid} required="required" onChange={editrowchange} />
      </td>
      <td>
        <input type="text" placeholder='Enter a Product' name="product" required="required" value={editlist.product} onChange={editrowchange} />
      </td>
      <td>
        <button className='savebtn'>Save</button>
        <button onClick={Cancelhandle} className="cancelbtn">Cancel</button>
      </td>
    </tr>
  )
}

export default Editrow;