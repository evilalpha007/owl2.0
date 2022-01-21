import React from 'react'
import Styles from './Resources.module.css'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import {ListGroup} from 'react-bootstrap'
import copy from 'copy-to-clipboard';

const Resources = () => {

    const [visible, setVisible] = useState(false);
    const [Content, setContent] = useState({
        type: null,
        title: null,
        para: null
    });

    const emailTemplates = [
        {
            sno: 1,
            header: "Email for the last day in the company",
            content: `\nHello (person's name),\n\nThere aren't enough words for me to express my gratitude for all the things I learned from you all these years. It was a pleasure having you on my team. Your work on (project name) was exceptional and provided a great deal of inspiration to me.\nAlso, I want to thank you for taking your valuable time to give feedback on my performance. I really appreciate it.\nAs I take on my next challenge in life, I wish to let you know that I will be grateful for having the opportunity to work with you. However, I hope that our paths cross again in the future. But until then, please keep in touch!\n\nSincerely,\n(your name)\n`
        },
        {
            sno: 2,
            header: "Email for introduction after joining the company",
            content: `\nHi Everyone,\n\nMy name is (Name), and I am the new Software Engineer at ABC Company. I am very enthusiastic to join this company as it is a leading provider of security software. Additionally, it also offers infrastructure software and this wide range of different software types allows this company to become the top 10 largest software companies in the world.\nDuring my previous work at XYZ company, I was charged with developing innovative solutions across a variety of software platforms. I was instrumental in structuring several internal systems compromising entry/management tools, production workflow tracking conversion/revenue reporting. I also successfully collaborate on solutions with our products and marketing team to offer the best user experience to build higher customer lifetime value.\nThank you for your time and consideration. I am looking forward to learning more details about the new project I will be working on.  I am excited about the opportunity to leverage my unique range of skills.\nIf you have any questions, please feel free to reach out to me directly. I will try my best in getting to know all of you!\n\nBest,\nYour Name\n`
        },
        {
            sno: 3,
            header: "Email for the team outing",
            content: `\nDear Team,\n\nWe are pleased to announce that we will be having our team outing on (Date) to celebrate the pleasant performance that everyone did for the past year. This also serves as the company’s celebration of its recent expansion. This is to reward you, employees, for your hard work that made the company a top service provider in the industry.\nFor the confirmation of your attendance, please approach your immediate supervisors.\n\nRegards,\n`
        },
        {
            sno: 4,
            header: "Email for the celebration for delivering a feature to customers",
            content: `\nHi {recipient name},\n\nWe are pleased to announce that we have just delivered the new feature as requested. We have tried our best on delivering the new feature of (product name) and hope you would love it. It's  {features} and it {description of what it does}. You can read more about it in the attached manual.\nWe would like to thank the whole team for contributing their great efforts to make this feature into success. Hoping to get along in that future too.\n\nThanks for your time and have a great day\nYour name,\n`
        },
        {
            sno: 5,
            header: "Email for applying for a job",
            content: `
            Subject: Name of Applicant – Name of Position\nDear Mr./Ms. Last Name,\n \nI have 4 years of experience as a Software Developer at my previous company. I came across an interesting position of Software Tester on your website. Company XYZ is renowned for testing all kinds of software and applications before they are released. As I know how they were programmed, I would be able to quickly detect all bugs and errors that need to be rectified. My skills and expertise make me a valuable asset to your organization.\nAfter graduating with a degree in Computer Science, I worked at Company ABC as a software developer for 4 years. I designed and programmed engineering software that students use in academics. I now want to challenge myself in a new environment and your company offers just that.\nI have attached a cover letter, resume, and certificates for your consideration. Please take a moment to go through them to get a better idea of who I am.\nI would love to talk to you in more detail regarding this amazing opportunity at your company. I look forward to hearing back from you regarding my application.\n\nSincerely,\nYour Name\n`
        },
        {
            sno: 6,
            header: "Email for applying for an internship",
            content: `\nDear {recipient name},\n\nI am writing to apply for the open position for an intern at your company, as I am very interested in gaining experience in the field of {field}. I have found your organization to be a leader in this field and would love to work with you. I want to do this internship because (Reason for internship-this will help in professional growth/ want to learn new things). I hereby attach my resume for your ready reference.\nI believe I will get to listen to you at the earliest and I shall be highly obliged for your kind support.\n\nThank you very much,\n{sender name}\n`
        },
        {
            sno: 7,
            header: "Reaching out for collaboration",
            content: `\nHello(Name),\n\nMy name is (Name) and I am working as a software developer in our company(company name). I have 4 years of experience as a software developer at XYZ company.  Over the course of four years in software engineering, I have attained significant experience coding with a variety of programming languages, working directly with corporate leadership and clients, and steering projects while leading software development teams. I believe I would be an excellent addition to the Technology Resources team. I also have experience in Agile project management, data science, and creating and maintaining custom web and mobile applications. I look forward to sharing more about my skills and experiences and how they could help me hit the ground running with Technology Resources.\nHope to meet you soon.\n\nRegards,\n(Your Name)\n`
        },
        {
            sno: 8,
            header: "Email for the 1:1 introduction",
            content: `\nDear [name of client],\n\nMy name is [your name], and I work at [your company] in [your position]. Because our businesses are in the same industry, I believe we would both gain from collaborating.\n\nI'd love to talk about how we could collaborate because our product portfolio is precisely geared to [product purpose] and could truly help with [prospect's specific problems]. Is it possible for us to meet at [place] on [day and time] to discuss this?\n\nI look forward to your response.\n\nHave a wonderful day,\n\n[your name]\n`
        },
        {
            sno: 9,
            header: "Email to arrange a meeting with the client",
            content: `\nDear [Name of Client],\nMy name is [Your name] and I'm writing on behalf of [business name] (explain company activities).\nI'd like to meet with someone from [management/marketing/etc...] to discuss [subject or topics].\nAnytime between [date and time 1] and [date and time 2] would be ideal, but I am more than willing to adjust to another mutually agreeable date and time.\n\nThank you so much for your time.  I look forward to hearing from you.\n\nBest Regards\n`
        },
        {
            sno: 10,
            header: "Request for the issue of experience certificate",
            content: `\nRespected Sir,\nMy name is [your name] worked as [designation] in [department] from [joining date] to [releiving date].\nI‌ am hereby requesting you to kindly issue my experience certificate which ‌I need to submit in my interview.\n\nI am really thankful to you if you issue my experience certificate as early as possible.\n\nThanking you in advance.\nYours Sincerely,\n\nEmployee Name,\n`
        },
        {
            sno: 11,
            header: "Email for requesting promotion",
            content: `\nDear Sir,\nI'd like to call your attention that I worked for this company for eight years. I believe my workload has increased significantly, yet I never compromise on the quality of my work. Others know they can rely on me to do the task. All of the staff have been pleasant to work with.\n\nI'm writing to inform you that I'm still working as a team leader and to request that you promote me to a higher position.\n\nI always received positive responses from you, and I'm hoping for the same this time. I'm looking forward to hearing good news, and I promise I'll never let you down.\nThank You\n[Your Name]\n`
        },
        {
            sno: 12,
            header: "Professional email requesting clarification",
            content: `\nHello [Name],\nThank you for your interest in [subject] and for taking the time to contact me. Could you please provide me with some more details so that I may better understand your request? I'd like to be of assistance to you as soon as possible. It would help to speed up the process if you could perhaps specify the three most critical points for which you require my assistance.\n\nI'll be able to better assist you once I have this explanation.\nThank you,\n[Name]\n`
        },
        {
            sno: 13,
            header: "Review Request Email",
            content: `\nHi[Name]\nI hope you're loving your new [name of the product] purchase.\n\nIf you found it beneficial, we'd appreciate it if you could help us and those who want to buy it.\n\nSo, could you please leave a review on this page [insert link]? It should only take you three minutes.\n\nWe really appreciate your help.\nThank You,\nName\n`
        },
        {
            sno: 14,
            header: "Discount offer email",
            content: `\nHello[Name]\nThank you so much for being a [your company name] customer.\n\nWe have been able to stay in business for so long because of people like you. We've designed a unique discount coupon only for you as a thank you.\n\nUse the code [unique code number] to save [add a discount percentage or amount] on any purchase in our store [insert a link to your online business].\n\nBut don't be late! Only the first [insert number or time limit] persons who make a purchase will be eligible for the offer.\nThank You,\nYour name\n`
        },
        {
            sno: 15,
            header: "Client onboarding email",
            content: `\nHello[Name]\n\nThank you very much for choosing to work with us. We're excited to collaborate with you.\n\nI'm going to establish a plan for this project now. To handle our projects, we like to utilise Trello and/or Asana [modify to whichever application you like]. I'd appreciate it if you could tell me which one you like. We'll put up a board for you there so you can keep track of our work.\n\nI've also attached a document with all of the login information I need from you. Please enter them there in the document.\n\nYou can email me at name@example.com or call me at [add your phone number] if you have any questions.\n\nThank you very much.\n\n[your name]\n`
        },
        {
            sno: 16,
            header: "Feedback request email",
            content: `\nHello[Name]\nI hope you've been satisfied with our services thus far.\n\nWe want to keep providing the finest service possible. Could you please spend five minutes to complete the [share link to form] feedback form for us?\n\nPlease be very honest in your responses. Don't be hesitant to say something if you don't like it. We value your comments and are prepared to make changes to better serve you.\n\nThank You\n\n[Your Name]\n`
        },
        {
            sno: 17,
            header: "Proposal Email to the client",
            content: `\nHello[client name]\nAs I've learned more about [their organisation], I've come to believe that our services are a good fit for both your immediate requirements and long-term objectives.\n\nWe can provide [kind of solutions] to help you handle [particular issues they're having]. We employ strategies that are distinct from those employed by our competitors, such as [differentiators from other companies in your area].\n\nWe've always been acknowledged for our outstanding results and service, such as [particular accomplishments you can cite]. One of our customers [mention a specific, relevant customer storey] was able to benefit from our assistance.\n\nGiven how well our [product or service] fits your requirements, I believe we might collaborate effectively.\nLook forward to hearing from you.\nThank You\nYour Name\n`
        },
    ]
    
    const inTemplates = [
        {
            sno: 1,
            header: "For joining a company",
            content: `I’m excited to announce that I will be taking on a new role as (name position) within the (name of team or branch of company). During my time as a (previous position title), I learned ____, ____, and ____. I’d like to thank ____, ____, and ____ for their ongoing support and for _____. I cannot wait to see where this new chapter of my career will take me, and to grow and learn within this role.`
        },
        {
            sno: 2,
            header: "For the last day in the company",
            content: `After ___ years/month, today marks my last day at (company name). I would like to thank everyone at (company) that helped me flourish in my role and taught me more than I ever thought possible. It was an honour to work at a company that serves as an industry leader for ____ and truly allows its employees to grow. I am proud of what I have accomplished in this role. During my time at (company), some of my accomplishments were ____, ____, and ____. It's been a pleasure working with such great colleagues during my time at (company). In particular, I’d like to thank ____, ____, and ____. While I am sad to close the door on this chapter of my career, I couldn’t be more excited for the next. I’m looking forward to furthering my skills and exploring new opportunities in (industry/field) and cannot wait to see what the future has in store for me.`
        },
        {
            sno: 3,
            header: "Team Outing",
            content: `“Teamwork makes the dream work.”\n\nWhen we’re one o’clock low, we always make sure to take a break and refuel. Having fun together is a great way to also be productive! We knew it was a good idea when we started joking around and feeling more energized all of a sudden! I am very excited to announce a team outing to take a break from our daily workload. Let’s go for an outing with our team and enjoy a day out with our teammates on (Date) at (Place).`
        },
        {
            sno: 4,
            header: "Recent founder request-reply",
            content: `We're so glad you reached out! We're always looking for exciting new content to share with our community and would love to have a conversation. Let's connect on Twitter @otus or email at hello@otus.com.`
        },
        {
            sno: 5,
            header: "Partnership request-reply",
            content: `Thanks for reaching out to us! We are always looking to expand our network of experts, especially on this topic. We are happy to connect with you on social media or via email. Let me know if you have any specific questions or want to get in touch with someone on our team.\n\nBest,\n{Your name}\n`
        }
    ]

    const openModal = (flag, id) => {
        setContent(
            flag === "email" ? {
                type: "Email Template",
                title: emailTemplates[id].header,
                para: emailTemplates[id].content
            }
            : 
            {
                type: "LinkedIn Posts",
                title: inTemplates[id].header,
                para: inTemplates[id].content
            }
        )
        setVisible(true);
    }

    return (
        <>
            <div className={`${Styles.Section}`}  style={{marginBottom: "5rem"}}>
                <div className={`${Styles.headerSection}`}>
                    <div className={`${Styles.header}`}>Resources</div>
                    <p className={`${Styles.para}`}>Experts and novices are using the Otus AI writing generator to create rapid, on-brand marketing copy. Are you looking for AI copywriting for emails? Are you stumped for your next LinkedIn post? There is no need to be concerned. Otus AI writer can write engaging, on-brand AI copy for a variety of content forms, including emails, blogs, LinkedIn posts, and more.</p>
                </div>
                <div className={`${Styles.emailSection}`}  style={{marginBottom: "5rem"}}>
                    <div className={`${Styles.subHead}`}>Email Templates</div>

                    <ListGroup  style={{padding: "1rem"}}>

                        {
                            emailTemplates.map((ele) => {
                                // console.log(todo.sno);
                                return (
                                    <>
                                    {
                                        ele.sno%2 === 0
                                        ?
                                        <ListGroup.Item style={{padding: "1rem", cursor: "pointer"}}  onClick={() => { openModal("email", ele.sno - 1) }} variant="light"><strong>{` `+ ele.sno + `. `}&nbsp; &nbsp; </strong> {ele.header} </ListGroup.Item>
                                        :
                                        <ListGroup.Item style={{padding: "1rem", cursor: "pointer"}}   onClick={() => { openModal("email", ele.sno - 1) }} variant="dark"><strong>{` `+ ele.sno + `. `}&nbsp; &nbsp; </strong> {ele.header} </ListGroup.Item>
                                    }
                                    </>
                                )
                            })
                        }
                        </ListGroup>
                </div>
                <div className={`${Styles.Section}`} style={{paddingBottom: "5rem"}}>
                    <div className={`${Styles.subHead}`}>LinkedIn Post Templates</div>

                    {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}> */}
                    <ListGroup style={{padding: "1rem"}}>
                        {
                            inTemplates.map((ele) => {
                                return (

                                    <>
                                    {
                                        ele.sno%2 === 0
                                        ?
                                        <ListGroup.Item  style={{padding: "1rem", cursor: "pointer"}}  onClick={() => { openModal("in", ele.sno - 1) }} variant="light"><strong>{` `+ ele.sno + `. `}&nbsp; &nbsp; </strong> {ele.header} </ListGroup.Item>
                                        :
                                        <ListGroup.Item  style={{padding: "1rem", cursor: "pointer"}}  onClick={() => { openModal("in", ele.sno - 1) }} variant="dark"><strong>{` `+ ele.sno + `. `}&nbsp; &nbsp; </strong> {ele.header} </ListGroup.Item>
                                    }
                                    </>
                                )
                            })
                        }
                        </ListGroup>
                    {/* </div> */}
                </div>
            </div>

            <Modal
                onCancel={() => setVisible(false)}
                style={{ zIndex: 10000 }} title={Content.type} visible={visible} footer={[
                <Button key="back" onClick={()=> setVisible(false)}>
                    Return
                </Button>,
                <Button
                    type="primary"
                    onClick={() => {
                        copy(Content.para);
                        alert("Successfully copied to clipboard !");
                    }}
                > Copy to clipboard
                </Button>
            ]}>
                <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>{Content.title}</p>
                <p id="para1" style={{ fontSize: "1rem", whiteSpace: "pre-line", backgroundColor: "#80808021", padding: "1rem", maxHeight: "90%", overflow: "hidden", overflowY: "auto"}} dangerouslySetInnerHTML={{ __html: Content.para }} ></p>
                {/* <Button
                style={{float: "right"}}
                    type="dashed"
                    onClick={() => {
                        copy(Content.para);
                        alert("Successfully copied to clipboard !");
                    }}
                > Copy to clipboard
                </Button> */}
            </Modal>


        </>
    )
}

export default Resources
