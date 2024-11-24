import React from 'react';

const Contact: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form style={{ maxWidth: '500px', margin: 'auto' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    ></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#00bcd4', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;