
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/home/HeroCarousel';
import SearchBar from '@/components/home/SearchBar';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import Services from '@/components/home/Services';
import ContactPreview from '@/components/home/ContactPreview';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  
  // Update page title based on language
  useEffect(() => {
    document.title = `Riad Serenity - ${t('navigation.home')}`;
  }, [t]);

  return (
    <Layout>
      <HeroCarousel />
      <SearchBar />
      <AboutPreview />
      <FeaturedRooms />
      <Services />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
