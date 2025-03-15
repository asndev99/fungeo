import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit} className="">
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
            name="email"
          />
          <textarea
            className="form-control"
            type="text"
            rows={10}
            required
            autoComplete="off"
            placeholder="Enter Your Message"
            name="message"
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
