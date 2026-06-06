export default function ProjectGrid() {
  const projects = [
    {
      title: "Power Plant Project",
      location: "Abu Dhabi, UAE",
      image: "/placeholder-project1.jpg",
      year: 2023,
    },
    {
      title: "Distribution Network",
      location: "Dubai, UAE",
      image: "/placeholder-project2.jpg",
      year: 2023,
    },
    {
      title: "Transmission Line",
      location: "Sharjah, UAE",
      image: "/placeholder-project3.jpg",
      year: 2022,
    },
    {
      title: "Substation Upgrade",
      location: "Ajman, UAE",
      image: "/placeholder-project4.jpg",
      year: 2022,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-64 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.location}</p>
              <p className="text-sm text-gray-500">{project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
