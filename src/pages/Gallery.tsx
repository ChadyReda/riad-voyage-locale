
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Sample gallery images with categories
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6',
    category: 'rooms'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d',
    category: 'common'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    category: 'rooms'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
    category: 'dining'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    category: 'exterior'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1560184611-df9ef414a41a',
    category: 'common'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2',
    category: 'rooms'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7',
    category: 'exterior'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1504822099684-7a0736164efa',
    category: 'dining'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1552566626-2d907dab0dff',
    category: 'common'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1542304074-9c8ce93b52fd',
    category: 'rooms'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    category: 'exterior'
  }
];

const Gallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  // Update page title based on language
  useEffect(() => {
    document.title = `Riad Serenity - ${t('navigation.gallery')}`;
  }, [t]);

  // Filter images based on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);

  // Categories
  const categories = ['all', 'rooms', 'common', 'dining', 'exterior'];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-riad-darkBlue">
          <img
            src="https://images.unsplash.com/photo-1560184611-df9ef414a41a"
            alt="Riad Gallery"
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
                {t('gallery.title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-white"
              >
                {t('gallery.subtitle')}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category 
                      ? "bg-riad-terracotta hover:bg-riad-terracotta/90" 
                      : "border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {t(`gallery.categories.${category}`)}
                </Button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={`Riad gallery image ${image.id}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img 
                src={selectedImage} 
                alt="Gallery preview" 
                className="max-h-[90vh] max-w-full rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
