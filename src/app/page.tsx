'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isSameDay, setYear } from 'date-fns';
import Navigation from '@/components/Navigation';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBachmas, setIsBachmas] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const bachmas = new Date(now.getFullYear(), 2, 21); // March 21st
      
      // Check if today is March 21st
      const isTodayBachmas = isSameDay(now, bachmas);
      
      if (isTodayBachmas) {
        setIsBachmas(true);
      } else {
        // If we're past Bachmas this year, set it to next year
        if (now > bachmas) {
          bachmas.setFullYear(now.getFullYear() + 1);
        }

        const days = differenceInDays(bachmas, now);
        const hours = differenceInHours(bachmas, now) % 24;
        const minutes = differenceInMinutes(bachmas, now) % 60;
        const seconds = differenceInSeconds(bachmas, now) % 60;

        setTimeLeft({ days, hours, minutes, seconds });
        setIsBachmas(false);
      }
    };

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateTimer();
    updateWindowSize();
    const timer = setInterval(updateTimer, 1000);
    window.addEventListener('resize', updateWindowSize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    if (isBachmas) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isBachmas]);

  const getJubileeYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    const bachBirthYear = 1685;
    const bachDeathYear = 1750;

    for (let year = bachBirthYear; year <= currentYear + 50; year += 50) {
      if (year >= currentYear) {
        years.push({
          year,
          type: 'birth',
          yearsSince: year - bachBirthYear
        });
      }
    }

    for (let year = bachDeathYear; year <= currentYear + 50; year += 50) {
      if (year >= currentYear && !years.some(y => y.year === year)) {
        years.push({
          year,
          type: 'death',
          yearsSince: year - bachDeathYear
        });
      }
    }

    return years.sort((a, b) => a.year - b.year);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-display text-bach-brown mb-8">
            {isBachmas ? 'Merry Bachmas!' : 'Countdown to Bachmas'}
          </h1>
          
          {isBachmas ? (
            <div className="space-y-6">
              <p className="text-xl text-bach-brown">
                On this day in 1685, Johann Sebastian Bach was born in Eisenach, Germany.
                That was {new Date().getFullYear() - 1685} years ago!
              </p>
              <div className="bg-bach-brown/5 p-6 rounded-lg">
                <h2 className="text-2xl font-display text-bach-brown mb-4">Upcoming Jubilee Years</h2>
                <ul className="space-y-2">
                  {getJubileeYears().map((jubilee) => (
                    <li key={jubilee.year} className="text-lg text-bach-brown">
                      {jubilee.year} - {jubilee.type === 'birth' ? 'Birth' : 'Death'} Anniversary ({jubilee.yearsSince} years since {jubilee.type === 'birth' ? 'birth' : 'death'})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-bach-brown/5 p-4 rounded-lg">
                <div className="text-3xl font-display text-bach-brown">{timeLeft.days}</div>
                <div className="text-sm text-bach-brown">Days</div>
              </div>
              <div className="bg-bach-brown/5 p-4 rounded-lg">
                <div className="text-3xl font-display text-bach-brown">{timeLeft.hours}</div>
                <div className="text-sm text-bach-brown">Hours</div>
              </div>
              <div className="bg-bach-brown/5 p-4 rounded-lg">
                <div className="text-3xl font-display text-bach-brown">{timeLeft.minutes}</div>
                <div className="text-sm text-bach-brown">Minutes</div>
              </div>
              <div className="bg-bach-brown/5 p-4 rounded-lg">
                <div className="text-3xl font-display text-bach-brown">{timeLeft.seconds}</div>
                <div className="text-sm text-bach-brown">Seconds</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
