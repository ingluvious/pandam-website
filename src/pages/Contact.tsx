import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contact_style from "../styleSheets/style_contact.module.scss";
import button_style from "../styleSheets/global_button.module.scss"
import GlobalButton from "../page_sections/utilityFiles/GlobalButton"

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
      {/* <h1 className={contact_style.contact_heading}>Contact Us</h1>÷ */}
      <div className={contact_style.contact_form_container}>
        {submitted ? (
          <div className={contact_style.redirect_message}>
            Form Submitted! Redirecting you to the home page<span>.</span><span>.</span><span>.</span>
          </div>
        ) : (
          <>
          <div className={contact_style.left_side}>
              <h1 style={{ fontSize: "3rem", lineHeight: "1.2" }}>
                Contact Us
              </h1>
              <p style={{ marginTop: "1rem", maxWidth: "80%", fontSize: "0.9rem" }}>
                It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot.!
              </p>
            </div>
            <form onSubmit={handleSubmit} className={contact_style.form}>
              <div style={{ display: "none" }}>
                <label>
                  Do not fill this out:
                  <input
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    type="text"
                    className="input_focus_textarea_focus"
                  />
                </label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="What's your message?"
                  value={formData.message}
                  onChange={handleChange}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                  rows={5}
                  required
                />
              </div>
              <GlobalButton text = "Get in touch" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;