import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Project data
const projects = [
  {
    id: 'mountain-escape',
    title: 'Mountain Escape Resort',
    category: 'Hospitality',
    description: 'A luxury resort website with booking functionality and stunning visual design.',
    imageUrl: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Booking API'],
    link: '/portfolio/mountain-escape'
  },
  {
    id: 'bloom-botanicals',
    title: 'Bloom Botanicals',
    category: 'E-commerce',
    description: 'An e-commerce platform for a plant shop with inventory management and secure payments.',
    imageUrl: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Inventory System'],
    link: '/portfolio/bloom-botanicals'
  },
  {
    id: 'urban-architects',
    title: 'Urban Architects',
    category: 'Professional Services',
    description: 'A portfolio website for an architecture firm showcasing their projects and services.',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['React', 'Tailwind CSS', 'GSAP Animations', 'CMS'],
    link: '/portfolio/urban-architects'
  },
  {
    id: 'fresh-eats',
    title: 'Fresh Eats Delivery',
    category: 'Food Service',
    description: 'A food delivery service with real-time order tracking and restaurant listings.',
    imageUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
    link: '/portfolio/fresh-eats'
  },
  {
    id: 'fitlife',
    title: 'FitLife Gym',
    category: 'Health & Fitness',
    description: 'A gym website with membership management and class scheduling features.',
    imageUrl: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Scheduling API'],
    link: '/portfolio/fitlife'
  },
  {
    id: 'creative-agency',
    title: 'Creative Agency',
    category: 'Marketing',
    description: 'A creative agency website with case studies, team profiles, and service offerings.',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    link: '/portfolio/creative-agency'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent projects. Each website is custom-designed to meet our clients' specific needs and goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={project.link}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-auto">
                    <p className="text-sm font-medium text-blue-500 mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn mt-auto justify-start px-0 hover:bg-transparent">
                    View Project Details 
                    <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and get a free quote. Let's create something amazing together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}