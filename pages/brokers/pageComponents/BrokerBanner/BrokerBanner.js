import React from 'react'
import Form from "@components/BrokerPage/Form";
import styles from './BrokerBanner.module.scss';

const BrokerBanner = () => {
  return (
    <section className={styles.mainWrapper}>
        <div className={`container ${styles.container}`}>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className={styles.content}>
                        <h3 className={`fs-28 fw-700`}>
                            Let Your Clients Access the Best Overseas Medical Treatments All Over the World
                        </h3>
                        <h4 className={`fs-24 fw-300`}>
                            On-demand Healthcare Services for
                        </h4>
                        <h4 className={`fs-24 fw-300 text-primary`}>
                            Everyone, Everywhere, Anytime.
                        </h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <Form user_type="broker" />
                </div>
            </div>
        </div>
        <div className={`d-none d-lg-block ${styles.videoContainer}`}>
            <video src="/videos/inoqare-broker-banner.mp4" type="video/mp4" autoPlay muted loop />
        </div>
    </section>
  )
}

export default BrokerBanner