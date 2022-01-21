import { Table, Modal } from 'antd';
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import { Button, Form, Input, Select } from 'antd';
import copy from 'copy-to-clipboard';
const { Option } = Select;
const { TextArea } = Input;

const App = ({ usermail }) => {

  const getFullDate = (date) => {

    date = moment(new Date(date));
    return date.format("DD/MM/YYYY");
  }

  const [Data, setData] = useState(null);
  const [isOpenPrev, setIsOpenPrev] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [allVersions, setAllVersions] = useState([]);
  const [modifiedContent, setModContent] = useState("");
  const [Content, setContent] = useState({
    id: null,
    title: null,
    para1: null,
    isUpdated: false
  });

  const [visible, setVisible] = useState(false);


  const getAllDataFunction = () => {
    let cred = {
      email: usermail
    };
    let strCred = JSON.stringify(cred);

    fetch("/api/getContentByUserEmail", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: strCred
    })
      .then(res => res.json())
      .then(result => {
        if (result.status) {
          setData(result.results);
        } else {
          swal({
            icon: "error",
            title: "Error occured!",
            text: "Unable to fetch data."
          });
        }
      })
      .catch(error => {
        swal({
          icon: "error",
          title: "Error occured!",
          text: "Unable to fetch data."
        });
        return;
      })
  }

  if (Data === null) {
    getAllDataFunction();
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



  const [likeColor, setLikeColor] = useState("rgb(0 0 0 / 85%)");
  const [dislikeColor, setDislikeColor] = useState("rgb(0 0 0 / 85%)");


  const [feedback, setFeedback] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);


  const [btnCnt, setBtnCnt] = useState("Show more");
  const [originalCnt, setOriginalCnt] = useState("");


  const toogleCntBtn = () => {
    if (btnCnt === "Show more") {
      setBtnCnt("Show less");
      setContent({
        para1: originalCnt,
      });
    } else {
      setBtnCnt("Show more");
      let cntToShow = "";
      let maxI = 10;
      let arr = originalCnt.split(" ");
      if (arr.length < maxI) {
        cntToShow = originalCnt;
      } else {
        for (let i = 0; i < maxI; i++) {
          cntToShow += arr[i];
          cntToShow += " ";
        }
        cntToShow += ".....";
      }
      setContent({
        para1: cntToShow,
      });
    }
  };


  const toogleForm = () => {
    setIsFormOpen(!isFormOpen);
  }

  const onFinish = async (e, liked) => {
    let cred = {};
    if(e) {
      cred = {
        id: Content.id,
        liked,
        feedback: e.feedback
      }
    } else {
      cred = {
        id: Content.id,
        liked
      }
    }
    let strCred = JSON.stringify(cred);
    try {
      let result = await fetch("/api/addFeedback", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: strCred
      });
      result = await result.json();
      if (result.status) {
        let txtMsg;
        if (liked !== "yes") {
          txtMsg = "Please wait while we improve your content"
          getAllDataFunction();
          swal({
            icon: "success",
            title: "Success added feedback",
            text: txtMsg
          });
          document.getElementById("dislike").style.color = "blue"; 
          toogleForm();
          setVisible(false);
        }
      }
      else {
        swal({
          icon: "error",
          title: "Error occured!",
          text: "Something went wrong!"
        });
        if(liked !== "yes") {
          toogleForm();
        }
      }
    } catch (error) {
      swal({
        icon: "error",
        title: "Error occured!",
        text: "Unable to fetch data."
      });
      if(liked !== "yes") {
        toogleForm();
      }
    }
  }

  const onVersionChange = (e) => {
    setModContent(allVersions[e - 1].modContent);
    setSelectValue(allVersions[e - 1].dateTime);
    setFeedback(allVersions[e - 1].improvementReq);
  }
  const disliked = () => {
    // document.getElementById("dislike").style.color = "blue"; 
        document.getElementById("liked").style.color = "black";
        toogleForm();
  }
  const shareViaEmail = async (response, request) => {
    try {
      let cred = {request, response,
        email: usermail
      };
      let strCred = JSON.stringify(cred);
      let result = await fetch("/api/sendResEmail", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: strCred
      });
      result = await result.json();
      if (result.status) {
        alert("Email sent successfully! ");
      }
      else {
        alert("Unable to send mail. Try later.");
      }
    } catch (error) {
      alert("Unable to send mail. Try later.");
    }
  }

  return (
    <>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setIsOpenPrev(false);
              setVisible(true);
              setIsFormOpen(false);

              let temp;
              if (record.modified.length === 0) {
                setShowButton(false);
                setShowSelect(false);
                temp = "No Previous Content available";
                setFeedback('');
                setIsUpdated(false);
              } else {

                if(record.isModified === "No") {
                  setShowButton(false);
                  temp = record.modified[record.modified.length - 1].modContent;
                  setIsUpdated(false);
                }
                else {
                  setShowButton(true);
                  temp = record.modified[record.modified.length - 1].modContent;
                  setIsUpdated(true);
                  if(record.modified[record.modified.length - 1].liked === "yes") {
                    setLikeColor("blue"); 
                  }
                  if(record.modified[record.modified.length - 1].liked === "no") {
                    // document.getElementById("dislike").style.color = "blue"; 
                    setDislikeColor("blue"); 
                  }
                }
                setShowSelect(true);
                let versionDet = record.modified[record.modified.length - 1].dateTime;
                setSelectValue(versionDet);
                setFeedback(record.modified[record.modified.length - 1].improvementReq);
              }

              setModContent(temp);

              setOriginalCnt(record.original);
              let arr = record.original.split(' ');
              let cntToShow = "";
              let maxI = 10;
              if (record.original.length < 10) {
                maxI = arr.length;
              }
              for (let i = 0; i < maxI; i++) {
                cntToShow += arr[i];
                cntToShow += ' ';
              }
              if (maxI !== arr.length) {
                cntToShow += '.....';
              }

              setContent({
                id: record.id,
                title: record.postType,
                para1: cntToShow,
                isUpdated: record.modified.length !== 0,
              })
              setAllVersions(record.modified);
            }
          };
        }
        }
        columns={columns} dataSource={Data} />

      <Modal title={Content.title} visible={visible}
        footer={null}
        // onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >

        <p style={{ fontSize: "1.0rem", fontWeight: "bold", margin: "0", color: "#1890ff" }}>Your Request</p>
        <div style={{ display: "flex", padding: "1rem 0.5rem 0.5rem 0.5rem", flexDirection: "column", margin: "0 0 2rem 0rem" }}>
          <p id="para1" style={{margin: "0", fontSize: "0.9rem", whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: Content.para1 }} ></p>
          <span onClick={toogleCntBtn} style={{ color: "#5e5edd", fontSize: "0.8rem", fontWeight: "600", width: "fit-content", cursor: "pointer" }}>{btnCnt}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "1.0rem", fontWeight: "bold", margin: "0", color: "#1890ff" }}>Otus Response</p>
          {
            showButton ?
              <div>
                <span id="liked" onClick={()=>{ 
                      
                      document.getElementById("liked").style.color = "blue"; 
                      document.getElementById("dislike").style.color = "black";
                      onFinish(null, "yes");
                  
                  }} 
                    className="likeBtns" style={{paddingRight: '1rem',color: likeColor, paddingBottom: "0.5rem"}}>
                  <svg style={{marginBottom: "0.5rem"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                  </svg>
                </span>
                <span onClick={disliked} id="dislike" className="likeBtns" style={{paddingRight: '1rem', color: dislikeColor, paddingBottom: "0.5rem"}}>
                  <svg style={{marginBottom: "0.5rem"}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                    <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                  </svg>
                </span>
              </div>
              // <Button onClick={toogleForm} type="primary" style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>{buttonContent}</Button>
              : ``
          }
        </div>
        {
          isFormOpen ?
            <div style={{ padding: "0.5rem" }}>
              <Form layout="vertical" name="validate_other" onFinish={ (e) => { onFinish(e, "no") } } >
                    <Form.Item name="feedback" label="Please let us know the area of improvement.">
                      <TextArea rows={4} />
                    </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
              </Form>
            </div>
            : ''
        }
        <div style={{ display: "flex", maxHeight: "20rem", overflow: "hidden", overflowY: "auto", padding: "1rem 0.5rem 0.5rem 0.5rem", flexDirection: "column", backgroundColor: "#80808021", margin: "0 0 0.5rem 0rem" }}>
          {isUpdated ?
            <>
              <p style={{ fontSize: "0.9rem", whiteSpace: "pre-line" }}> {allVersions[allVersions.length - 1].modContent} </p>
              
              <div style={{alignSelf: "end", display: "flex"}}>
                <Button
                  style={{ width: "fit-content",  fontSize: "0.6rem", color: "#1890ff", borderColor: "#1890ff", marginRight: "1rem"}}
                  type="dashed"
                  onClick={() => {
                    shareViaEmail(allVersions[allVersions.length - 1].modContent, Content.para1 );
                  }}
                  ghost
                > Share via Email
                </Button>
                <Button
                  style={{ width: "fit-content", alignSelf: "end", fontSize: "0.6rem", color: "#1890ff", borderColor: "#1890ff", position: "sticky", bottom: "0" }}
                  type="dashed"
                  onClick={() => {
                    copy(allVersions[allVersions.length - 1].modContent);
                    alert("Successfully copied to clipboard !");
                  }}
                  ghost
                > Copy to clipboard
                </Button>

              </div>
              
            </>
            :
            <>
              <p style={{ fontSize: "0.9rem", whiteSpace: "pre-line", color: "#a54e5e" }}> Please wait for some time, Our team is working on it. </p>
            </>
          }
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: "1rem 0.5rem 0.5rem 0.5rem" }}>
          {
            !isOpenPrev ?
              <div style={{ fontSize: "0.75rem", color: "#1890ff", width: "fit-content", border: "1px dotted gray", padding: "0.4rem 1rem", borderRadius: "5px", fontWeight: "bold", marginBottom: "2rem", background: "aliceblue" }} onClick={() => { setIsOpenPrev(true) }}>Click to view previous content</div>
              :
              <div style={{ fontSize: "0.75rem", color: "#1890ff", width: "fit-content", border: "1px dotted gray", padding: "0.4rem 1rem", borderRadius: "5px", fontWeight: "bold", background: "aliceblue" }} onClick={() => { setIsOpenPrev(false) }}>Cancel</div>
          }
          {
            isOpenPrev ?
              <div>
                {
                  showSelect ?
                    <Select id="selVale" style={{ width: 120, margin: "1rem 0" }} value={selectValue} onChange={onVersionChange}>
                      {
                        allVersions.length !== 0 ?
                          allVersions.map(temp => (
                            <Option key={temp.version} value={temp.version} >{temp.dateTime}</Option>
                          ))
                          :
                          ''
                      }
                    </Select>
                    :
                    ''
                }

                <p style={{ fontSize: "1rem", whiteSpace: "pre-line", padding: "1rem", backgroundColor: "#80808021" }} dangerouslySetInnerHTML={{ __html: modifiedContent }}  ></p>
                {
                  feedback === "" ? ""
                    :
                    <>
                      <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>Your Feedback</p>
                      <p style={{ fontSize: "0.8rem", whiteSpace: "pre-line", backgroundColor: "#80808021", padding: "0.5rem" }} dangerouslySetInnerHTML={{ __html: feedback }} ></p>
                    </>
                }
              </div>
              :
              ''
          }
        </div>
      </Modal>
    </>
  );
}

export default App
