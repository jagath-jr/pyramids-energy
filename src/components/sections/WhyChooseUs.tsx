export default function WhyChooseUs() {
  const reasons = [
    "25+ years of industry experience",
    "ISO 9001 and OHSAS 18001 certified",
    "Expert team of engineers and technicians",
    "State-of-the-art equipment and technology",
    "Commitment to safety and quality",
    "On-time project delivery",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/placeholder-team.jpg"
              alt="Our Team"
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <span className="text-lg text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
