
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update page title based on language
  useEffect(() => {
    document.title = `Riad Serenity - ${t('navigation.contact')}`;
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        duration: 3000
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-riad-darkBlue">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            alt="Contact Us"
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
                {t('contact.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white"
              >
                {t('contact.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-8 text-riad-darkBlue">
                    {t('contact.title')}
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin size={24} className="text-riad-terracotta mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">{t('contact.address')}</h3>
                        <p className="text-muted-foreground">{t('contact.addressValue')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone size={24} className="text-riad-terracotta mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">{t('contact.phone')}</h3>
                        <p className="text-muted-foreground">{t('contact.phoneValue')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail size={24} className="text-riad-terracotta mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">{t('contact.email')}</h3>
                        <p className="text-muted-foreground">{t('contact.emailValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13598.468419298479!2d-7.991111805573741!3d31.629471251071818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d73026f97%3A0x15e3f71025df399b!2sMedina%2C%20Marrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620160866945!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Riad Location"
                  ></iframe>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-riad-terracotta hover:bg-riad-terracotta/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submit')}
                      </span>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
