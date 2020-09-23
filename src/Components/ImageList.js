import React from "react";
import ImageCard from "./ImageCard";
import "./imageList.css";
const ImageList = props => {
	const images = props.images.map((/*{ description, id, urls }*/ image) => {
		console.log("displayed");

		// return <img key={id} src={urls.regular} alt={description} />;
		return <ImageCard image={image} key ={image.id}/>;
	});
	return <div className='image-list'>{images}</div>;
};

export default ImageList;
