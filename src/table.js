import React, { Fragment, useState } from 'react';
import Tabledata from './tabledata';
import { nanoid } from 'nanoid';
import Editrow from './editrow';
import './table.css';



function Table() {
  const [editclick, seteditclick] = useState(null)
  const [data, setdata] = useState([])
  const [dumidata, setdumidata] = useState({
    fullname: "",
    userid: "",
    product: ""
  })
  const [editlist, seteditlist] = useState({
    fullname: "",
    userid: "",
    product: "",
    id: "",
  })
  const onchangeinput = (event) => {
    event.preventDefault()

    const fieldname = event.target.getAttribute("name")
    const fieldvalue = event.target.value

    const fieldarray = { ...dumidata }
    fieldarray[fieldname] = fieldvalue
    setdumidata(fieldarray)
  }
  const onformsumbit = (event) => {
    event.preventDefault()

    const newarray = {
      id: nanoid(),
      fullname: dumidata.fullname,
      userid: dumidata.userid,
      product: dumidata.product
    }
    const finalarray = [...data, newarray]
    setdata(finalarray)

    const emptyfield = {
      fullname: "",
      userid: "",
      product: ""
    }
    setdumidata(emptyfield)
  }
  const handleDelete = (event, id) => {
    event.preventDefault()
    const index = data.findIndex(item => item.id == id)
    const finalarray = [...data]
    finalarray.splice(index, 1)
    setdata(finalarray)
  }
  const handleEdit = (event, list) => {
    event.preventDefault()
    const index = data.map(item => item.id == list.id)
    seteditclick(list.id)
    const newarray = {
      fullname: list.fullname,
      userid: list.userid,
      product: list.product,
      id: list.id
    }
    seteditlist(newarray)
  }
  const Cancelhandle = (event) => {
    event.preventDefault()
    seteditclick(null)
  }
  const editrowchange = (event) => {
    event.preventDefault()

    const fieldname = event.target.getAttribute("name")
    const fieldvalue = event.target.value
    const newarray = { ...editlist }
    newarray[fieldname] = fieldvalue

    // const finalarray = {...editlist,...newarray}
    seteditlist(newarray)
  }
  const oneditrowformsubmi = (event) => {
    event.preventDefault()
    const index = data.findIndex(item => item.id == editclick)
    const newarray = [...data]
    newarray[index] = editlist
    setdata(newarray)
    seteditclick(null)
  }
  // const onsavepress = (value) =>{
  //     seteditclick(null)
  // }
  return (
    <div>
      <form onSubmit={oneditrowformsubmi}>
        <table>
          <thead>
            <tr>
              <th>sl.no</th>
              <th>Name</th>
              <th>UserID</th>
              <th>Product</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => {
                return (
                  <Fragment key={index}>
                    {
                      (item.id == editclick) ? (<Editrow Cancelhandle={Cancelhandle} editlist={editlist} editrowchange={editrowchange} />)
                        : <Tabledata item={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit} />
                    }
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
      </form>
      <form onSubmit={onformsumbit}>
        <input type="text" placeholder='Enter a Name' name="fullname" required="required" value={dumidata.fullname} onChange={onchangeinput} equired="required" />
        <input type="text" required="required" value={dumidata.userid} placeholder='Enter a UserID' name="userid" onChange={onchangeinput} equired="required" />
        <input type="text" placeholder='Enter a Product' required="required" value={dumidata.product} equired="required" name="product" onChange={onchangeinput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Table;