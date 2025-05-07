
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const SearchBar = () => {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("all");
  const [priceRange, setPriceRange] = useState([100, 300]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      checkIn,
      checkOut,
      guests,
      roomType,
      priceRange
    });
    // In a real application, this would navigate to search results
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 -mt-16 relative z-10 mx-6 md:mx-auto max-w-6xl">
      <h2 className="text-xl md:text-2xl font-serif mb-6 text-center">{t('home.search.title')}</h2>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label htmlFor="check-in">{t('home.search.checkIn')}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>{t('home.search.checkIn')}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="check-out">{t('home.search.checkOut')}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>{t('home.search.checkOut')}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">{t('home.search.guests')}</Label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger id="guests">
              <SelectValue placeholder={t('home.search.guests')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="room-type">{t('home.search.roomType')}</Label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger id="room-type">
              <SelectValue placeholder={t('home.search.roomType')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('home.search.allRooms')}</SelectItem>
              <SelectItem value="standard">{t('home.search.standard')}</SelectItem>
              <SelectItem value="deluxe">{t('home.search.deluxe')}</SelectItem>
              <SelectItem value="suite">{t('home.search.suite')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex items-end">
          <Button type="submit" className="w-full bg-riad-terracotta hover:bg-riad-terracotta/90">
            {t('home.search.search')}
          </Button>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-5 space-y-2">
          <div className="flex justify-between">
            <Label>{t('home.search.priceRange')} (€{priceRange[0]} - €{priceRange[1]})</Label>
          </div>
          <Slider
            defaultValue={[100, 300]}
            min={50}
            max={500}
            step={10}
            onValueChange={(value) => setPriceRange(value as number[])}
            className="py-4"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
