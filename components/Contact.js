"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Create wave effect on each label
    const labels = document.querySelectorAll(".form-label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span class="inline-block transition-transform duration-300 ease-out" style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="section text-white items-center">
      <h2 className="h2-start text-center">Get in touch</h2>
      <p className="text-lg sm:text-xl mb-6 max-w-2xl">
        Want to collaborate or have any questions? Send a message and let's talk!
      </p>

      <form onSubmit={handleSubmit} className="border border-gray-500 text-white p-8 rounded-lg w-full max-w-2xl mx-auto shadow-lg">
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input peer"
          />
          <label className="form-label">Name</label>
        </div>

        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input peer"
          />
          <label className="form-label">Email</label>
        </div>

        <div className="relative mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input peer h-32 resize-none"
          />
          <label className="form-label">Message</label>
        </div>

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 p-3 rounded-md transition-all">
          Send
        </button>

        {status === "loading" && <p className="text-yellow-400 mt-2 text-center">Sending...</p>}
        {status === "success" && <p className="text-green-400 mt-2 text-center">Message sent!</p>}
        {status === "error" && <p className="text-red-400 mt-2 text-center">Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
