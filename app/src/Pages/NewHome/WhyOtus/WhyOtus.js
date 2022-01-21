import React from 'react'
import './WhyOtus.css'
const WhyOtusSection = () => {
    return (
        <>
                <div className="header_sol">
                    <div className="solutions_card_wrapper">
                    <div className="intro intro2">
                        <h2 className="header-of-each-section">How Otus helps</h2>
                    </div>
                        <div className="solutions_row_wrap-2">
                            <div className="solutions_card_wrap-2">
                                <div className="solutions_card_image_wrap">
                                    <img src="./web/images/email.png" loading="lazy" width="50" alt="" className="solutions_icon"/>
                                    </div>
                                <h4 className="solutions_card_title-2">Emails</h4>
                                <h5 className="solutions_card_sub_title-2">Write professional emails that impress your contacts, friends, and family with an online writing assistant.</h5>
                            </div>
                            <div className="solutions_card_wrap-2">
                                <div className="solutions_card_image_wrap">
                                    <img src="./web/images/in.png" loading="lazy" width="50" alt="" className="solutions_icon"/>
                                </div>
                                <h4 className="solutions_card_title-2">Linkedin posts</h4>
                                <h5 className="solutions_card_sub_title-2">Social media is all about content creation and we do it perfectly.</h5>
                            </div>
                        </div>
                        <div className="solutions_row_wrap-2">
                            <div className="solutions_card_wrap-2">
                                <div className="solutions_card_image_wrap">
                                    <img src="./web/images/blog.png" loading="lazy" width="50" alt="" className="solutions_icon"/>
                                </div>
                                <h4 className="solutions_card_title-2">Blog posts</h4>
                                <h5 className="solutions_card_sub_title-2">Create and distribute powerful, attention-grabbing blog posts on social media.</h5>
                            </div>
                            <div className="solutions_card_wrap-2">
                                <div className="solutions_card_image_wrap">
                                    <img src="./web/images/rec.png" loading="lazy" width="50" alt="" className="solutions_icon"/>
                                </div>
                                <h4 className="solutions_card_title-2">Recommendations</h4>
                                <h5 className="solutions_card_sub_title-2">Improve your online presence with LinkedIn recommendations.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                    </>
    )
}

export default WhyOtusSection