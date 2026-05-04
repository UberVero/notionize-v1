import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import WhyNotionNative from '@/components/WhyNotionNative';
import PilotCatalog from '@/components/PilotCatalog';
import Templates from '@/components/Templates';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <NavBar />
      <Hero />
      <WhyNotionNative />
      <PilotCatalog />
      <Templates />
      <CTA />
    </div>
  );
}
