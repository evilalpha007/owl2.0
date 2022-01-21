import { Table, Space } from 'antd';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const App = (
  { usermail }
) => {

  const [Data, setData] = useState(null);

  if (Data === null) {

    fetch("/api/getAllUnApprovedUser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(result => {
        if (result.status) {
          setData(result.results);
        } else {
          alert("Something went wrong. Visit Later!");
        }
      })
  }

  const ApproveUser = (key, name, e) => {
    e.preventDefault();

    let cred = {
      id: key,
      email: usermail
    };

    let strCred = JSON.stringify(cred);

    fetch("/api/approveUser", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: strCred
    })
      .then(res => res.json())
      .then(result => {
        if (result.status) {

          swal({
            icon: "success",
            title: "Approved",
            text: name + ` has been approved successfully.`
          });

          let data = Data.filter(item => item.id !== key);
          setData(data);

        } else {
          swal({
            icon: "error",
            title: "Failed",
            text: result.error
          });
        }
      })
      .catch(error => {
        swal({
          icon: "error",
          title: "Failed",
          text: "Internal server Error. Try again later!"
        });
        return;
      })
  }


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email Id',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact'
    },
    {
      title: 'Purpose',
      dataIndex: 'purpose',
      key: 'purpose'
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space onClick={(e) => { ApproveUser(record.id, record.name, e) }} size="middle" style={{ color: "#0782f1" }}>Approve
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={Data} />
    </>
  );
}

export default App
