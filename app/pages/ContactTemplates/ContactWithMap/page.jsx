"use client";

import ContactMap from '../../../components/ContactMap';

export default function ContactWithMapPage() {
  return (
    <section className="bg-sky-50 py-10 xl:py-20 px-4 md:px-10">
      <div className="flex gap-10">
        {/* Contact Form */}
        <div className="bg-white w-full p-6 rounded-xl shadow-md p-10">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-sky-400"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-sky-400"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-sky-400"
                placeholder="Your Company"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-sky-400"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-sky-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className='w-full'>
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
