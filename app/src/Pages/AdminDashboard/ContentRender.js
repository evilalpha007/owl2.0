import { Table, Modal } from 'antd';
import React  from 'react';
import { useState } from 'react';
import moment from 'moment';
import { Form } from 'react-bootstrap';
import { Button, Select } from 'antd';
const { Option } = Select;

const App = ({ usermail }) => {

  const getFullDate = (date) => {

    date = moment(new Date(date));
    return date.format("DD/MM/YYYY");
  }
  const [description, setDescription] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [allVersions, setAllVersions] = useState([]);
  const [Data, setData] = useState(null);
  const [Content, setContent] = useState({
    title: null,
    para1: null,
    id: null
  });
  const [visible, setVisible] = useState(false);

  if (Data === null) {

    fetch("/api/getAllContent", {
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

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: ((date) => getFullDate(date)),
      sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    },
    {
      title: 'Updated',
      dataIndex: 'isModified',
      filters: [
        {
          text: 'No',
          value: 'No',
        },
        {
          text: 'Yes',
          value: 'Yes',
        },
      ],
      onFilter: (value, record) => record.isModified.indexOf(value) === 0,
      sorter: (a, b) => a.isModified.localeCompare(b.isModified)
    },
    {
      title: 'Post Type',
      dataIndex: 'postType',
      filters: [
        {
          text: 'Email',
          value: 'Email',
        },
        {
          text: 'LinkedIn',
          value: 'LinkedIn',
        },
      ],
      onFilter: (value, record) => record.postType.indexOf(value) === 0,
      sorter: (a, b) => a.postType.localeCompare(b.postType)
    },
    {
      title: 'Request Type',
      dataIndex: 'reqType',
      filters: [
        {
          text: 'Create',
          value: 'Create',
        },
        {
          text: 'Customize',
          value: 'Customize',
        },
      ],
      onFilter: (value, record) => record.reqType.indexOf(value) === 0,
      sorter: (a, b) => a.reqType.localeCompare(b.reqType)
    }
  ];
  const submitModified = (e) => {
    e.preventDefault();
    var content = document.querySelector("textarea").value;
    let cred = {
      id: Content.id,
      modified: content
    };
    let strCred = JSON.stringify(cred);

    fetch("/api/updateContent", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: strCred
    })
      .then(res => res.json())
      .then(result => {
        if (result.status) {
          alert("Successfully Added The Content.");
          return;
        } else {
          alert(result.error);
        }
      })
  }
  const onVersionChange = (e) => {
    document.getElementById('contentFor1').value = allVersions[e - 1].modContent;
    setSelectValue(`Version `+e);
    setFeedback(allVersions[e - 1].improvementReq);
  }


  const textChanged = (event) => {
    setDescription(event.target.value);
}

  const onRowClick = (record) => {
      setVisible(true);

      let temp="null";
      
      if (record.modified.length === 0) {
        temp = "Not updated yet";
        setAllVersions([]);
        setShowSelect(false);
        setFeedback('');
      } else {
        setShowSelect(true);
        setAllVersions(record.modified);
        let versionDet = 'Version' + record.modified[record.modified.length - 1].version;
        setSelectValue(versionDet);
        temp = record.modified[record.modified.length - 1].modContent;
        setFeedback(record.modified[record.modified.length - 1].improvementReq);
      }
      setDescription(temp);
      setContent({
        title: record.postType,
        para1: record.original,
        id: record.id
      })
  }


  console.log(allVersions );
  return (
    <>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              onRowClick(record);
            }
          };
        }
        }
        columns={columns} dataSource={Data} />

      <Modal title={Content.title} visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>Original Content</p>
        <p id="para1" style={{ fontSize: "1rem", whiteSpace: "pre-line", backgroundColor: "#80808021", padding: "1rem" }} dangerouslySetInnerHTML={{ __html: Content.para1 }} ></p>
        <Form onSubmit={submitModified} >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>Modified Content</p>
            {
              showSelect ? 
                <Select id="selVale" style={{ width: 120, margin: "1rem 0" }} value={selectValue} onChange={onVersionChange}>
                  {
                  allVersions.length !== 0 ?
                  allVersions.map(temp => (
                    <Option key={temp.version} value={temp.version} >{`Version ` + temp.version}</Option>
                  ))
                  :
                  ''
                  }
                </Select>
                :
                ''
            }
            <textarea
              style={{ fontSize: "1rem", whiteSpace: "pre-line", backgroundColor: "#80808021", padding: "1rem" }}
              value={description} 
              onChange={textChanged}
              className="form-control" id="contentFor1" rows="10">
              </textarea>
          </Form.Group>
          {
            feedback === "" ? ""
            :
            <>
              <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>Feedback</p>
              <p style={{ fontSize: "1rem", whiteSpace: "pre-line", backgroundColor: "#80808021", padding: "1rem" }} dangerouslySetInnerHTML={{ __html: feedback }} ></p>
            </>
          }
        
          <Button style={{ margin: "2rem 1rem 5rem 1rem" }} htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default App
