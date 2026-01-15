import React, { useState } from "react";
import "./DetailsForm.css";

const DetailsForm = ({ endpoint, formTitle = "Enter Details", initialValues = {}, onSuccess }) => {
    const [formData, setFormData] = useState({
        title: initialValues.title || "",
        description: initialValues.description || "",
        price: initialValues.price || "",
        timeRequired: initialValues.timeRequired || "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("timeRequired", formData.timeRequired);
        if (formData.image) data.append("image", formData.image);

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                body: data,
            });

            const result = await res.json();
            if (res.ok) {
                alert("Form submitted successfully!");
                if (onSuccess) onSuccess(result);
            } else {
                alert(result.message || "Something went wrong.");
            }
        } catch (err) {
            alert("Failed to submit: " + err.message);
        }
    };

    return (
        <div className="details-form-container">
            <form className="details-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <h2>{formTitle}</h2>

                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <label>Time Required (in minutes)</label>
                <input
                    type="number"
                    name="timeRequired"
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
                />

                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="image-preview" />
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DetailsForm;
