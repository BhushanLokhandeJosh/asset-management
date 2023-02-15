import React from 'react'
import { ROUTES } from '../../../../../routes/constants'
import { FaRegEdit, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';


const GetAllVendors = ({vendors,loading}) => {
  return (
    <div className="table-style">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>View</th>
            <th>Update</th>
          </tr>
        </thead>
        {loading ? (
          <h2>Loading</h2>
        ) :  (
          <tbody>
            {vendors.map((item, id) => (
              <tr key={id}>
                <td><b>{item.vendor_name}</b></td>
                <td>{item.email}</td>
                <td>{item.company}</td>
                <td>{item.mobile_no}</td>
                <td>{item.address}</td>
                <td>
                  <Link to={`${ROUTES.VIEWVENDOR}/${item.id}`}>
                    <FaRegEye />
                  </Link>
                </td>
                <td>
                  <Link to={`${ROUTES.UPDATEVENDOR}/${item.id}`}>
                    <FaRegEdit />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  )
}

export default GetAllVendors