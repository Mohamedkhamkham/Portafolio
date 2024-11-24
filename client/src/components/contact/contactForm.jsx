import React, { useState } from "react";
import "../../components/contact/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formUrl =
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLScCJo5ic6HKYUS7JD8XbP_5Y6qmrWZAyay_CTbVd_x21_828Q/formResponse";

        const formParams = new URLSearchParams();
        formParams.append("entry.947510924", formData.surname);
        formParams.append("entry.1534703645", formData.email);
        formParams.append("entry.1467633550", formData.message);


        fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formParams,
        })
            .then(() => {

                toast.success("Mensaje enviado, gracias por contactarme!", {
                    position: "bottom-right",
                    autoClose: 5000,
                });

                setFormData({
                    name: "",
                    surname: "",
                    email: "",
                    message: "",
                });
            })
            .catch((err) =>
                console.error("Error al enviar el formulario:", err)
            );
    };

    return (
        <div className="contact-form-container">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Apellido"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Comentario"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
