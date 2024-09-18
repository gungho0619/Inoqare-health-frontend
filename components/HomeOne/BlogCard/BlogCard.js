import Link from "next/link";
import React from "react";
import styles from "./BlogCard.module.scss";

const BlogCard = ({ data }) => {
	return (
		<div className="blog-card style1 hover-img">
			<div className="blog-img">
				<Link href={data.url}>
					<a className={`flex-img image ${styles.image}`}>
						<img src={data.image} alt={data.title} />
					</a>
				</Link>
				<span className="blog-date">
					<i className="ri-time-line"></i>
					{data.date}
				</span>
			</div>
			<div className="blog-info">
				<Link href={data.url}>
					<a className={`flex-img image ${styles.image}`}>
						<h3 className="blog-title mt-3">{data.title}</h3>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
