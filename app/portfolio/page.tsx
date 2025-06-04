import Image from 'next/image';

const projects = [
  {
    title: 'Padmalaya High School',
    category: 'Education',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/Screenshot%202025-06-04%20125500.png?updatedAt=1749021969021',
    link: 'https://padmalayahighschool.in',
    description: 'A modern, responsive website for Padmalaya High School, featuring information about academics, admissions, and events.'
  },
  // Add more projects here
];

export default function PortfolioPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of the projects we have delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium text-blue-300 mb-1">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}