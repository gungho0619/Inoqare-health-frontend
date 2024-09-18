import CallbackForm from '@components/CallbackForm/CallbackForm';
import React from 'react'
import styles from './BannerForm.module.scss';

const BannerForm = ({pageData}) => {
    return (
        <section className={styles.mainWrapper}>
            <div className={`container ${styles.container}`}>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className={styles.content}>
                            <h3 className={`fs-28 fw-600`}>{pageData.title}</h3>
                            <h4 className={`fs-24 fw-300`} dangerouslySetInnerHTML={{__html: pageData.smTitle}}></h4>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <CallbackForm user_type={pageData.userType} title={pageData.formTitle}/>
                    </div>
                </div>
            </div>
            {pageData.video 
            ? <div className={`d-none d-lg-block ${styles.videoContainer}`}>
                <video src={pageData.video} type="video/mp4" autoPlay muted loop />
            </div>
            : <></>
            }
        </section>
    )
}

export default BannerForm