import Link from 'next/link';
import { ArrowRight, Code, ShoppingBag, Layout, Search, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Layout className="h-10 w-10 text-blue-500" />,
    title: 'Custom Website Design',
    description: 'Beautiful, unique websites designed specifically for your brand and business goals.',
    link: '/services#custom-design'
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-blue-500" />,
    title: 'E-commerce Development',
    description: 'Powerful online stores with secure payment processing and inventory management.',
    link: '/services#ecommerce'
  },
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: 'Portfolio Websites',
    description: 'Showcase your work with stunning, interactive portfolio websites that impress clients.',
    link: '/services#portfolio'
  },
  {
    icon: <Search className="h-10 w-10 text-blue-500" />,
    title: 'SEO & Performance',
    description: 'Optimize your site for search engines and lightning-fast performance.',
    link: '/services#seo'
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-500" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and maintenance to keep your website secure and up-to-date.',
    link: '/services#maintenance'
  }
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web solutions tailored to your specific needs. From design to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="group">
                  <Link href={service.link}>
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}