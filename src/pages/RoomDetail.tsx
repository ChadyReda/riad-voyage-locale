
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { toast } from '@/components/ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

// Sample room details structured by room type
const roomDetails = {
  'standard-1': {
    type: 'standard',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries']
  },
  'standard-2': {
    type: 'standard',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries']
  },
  'standard-3': {
    type: 'standard',
    images: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'safe']
  },
  'deluxe-1': {
    type: 'deluxe',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
      'https://images.unsplash.com/photo-1560184611-df9ef414a41a'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries', 'tv', 'minibar']
  },
  'deluxe-2': {
    type: 'deluxe',
    images: [
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
      'https://images.unsplash.com/photo-1560184611-df9ef414a41a'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries', 'tv', 'minibar']
  },
  'suite-1': {
    type: 'suite',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries', 'tv', 'minibar', 'safe', 'terrace']
  },
  'suite-2': {
    type: 'suite',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d'
    ],
    amenities: ['wifi', 'ac', 'breakfast', 'toiletries', 'tv', 'minibar', 'safe', 'terrace']
  }
};

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  // Get room details based on the ID from URL
  const room = id ? roomDetails[id as keyof typeof roomDetails] : null;
  
  // If room doesn't exist, return null (this would redirect to 404 in a real app)
  if (!room || !id) {
    return null;
  }

  // Update page title based on language
  useEffect(() => {
    if (room) {
      document.title = `${t(`roomTypes.${room.type}.title`)} - Riad Serenity`;
    }
  }, [t, room]);

  const handleBookNow = () => {
    if (!startDate || !endDate) {
      toast({
        title: "Please select check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Successful!",
      description: `Your stay is confirmed from ${format(startDate, 'PP')} to ${format(endDate, 'PP')}`,
    });
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Room Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            showThumbs={true}
            className="room-detail-carousel"
          >
            {room.images.map((image, index) => (
              <div key={index} className="h-[60vh]">
                <img
                  src={image}
                  alt={`${t(`roomTypes.${room.type}.title`)} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Room Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Room Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-4xl font-serif text-riad-darkBlue mb-4">
                    {t(`roomTypes.${room.type}.title`)}
                  </h1>
                  
                  <p className="text-xl text-riad-terracotta font-medium mb-6">
                    €{t(`roomTypes.${room.type}.price`)} {t('rooms.perNight')}
                  </p>
                  
                  <div className="prose max-w-none mb-8">
                    <p className="text-lg text-foreground/80">
                      {t(`roomTypes.${room.type}.description`)}
                    </p>
                  </div>
                  
                  {/* Room Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">
                        {t('rooms.details.size')}
                      </h3>
                      <p className="font-medium">{t(`roomTypes.${room.type}.size`)}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">
                        {t('rooms.details.capacity')}
                      </h3>
                      <p className="font-medium">{t(`roomTypes.${room.type}.capacity`)}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">
                        {t('rooms.details.bed')}
                      </h3>
                      <p className="font-medium">{t(`roomTypes.${room.type}.bed`)}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">
                        {t('rooms.details.view')}
                      </h3>
                      <p className="font-medium">{t(`roomTypes.${room.type}.view`)}</p>
                    </div>
                  </div>
                  
                  {/* Amenities */}
                  <div className="mb-10">
                    <h2 className="text-xl font-serif mb-4">{t('rooms.amenities')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#C85C33" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                          </svg>
                          <span>{t(`amenities.${amenity}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Booking Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 h-fit"
              >
                <h2 className="text-xl font-serif mb-6">{t('rooms.availability')}</h2>
                
                <div className="space-y-4 mb-6">
                  {/* Check In */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      {t('home.search.checkIn')}
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : <span>{t('home.search.checkIn')}</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Check Out */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      {t('home.search.checkOut')}
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : <span>{t('home.search.checkOut')}</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                          disabled={(date) => (date < new Date() || (startDate ? date <= startDate : false))}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between mb-4">
                    <span>{t(`roomTypes.${room.type}.price`)} x 1 night</span>
                    <span>€{t(`roomTypes.${room.type}.price`)}</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>€{t(`roomTypes.${room.type}.price`)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-riad-terracotta hover:bg-riad-terracotta/90"
                  onClick={handleBookNow}
                >
                  {t('rooms.bookNow')}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RoomDetail;
