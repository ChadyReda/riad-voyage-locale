
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import RoomCard, { RoomType } from '@/components/room/RoomCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Sample rooms data
const roomsData: RoomType[] = [
  {
    id: 'standard-1',
    type: 'standard',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    featured: false
  },
  {
    id: 'standard-2',
    type: 'standard',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    featured: false
  },
  {
    id: 'standard-3',
    type: 'standard',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
    featured: false
  },
  {
    id: 'deluxe-1',
    type: 'deluxe',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    featured: false
  },
  {
    id: 'deluxe-2',
    type: 'deluxe',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
    featured: false
  },
  {
    id: 'suite-1',
    type: 'suite',
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    featured: false
  },
  {
    id: 'suite-2',
    type: 'suite',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    featured: false
  }
];

const Rooms = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  // Update page title based on language
  useEffect(() => {
    document.title = `Riad Serenity - ${t('navigation.rooms')}`;
  }, [t]);

  // Filter rooms based on selected type
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredRooms(roomsData);
    } else {
      setFilteredRooms(roomsData.filter(room => room.type === activeFilter));
    }
  }, [activeFilter]);

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-riad-darkBlue">
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
            alt="Rooms"
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
                {t('navigation.rooms')}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Room Type Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Button
                variant={activeFilter === 'all' ? "default" : "outline"}
                className={
                  activeFilter === 'all'
                    ? "bg-riad-terracotta hover:bg-riad-terracotta/90"
                    : "border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
                }
                onClick={() => setActiveFilter('all')}
              >
                {t('home.search.allRooms')}
              </Button>
              <Button
                variant={activeFilter === 'standard' ? "default" : "outline"}
                className={
                  activeFilter === 'standard'
                    ? "bg-riad-terracotta hover:bg-riad-terracotta/90"
                    : "border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
                }
                onClick={() => setActiveFilter('standard')}
              >
                {t('home.search.standard')}
              </Button>
              <Button
                variant={activeFilter === 'deluxe' ? "default" : "outline"}
                className={
                  activeFilter === 'deluxe'
                    ? "bg-riad-terracotta hover:bg-riad-terracotta/90"
                    : "border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
                }
                onClick={() => setActiveFilter('deluxe')}
              >
                {t('home.search.deluxe')}
              </Button>
              <Button
                variant={activeFilter === 'suite' ? "default" : "outline"}
                className={
                  activeFilter === 'suite'
                    ? "bg-riad-terracotta hover:bg-riad-terracotta/90"
                    : "border-riad-terracotta text-riad-terracotta hover:bg-riad-terracotta hover:text-white"
                }
                onClick={() => setActiveFilter('suite')}
              >
                {t('home.search.suite')}
              </Button>
            </div>

            {/* Room Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {filteredRooms.map((room) => (
                <motion.div
                  key={room.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <RoomCard room={room} featuredView={true} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Rooms;
