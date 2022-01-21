import { Table, Space } from 'antd';
import React from 'react';
import { useState } from 'react';

const App = ({ usermail }) => {

  const [Data, setData] = useState(null);

  if (Data === null) {

    fetch("/api/getAllApprovedUsers", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(result => {
        if (result.status) {
          console.log(result.results);
          setData(result.results);
        } else {
          alert("Something went wrong. Visit Later!");
        }
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
      title: 'Email Post',
      key: 'Email Posts',
      render: (_, record) => (
        <Space size="middle" style={{ color: "#0782f1", }}>
          <p style={{ color: "blue", padding: "0.5rem", fontWeight: "bold" }}> {record.emailRem || 0}  </p>
          <p style={{ color: "red", padding: "0.5rem", fontWeight: "bold" }}> {record.emailUsed || 0}  </p>
        </Space>
      ),
    },
    {
      title: 'LinkedIn Post',
      key: 'Email Posts',
      render: (_, record) => (
        <Space size="middle" style={{ color: "#0782f1", }}>
          <p style={{ color: "blue", padding: "0.5rem", fontWeight: "bold" }}> {record.inRem || 0}  </p>
          <p style={{ color: "red", padding: "0.5rem", fontWeight: "bold" }}> {record.inUsed || 0}  </p>
        </Space>
      ),
    },
    {
      title: 'Blog Post',
      key: 'Email Posts',
      render: (_, record) => (
        <Space size="middle" style={{ color: "#0782f1", }}>
          <p style={{ color: "blue", padding: "0.5rem", fontWeight: "bold" }}> {record.blogRem || 0}  </p>
          <p style={{ color: "red", padding: "0.5rem", fontWeight: "bold" }}> {record.blogUsed || 0}  </p>
        </Space>
      ),
    }
  ];

  return (
    <>
      <Table columns={columns} dataSource={Data} />
    </>
  );
}

export default App
