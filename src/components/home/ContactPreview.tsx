
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ContactPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-riad-darkBlue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-4"
          >
            {t('home.contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-8"
          >
            {t('home.contact.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-riad-gold hover:bg-riad-gold/90 text-riad-darkBlue"
              asChild
            >
              <Link to="/contact">
                {t('home.contact.contactUs')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
