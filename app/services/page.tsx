import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Layout, ShoppingBag, Code, Search, Clock, Check } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive web design and development services to help your business succeed online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {/* Custom Website Design */}
            <div id="custom-design" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Layout className="h-8 w-8 text-blue-500 mr-3" />
                    <h2 className="text-3xl font-bold">Custom Website Design</h2>
                  </div>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-6">
                    We create beautiful, unique websites designed specifically for your brand and business goals. Our custom designs are tailored to your audience and optimized for conversions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Unique designs tailored to your brand</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Responsive layouts for all devices</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>User-centered design approach</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Strategic design for conversion optimization</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] bg-[url('https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>

            {/* E-commerce Development */}
            <div id="ecommerce" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center md:order-1">
                <div className="md:order-2">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-500 mr-3" />
                    <h2 className="text-3xl font-bold">E-commerce Development</h2>
                  </div>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-6">
                    Launch your online store with a powerful e-commerce website that's easy to manage and designed to drive sales. We build secure, scalable online shops with seamless checkout experiences.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Secure payment processing</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Inventory management system</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Mobile-optimized shopping experience</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Order tracking and customer accounts</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] md:order-1 bg-[url('https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>

            {/* Portfolio Websites */}
            <div id="portfolio" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-blue-500 mr-3" />
                    <h2 className="text-3xl font-bold">Portfolio Websites</h2>
                  </div>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-6">
                    Showcase your work with a stunning, interactive portfolio website that impresses clients and helps you stand out from the competition. Perfect for photographers, designers, artists, and agencies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Visual-focused design</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Project showcase galleries</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Case study templates</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Easy content management</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] bg-[url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>

            {/* SEO & Performance */}
            <div id="seo" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center md:order-1">
                <div className="md:order-2">
                  <div className="flex items-center mb-4">
                    <Search className="h-8 w-8 text-blue-500 mr-3" />
                    <h2 className="text-3xl font-bold">SEO & Performance Optimization</h2>
                  </div>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-6">
                    Boost your search engine rankings and improve website performance with our comprehensive optimization services. We help you get found online and keep visitors engaged.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>On-page SEO optimization</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Speed and performance enhancements</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Mobile optimization</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Technical SEO audits and fixes</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] md:order-1 bg-[url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>

            {/* Maintenance & Support */}
            <div id="maintenance" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-blue-500 mr-3" />
                    <h2 className="text-3xl font-bold">Maintenance & Support</h2>
                  </div>
                  <Separator className="mb-6" />
                  <p className="text-muted-foreground mb-6">
                    Keep your website secure, up-to-date, and performing at its best with our ongoing maintenance and support services. We handle the technical details so you don't have to.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Regular software updates</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Security monitoring and patches</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Content updates and additions</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <p>Performance monitoring and optimization</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
          </div>
      
  );
}