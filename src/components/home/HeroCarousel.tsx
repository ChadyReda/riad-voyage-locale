
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d',
    title: 'Deluxe Room',
  },
  {
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
    title: 'Royal Suite',
  },
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    title: 'Standard Room',
  },
];

const HeroCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        showThumbs={false}
        className="h-[80vh]"
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-[80vh] relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center max-w-4xl"
              >
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mb-4">
                  {t('home.hero.welcomeTitle')}
                </h1>
                <p className="text-white text-lg md:text-xl mb-8">
                  {t('home.hero.welcomeSubtitle')}
                </p>
                <Button size="lg" className="bg-riad-terracotta hover:bg-riad-terracotta/90">
                  {t('home.hero.bookNow')}
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
