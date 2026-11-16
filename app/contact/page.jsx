"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17379e6b-bfd8-4e60-8a02-b5c13e0780e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-zinc-50 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <p className="section-kicker">CONNECT WITH ME</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-7 text-zinc-500">
            I&apos;d love to hear from you. Send me a message and I&apos;ll get
            back to you as soon as I can.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/5 sm:p-7"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="sr-only" htmlFor="contact-name">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
            <label className="sr-only" htmlFor="contact-email">
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <label className="sr-only" htmlFor="contact-message">
            Your message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
            className="mt-3 w-full resize-y rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-base text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
          />

          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Send message
              <ArrowRight aria-hidden="true" size={14} />
            </button>
            {result && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm text-emerald-700"
              >
                {result}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
