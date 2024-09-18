import React from "react";
import styles from "./BrokerBanner.module.scss";
import Form from "@components/BrokerPage/Form";

const BrokerBanner = () => {
	return (
		<section className={styles.mainWrapper}>
			<div className={`container ${styles.container}`}>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className={styles.content}>
                            <h3 className={`${styles.title} fs-sm-22`}>
                                Let Your Clients Access the Best Overseas Medical Treatments All Over the World
                            </h3>
                            <h4 className={`${styles.subtitle} fs-sm-20`}>
                                On-demand Healthcare Services for
                            </h4>
                            <h4 className={`${styles.gradientText} fs-sm-20`}>
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
	);
};

export default BrokerBanner;
