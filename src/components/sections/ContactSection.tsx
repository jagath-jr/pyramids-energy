export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
