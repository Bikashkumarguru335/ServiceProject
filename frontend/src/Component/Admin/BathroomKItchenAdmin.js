import React, { useState } from 'react'
import "./BathroomKitchen.css"
const BathroomKItchenAdmin = () => {



    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        timeRequired: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your API logic here
    };

    return (
        <div className="details-form-container">
            <form className="details-form" onSubmit={handleSubmit}>
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

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default BathroomKItchenAdmin