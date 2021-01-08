import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv'


function ProductUpload() {

	const config = {
		headers: { "X-Requested-With": "XMLHttpRequest" }
	}
	const [imageSelected, setImageSelected] = useState("")

	const uploadImage = (req, res, files) => {
		const formData = new FormData()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "bazaarimages")

		console.log("hello")
		try {
			axios.post(`https://api.cloudinary.com/v1_1/bazaar6/image/upload`, formData, config)
		} catch {
			res.status(400).send({ message: { content: "Please upload a valid image" } })
			console.log(res)
		}
	}




	return (
		<div>
			<input
				type="file"
				onChange={(event) => {
					setImageSelected(event.target.files[0])
				}}
			/>
			<button onClick={uploadImage}>Upload Image</button>
		</div>
	);
}
export default ProductUpload;