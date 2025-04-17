import { Header } from "@/components/Header"
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <Header />
      <div className="container mt-16 text-4xl font-bold">
        {t('title')}
      </div>
    </main>
  );
}