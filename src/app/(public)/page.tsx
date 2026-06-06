import Hero from '@/components/sections/Hero';
import ServiceCards from '@/components/sections/ServiceCards';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs /> 
      <ContactSection /> 
    </>
  );
}