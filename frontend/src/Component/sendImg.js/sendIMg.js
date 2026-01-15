import React, { useState } from "react";
import axios from "axios";
import './sendImg.css'
const SendIMg = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            return alert("Please select an image to upload.");
        }

        const formData = new FormData();
        formData.append("file", image);

        try {
            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUploadStatus("Upload successful!");
            console.log("Server Response:", response.data);
        } catch (error) {
            setUploadStatus("Upload failed!");
            console.error("Error uploading image:", error);
        }
    };

    return (
        <div className="sendImg">
            <h2 className="titleImg">Upload Image</h2>
            <form onSubmit={handleSubmit} className="inputPicture">
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <br /><br />
                {preview && <img src={preview} alt="Preview" style={{}} />}
                <br /><br />
                <button type="submit">Upload</button>
            </form>
            <p>{uploadStatus}</p>
        </div>
    );

}

export default SendIMg