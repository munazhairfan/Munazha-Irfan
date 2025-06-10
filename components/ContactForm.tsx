"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
        "service_76xhoik",
        "template_1uwy9u8",
        form.current,
        "CB-DP5AfR1FBaGbIo"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current?.reset();
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Try again later.");
    });
  };

  return (
    <section className="bg-stripes py-8">
    <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Your Name" required className="w-full border p-2 rounded bg-gradient-to-r from-gray-400" />
      <input type="email" name="email" placeholder="Your Email" required className="w-full border p-2 rounded bg-gradient-to-r from-gray-400" />
      <input type="title" name="title" placeholder="Your Title" required className="w-full border p-2 rounded bg-gradient-to-r from-gray-400" />
      <textarea name="message" placeholder="Your Message" required className="w-full border p-2 rounded h-32 bg-gradient-to-r from-gray-400"></textarea>
      <button type="submit" className="mt-6 px-6 py-3 bg-gray-600 text-white shadow hover:bg-gray-700 transition">
        Send Message
      </button>
    </form>
    </section>
  );
}
