import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate web designers and developers dedicated to creating stunning, functional websites for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Our team collaborating" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, InnovaTech Developers began with a simple mission: to help businesses succeed online with beautiful, functional websites that drive results.
              </p>
              <p className="text-muted-foreground mb-4">
                We noticed that many businesses were struggling with outdated, poorly designed websites that were not delivering the results they needed. We set out to change that by combining stunning design with strategic thinking and technical expertise.
              </p>
              <p className="text-muted-foreground">
                Today, we have helped dozens of businesses transform their online presence with websites that not only look great but also convert visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at WebCraftStudio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-blue-500">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. From design to code, we ensure everything we create meets the highest standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-blue-500">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're committed to delivering websites that help you achieve your business goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-blue-500">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of web design and development trends to bring you the most innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure every project is completed on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground mb-6">
                We start by understanding your business, goals, target audience, and competition to inform our design strategy.
              </p>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground mb-6">
                We create wireframes and mockups of your website, iterating based on your feedback until the design is perfect.
              </p>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground mb-6">
                Our developers bring the design to life, building a responsive, fast, and user-friendly website.
              </p>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-blue-200 -z-10"></div>
            </div>

            <div>
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground mb-6">
                After thorough testing, we launch your site and provide ongoing support to ensure its continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
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