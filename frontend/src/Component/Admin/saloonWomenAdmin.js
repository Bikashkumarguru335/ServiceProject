import React, { useState } from "react";
import "./Electrician.css";

const PrimeSaloon = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        timeRequired: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            const file = files[0];
            setFormData((prevData) => ({
                ...prevData,
                image: file,
            }));

            // Preview image
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            if (file) reader.readAsDataURL(file);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("timeRequired", formData.timeRequired);
        data.append("image", formData.image);

        console.log("Submitting form data...");

        // For actual API call
        // fetch("/api/submit", {
        //   method: "POST",
        //   body: data,
        // });

        alert("Form submitted! Check console for FormData.");
    };

    return (
        <div className="details-form-container">
            <form className="details-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <h2>Enter Details</h2>

                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <label>Time Required (in minutes)</label>
                <input
                    type="number"
                    name="timeRequired"
                    placeholder="Enter time"
                    value={formData.timeRequired}
                    onChange={handleChange}
                    required
                />

                <label>Upload Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />

                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="image-preview" />
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PrimeSaloon;
