
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import RoomCard, { RoomType } from '@/components/room/RoomCard';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Sample data
const featuredRooms: RoomType[] = [
  {
    id: 'standard-1',
    type: 'standard',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
    featured: true
  },
  {
    id: 'deluxe-1',
    type: 'deluxe',
    imageUrl: 'https://images.unsplash.com/photo-1560184611-df9ef414a41a',
    featured: true
  },
  {
    id: 'suite-1',
    type: 'suite',
    imageUrl: 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d',
    featured: true
  }
];

const FeaturedRooms = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-riad-darkBlue"
          >
            {t('home.featuredRooms.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              className="border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
              asChild
            >
              <Link to="/rooms">
                {t('home.featuredRooms.viewAll')}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} featuredView={true} />
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showThumbs={false}
          >
            {featuredRooms.map((room) => (
              <div key={room.id} className="px-2 pb-6">
                <RoomCard room={room} featuredView={true} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
