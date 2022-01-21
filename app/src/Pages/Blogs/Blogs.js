import React from 'react'
import Styles from './Blogs.module.css'
import { Card } from 'antd';
const { Meta } = Card;

const Blogs= () => {


    const blogsTemplates = [
        {
            sno: 1,
            header: "How to write an official Email",
            about: "Email is one of the most widely used forms of communication in the world. They're quick and easy to use...",
            link: "https://otusai-wordpress.azurewebsites.net/2021/12/03/how-to-write-an-official-email/",
            imgLink: "./web/images/email_writing.png",
            date: "03-12-2021",
            read_time: "2 min"
        },
        {
            sno: 2,
            header: "How Otus helps you in saving time and keep you focused",
            about: "Otus is a platform that can help you generate high-quality and error-free content for your LinkedIn posts...",
            link: "https://otusai-wordpress.azurewebsites.net/2021/12/03/how-otus-helps-you-in-saving-time-and-keep-you-focused/",
            imgLink: "./web/images/otus_helps.png",
            date: "03-12-2021",
            read_time: "5 min"
        }
    ]

    return (
        <>
        <div style={{backgroundColor: "#f1f1f1", width: "100%"}}>

            <div className={`${Styles.Section}`} style={{ marginBottom: "5rem", }}>
                <div className={`${Styles.headerSection}`}>
                    <div className={`${Styles.header}`}>Blogs</div>
                    <p className={`${Styles.para}`}>Welcome to blog section of Otus.ai! With data showing that 77 percent of internet users read blogs and that 23 percent of all internet time is spent reading blogs and surfing social networks, it's clear that providing high-quality written content as part of your marketing strategy is still worthwhile. Here are some of our favourite tech blogs that know how to use the written word to keep readers up to date on the latest technology developments.</p>
                </div>

                <div className={`${Styles.Section}`} style={{ paddingBottom: "5rem" }}>
                    <div style={{ padding: "1rem", display: "flex", flexWrap: "wrap", maxWidth: "1000px", margin: "auto", justifyContent: "flex-start", alignItems: "center" }}>
                        {
                            blogsTemplates.map((ele) => {
                                return (
                                    <a href = {ele.link} target= "_blank" rel="noopener noreferrer"> 
                                    <Card
                                        hoverable
                                        style={{ width: 280, margin: "2rem 1rem" }}
                                        cover={<img width= "100px" alt="example" src={ele.imgLink} />}
                                    >
                                        <Meta title={ele.header} description={ele.about} />
                                        <div  style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
                                            <p style={{margin: "0", color: "rgba(0, 0, 0, 0.45)", fontSize: "14px"}}>{ele.date}</p>
                                            <p style={{margin: "0", color: "rgba(0, 0, 0, 0.45)", fontSize: "14px"}}>{ele.read_time + ` Read`}  </p>
                                        </div>
                                    </Card>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blogs
