
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  const { t } = useTranslation();

  // Update page title based on language
  useEffect(() => {
    document.title = `Riad Serenity - ${t('navigation.about')}`;
  }, [t]);

  const images = [
    'https://images.unsplash.com/photo-1540541338287-41700207dee6',
    'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f'
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-riad-darkBlue">
          <img
            src="https://images.unsplash.com/photo-1560184611-df9ef414a41a"
            alt="Riad Courtyard"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4"
              >
                {t('about.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white"
              >
                {t('about.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  showThumbs={true}
                  className="about-carousel"
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Riad Image ${index + 1}`}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg leading-relaxed">
                  {t('about.history')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('about.experience')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-riad-beige">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-riad-darkBlue mb-8"
            >
              {t('about.team')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-lg mb-12"
            >
              {t('about.teamDesc')}
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={`https://randomuser.me/api/portraits/${index === 2 ? 'women' : 'men'}/${index + 10}.jpg`}
                      alt="Team Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">
                    {index === 1 ? 'Youssef Amrani' : index === 2 ? 'Fatima Zahra' : 'Ahmed Ouazzani'}
                  </h3>
                  <p className="text-riad-terracotta mb-4">
                    {index === 1 ? 'Manager' : index === 2 ? 'Guest Relations' : 'Head Chef'}
                  </p>
                  <p className="text-muted-foreground">
                    {index === 1 
                      ? 'Born and raised in Marrakech, Youssef brings 15 years of hospitality experience.' 
                      : index === 2 
                        ? 'Fatima ensures every guest feels at home and experiences authentic Moroccan hospitality.'
                        : 'Ahmed creates memorable culinary experiences using traditional Moroccan recipes.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
