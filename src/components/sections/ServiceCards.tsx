export default function ServiceCards() {
  const services = [
    {
      title: "Transmission Systems",
      description: "High-voltage transmission line installation and maintenance",
      icon: "⚡",
    },
    {
      title: "Distribution Networks",
      description: "Medium and low voltage distribution system design",
      icon: "🔌",
    },
    {
      title: "Substation Equipment",
      description: "Transformer and switchgear installation services",
      icon: "🏭",
    },
    {
      title: "Project Management",
      description: "End-to-end project planning and execution",
      icon: "📋",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
