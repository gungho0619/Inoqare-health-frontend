import React from "react";

const Video = ({url}) => {
	return (
		<div className="hero__media home no-padding">
			<div className="hero__media-wrapper no-padding">
				<video
					src={url}
					type="video/mp4"
					autoPlay
					muted
					loop
					className="banner-video"
				></video>
			</div>
		</div>
	);
};

export default Video;
