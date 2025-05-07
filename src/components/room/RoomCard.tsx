
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export interface RoomType {
  id: string;
  type: 'standard' | 'deluxe' | 'suite';
  imageUrl: string;
  featured?: boolean;
}

interface RoomCardProps {
  room: RoomType;
  featuredView?: boolean;
}

const RoomCard = ({ room, featuredView = false }: RoomCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`room-card group relative rounded-lg overflow-hidden shadow-lg ${
        featuredView ? "h-80" : "h-64"
      }`}
    >
      <img
        src={room.imageUrl}
        alt={t(`roomTypes.${room.type}.title`)}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
        <h3 className="text-white text-xl font-serif mb-2">
          {t(`roomTypes.${room.type}.title`)}
        </h3>
        <p className="text-white/90 mb-3 text-sm">
          {t('rooms.perNight', { price: t(`roomTypes.${room.type}.price`) })}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button 
            size="sm" 
            className="bg-riad-terracotta hover:bg-riad-terracotta/90"
            asChild
          >
            <Link to={`/rooms/${room.id}`}>
              {t('rooms.bookNow')}
            </Link>
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-riad-darkBlue"
            asChild
          >
            <Link to={`/rooms/${room.id}`}>
              {t('rooms.viewDetails')}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
