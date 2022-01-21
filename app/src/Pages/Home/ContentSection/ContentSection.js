import React from 'react'
import Styles from './ContentSection.module.css'

const ContentSection = () => {
  return (
    <div className={`${Styles.contentSection} container`}>
      <div className={`row ${Styles.component}`}>
        <div className='col-md-12'>
          <p className={`${Styles.whyText}`}>
            Over 93% of the people make mistakes in the emails and posts on
            Linkedin ! An average persons spends more than 3 hours on the social
            media posts and emails By choosing Otus, you are saving your time as
            well as writing good posts.
          </p>
          <h1 className={`${Styles.heading}`}>Why Choose Otus?</h1>
        </div>
      </div>
      <div className={`row ${Styles.component}`}>
        <div className='col-md-6'>
          <p className={`${Styles.subNumber}`}>01</p>
          <h1 className={`${Styles.subHeading}`}>Posts</h1>
          <p className={`${Styles.subText}`}>
            Create Linkedin posts which are flawless and optimal for social
            media
          </p>
          <button
            className={`btn btn-primary btn-lg rounded-pill w-25 ${Styles.subNumber}`}
          >
            Start Now
          </button>
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <img src='/assets/robert.svg' alt='linkedIn' />
        </div>
      </div>
      <div className={`row ${Styles.component}`}>
        <div className='col-md-6 d-flex align-items-center'>
          <img src='/assets/robert.svg' alt='linkedIn' />
        </div>

        <div className='col-md-6'>
          <p className={`${Styles.subNumber}`}>02</p>
          <h1 className={`${Styles.subHeading}`}>Responsive</h1>
          <p className={`${Styles.subText}`}>
            Unique and attractive response to the other person’s social media
            posts.
          </p>
          <button
            className={`btn btn-primary btn-lg rounded-pill w-25 ${Styles.subNumber}`}
          >
            Start Now
          </button>
        </div>
      </div>
      <div className={`row ${Styles.component}`}>
        <div className='col-md-6'>
          <p className={`${Styles.subNumber}`}>03</p>
          <h1 className={`${Styles.subHeading}`}>Recommendations</h1>
          <p className={`${Styles.subText}`}>
            Writing recommendations on LinkedIn.
          </p>
          <button
            className={`btn btn-primary btn-lg rounded-pill w-25 ${Styles.subNumber}`}
          >
            Start Now
          </button>
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <img src='/assets/robert.svg' alt='linkedIn' />
        </div>
      </div>
      <div className={`row ${Styles.component}`}>
        <div className='col-md-6 d-flex align-items-center'>
          <img src='/assets/email.svg' alt='linkedIn' />
        </div>

        <div className='col-md-6'>
          <p className={`${Styles.subNumber}`}>04</p>
          <h1 className={`${Styles.subHeading}`}>Emails</h1>
          <p className={`${Styles.subText}`}>
            Write professional emails that impress.
          </p>
          <button
            className={`btn btn-primary btn-lg rounded-pill w-25 ${Styles.subNumber}`}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentSection
