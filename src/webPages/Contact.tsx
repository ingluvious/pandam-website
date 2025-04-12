import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: "", // Honeypot field
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botField) {
      console.warn("Bot detected!");
      return;
    }

    try {
      const response = await fetch("https://k4mxi1w70h.execute-api.ap-southeast-2.amazonaws.com/prod/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitted(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
      botField: "",
    });
  };

  return (
    <div>
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-form-container">
        {submitted ? (
          <div className="redirect-message">
            Form Submitted! Redirecting you to the home page<span>.</span><span>.</span><span>.</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "none" }}>
                <label>
                  Do not fill this out:
                  <input
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    type="text"
                  />
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
              {/* <label>
                  Message: */}
                  <textarea
                    name="message"
                    placeholder="What's your message?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                {/* </label> */}
              </div>
              <div className="form-button">
                <button type="submit">Get in touch</button>
              </div>
            </form>
            <div className="right-side">
              <h1 style={{ fontSize: "3rem", lineHeight: "1.2" }}>
                Contact Us
              </h1>
              <p style={{ marginTop: "1rem", maxWidth: "80%", fontSize: "0.9rem" }}>
                It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!
              </p>
            </div>
          </>
        )}
      </div>
      <style>{`
        .contact-form-container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 5rem 2rem 2rem; /* Updated padding-top */
          background-color: transparent;
          display: flex;
          justify-content: space-between;
          border-radius: 0;
          color: white;
          font-family: 'Helvetica Neue', sans-serif;
}
        }
        form {
          width: 50%;
          padding-right: 2rem;
        }
        .right-side {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 2rem;
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem 0;
          margin-bottom: 1.5rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid white;
          color: white;
          font-size: 1rem;
        }
        input:focus, textarea:focus {
          outline: none;
          border-bottom: 1px solid maroon;
        }
        button[type="submit"] {
          padding: 1rem 2rem;
          background-color: maroon;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          font-size: 0.9rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        button[type="submit"]:hover {
          opacity: 0.8;
        }
        .contact-heading {
          display: none;
        }
        .redirect-message {
          text-align: center;
          font-size: 1.2rem;
          color: white;
          margin-top: 2rem;
        }
        .form-button {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Contact;