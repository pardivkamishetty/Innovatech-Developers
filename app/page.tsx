import { HeroSection } from '@/components/home/hero-section';
import { ServicesPreview } from '@/components/home/services-preview';
import { PortfolioPreview } from '@/components/home/portfolio-preview';
import { Testimonials } from '@/components/home/testimonials';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}