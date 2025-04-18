import { Header } from "@/components/Header"
import { ContactSection } from "@/components/sections/Contact";
import { HomeSection } from "@/components/sections/Home";
import { ServicesSection } from "@/components/sections/Services";
import { WhoWeAreSection } from "@/components/sections/WhoWeAre";
import { Footer } from "@/components/sections/Footer";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <Header />
      <HomeSection />
      <ServicesSection />
      <WhoWeAreSection />
      <ContactSection />
      <Footer />
    </main>
  );
}