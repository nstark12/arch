"use client";
import { useState } from "react";

const ContactForm = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mx-10 my-12 md:my-12 py-24 gap-4"
    >
      <div className="z-10">
        <h5 className="text-2xl font-semibold text-primaryHov my-2">
          Let&#39;s Connect
        </h5>
        <p className="text-primary mb-4 max-w-md">
          ARCh Office<br></br>419 Frederick Street<br></br>Waukesha, WI
          53186-5605
        </p>
        <p>
          Phone: 262-542-9811<br></br>Fax: 262-542-5280<br></br>Email:
          Archoffice@archchangeslives.org
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Your subject"
              className="border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-full block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className=" block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Let's talk about..."
              className="border border-primary placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white hover:bg-primaryHov  font-medium py-2.5 px-5 rounded-full w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
