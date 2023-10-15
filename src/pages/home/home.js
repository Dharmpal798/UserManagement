import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import TableData from "./tableData";
import Header from "../../components/header/header";
const employeesList = [
  {
    id: 1,
    salary: 40000,
    empname: "Vijay Pratap Singh",
    phone: 9870986756,
    email: "vps.singh@gmail.com",
  },
  {
    id: 2,
    salary: 50000,
    empname: "Kunwar Pratap Singh",
    phone: 8956748596,
    email: "kps.singh@gmail.com",
  },
  {
    id: 3,
    salary: 250000,
    empname: "Vickey Singh",
    phone: 8956748596,
    email: "vickey.singh@gmail.com",
  },
  {
    id: 4,
    salary: 150000,
    empname: "Rahul Singh",
    phone: 5896478596,
    email: "vps.singh@gmail.com",
  },
  {
    id: 5,
    salary: 50000,
    empname: "Dharampal Singh",
    phone: 9685749685,
    email: "dps.singh@gmail.com",
  },
];

function Homepage() {
  const handleDelete = (id) => {
    let index = employeesList
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    employeesList.splice(index, 1);
  };
  return (
    <div className="home-layout">
      <Container>
        <Header />
        <h1 className="my-5 xxl-large">Employee Lists</h1>
        <Row>
          <Col md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Salary</th>
                  <th>Employees Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeesList && employeesList.length > 0 ? (
                  employeesList.map((items, i) => {
                    return (
                      <tr>
                        <td>{items.id}</td>
                        <td>{items.salary}</td>
                        <td>{items.empname}</td>
                        <td>{items.phone}</td>
                        <td>{items.email}</td>
                        <td>
                          <Button variant="info" className="me-3">
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(items.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No data founds</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <TableData />
      </Container>
    </div>
  );
}
export default Homepage;
