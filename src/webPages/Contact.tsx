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
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-button">
              <button type="submit">Send</button>
            </div>
          </form>
        )}
      </div>
      <style>{`
        .contact-form-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: transparent;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          box-sizing: border-box;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 500;
          color: white;
        }
        input {
          width: 100%;
          padding: 0.75rem 0;
          border: none;
          border-bottom: 2px solid #ccc;
          border-radius: 0;
          font-size: 1rem;
          box-sizing: border-box;
          background: transparent;
          outline: none;
          color: white;
        }
        input:focus {
          border-bottom-color: #0070f3;
        }
        textarea {
          height: 100px;
          resize: vertical;
          width: 100%;
          padding: 0.75rem 0;
          border: none;
          border-bottom: 2px solid #ccc;
          border-radius: 0;
          font-size: 1rem;
          box-sizing: border-box;
          background: transparent;
          outline: none;
          color: white;
        }
        textarea:focus {
          border-bottom-color: #0070f3;
        }
        button[type="submit"] {
          padding: 0.75rem 1.5rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
        button[type="submit"]:hover {
          background-color: #005ac1;
        }
        .contact-heading {
          text-align: center;
          margin-bottom: 1rem;
        }
        .form-button {
          text-align: center;
          margin-top: 1rem;
        }
        .redirect-message {
          text-align: center;
          font-size: 1.2rem;
          color: white;
          margin-top: 2rem;
        }

        .redirect-message span {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }

        .redirect-message span:nth-child(1) {
          animation-delay: 0.5s;
        }

        .redirect-message span:nth-child(2) {
          animation-delay: 1.5s;
        }

        .redirect-message span:nth-child(3) {
          animation-delay: 2.5s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;