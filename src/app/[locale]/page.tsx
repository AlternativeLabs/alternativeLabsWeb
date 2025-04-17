import { Header } from "@/components/Header"
import { HomeSection } from "@/components/sections/Home";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <Header />
      <HomeSection />
    </main>
  );
}