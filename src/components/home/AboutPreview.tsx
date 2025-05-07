
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-riad-darkBlue">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('home.about.description')}
            </p>
            <Button 
              variant="outline" 
              className="border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
              asChild
            >
              <Link to="/about">
                {t('home.about.readMore')}
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1560184611-df9ef414a41a" 
                alt="Riad Courtyard" 
                className="h-40 w-full object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" 
                alt="Riad Room" 
                className="h-60 w-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 pt-10">
              <img 
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f" 
                alt="Riad Architecture" 
                className="h-60 w-full object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1520222984843-df35ebc0f24d" 
                alt="Riad Detail" 
                className="h-40 w-full object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
