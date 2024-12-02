import { useState, useEffect } from "react";

export const EditForm = ({ contact, onUpdate }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName || "",
                lastName: contact.lastName || "",
                email: contact.email || "",
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="fName">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="lName">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="eMail">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button className="update" type="submit">Update Contact</button>
    </form>
    );

}