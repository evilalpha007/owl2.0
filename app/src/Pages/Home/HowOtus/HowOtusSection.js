import React from 'react'
import Styles from './HowOtusSection.module.css'
import Title from '../../../UtilityTools/Title/Title'

const HowOtusSection = () => {
  return (
    <>
      <div style={{margin: "35px 0"}}>
        <Title title="How Otus Works" />
      </div>
      <div className={`${Styles.HowOtusSection}`} >
        <div className={`${Styles.HowOtusChild1}`}>
          <div className={`${Styles.HowOtusSubChild1} ${Styles.Child}`}>
            <div className={`${Styles.header1} ${Styles.header}`}>
            Verification
              <span className={`${Styles.HowOtusLogo}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
              </span>
            </div>
            <div className={`${Styles.para1} ${Styles.para}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit molestias animi voluptates ad dolorum corporis</div>
          </div>
          <div className={`${Styles.HowOtusSubChild2} ${Styles.Child}`}>
            <div className={`${Styles.header2} ${Styles.header}`}>
            Reach Out To Us
              <span className={`${Styles.HowOtusLogo}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
              </span>
            </div>
            <div className={`${Styles.para1} ${Styles.para}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit molestias animi voluptates ad dolorum corporis</div>
          </div>
        </div>
        <img src='/assets/HowOtusWorks.svg' alt='' className={`${Styles.image}`} />
        <div className={`${Styles.HowOtusChild2}`}>
          <div className={`${Styles.HowOtusSubChild3} ${Styles.Child}`}>
            <div className={`${Styles.header3} ${Styles.header}`}>
              <span className={`${Styles.HowOtusLogo}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              </span>
              Publish
            </div>
            <div className={`${Styles.para2} ${Styles.para}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit molestias animi voluptates ad dolorum corporis</div>
          </div>
          <div className={`${Styles.HowOtusSubChild4} ${Styles.Child}`}>
            <div className={`${Styles.header4} ${Styles.header}`}>
              <span className={`${Styles.HowOtusLogo}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              </span>
              AI Engine
            </div>
            <div className={`${Styles.para2} ${Styles.para}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit molestias animi voluptates ad dolorum corporis</div>
          </div>
        </div>
        {/* <div className={`${Styles.HowOtusChild2}`}>
          <div className={`${Styles.HowOtusSubChild3}`}> Step 3</div>
          <div className={`${Styles.HowOtusSubChild4}`}> Step 4</div>
        </div> */}
      </div>
    </>
  )
}

export default HowOtusSection
