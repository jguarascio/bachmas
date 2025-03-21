import Navigation from '@/components/Navigation';
import Image from 'next/image';

const timeline = [
  {
    year: 1685,
    event: 'Born in Eisenach, Germany',
    description: 'Johann Sebastian Bach was born into a family of musicians, the youngest of eight children.',
  },
  {
    year: 1694,
    event: 'Mother\'s Death',
    description: 'Bach\'s mother, Maria Elisabeth Lämmerhirt, passed away. His father died less than a year later.',
  },
  {
    year: 1695,
    event: 'Father\'s Death',
    description: 'Bach\'s father, Johann Ambrosius Bach, passed away, leaving him an orphan at the age of 10.',
  },
  {
    year: 1700,
    event: 'St. Michael\'s School',
    description: 'Bach moved to Lüneburg to attend St. Michael\'s School, where he studied organ and harpsichord.',
  },
  {
    year: 1703,
    event: 'First Professional Position',
    description: 'Bach became the court musician in the chapel of Duke Johann Ernst in Weimar.',
  },
  {
    year: 1707,
    event: 'Marriage to Maria Barbara',
    description: 'Bach married his second cousin, Maria Barbara Bach, with whom he had seven children.',
  },
  {
    year: 1708,
    event: 'Return to Weimar',
    description: 'Bach returned to Weimar as court organist and chamber musician to Duke Wilhelm Ernst.',
  },
  {
    year: 1717,
    event: 'Move to Köthen',
    description: 'Bach became Kapellmeister at the court of Prince Leopold of Anhalt-Köthen.',
  },
  {
    year: 1720,
    event: 'Death of Maria Barbara',
    description: 'Bach\'s first wife died suddenly while he was away with Prince Leopold.',
  },
  {
    year: 1721,
    event: 'Marriage to Anna Magdalena',
    description: 'Bach married Anna Magdalena Wilcke, a talented soprano. They had 13 children together.',
  },
  {
    year: 1723,
    event: 'Leipzig Cantorate',
    description: 'Bach became the Cantor of St. Thomas Church in Leipzig, where he would remain for the rest of his life.',
  },
  {
    year: 1747,
    event: 'Visit to Frederick the Great',
    description: 'Bach visited the court of Frederick the Great in Potsdam, where he improvised on a theme given by the king.',
  },
  {
    year: 1750,
    event: 'Death in Leipzig',
    description: 'Bach died in Leipzig after a period of declining health. He was buried in an unmarked grave at St. Thomas Church.',
  },
];

export default function Life() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display text-bach-brown mb-8 text-center">
            Life of Johann Sebastian Bach
          </h1>
          <div className="relative w-64 h-64 mx-auto mb-12">
            <Image
              src="/bach-portrait.jpg"
              alt="Portrait of Johann Sebastian Bach"
              fill
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative pl-8 pb-8 ${
                  index !== timeline.length - 1 ? 'border-l-2 border-bach-brown/20' : ''
                }`}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-bach-brown rounded-full -translate-x-[9px]" />
                <div className="bg-bach-brown/5 p-6 rounded-lg">
                  <div className="text-xl font-display text-bach-brown mb-2">
                    {item.year}
                  </div>
                  <h2 className="text-lg font-semibold text-bach-brown mb-2">
                    {item.event}
                  </h2>
                  <p className="text-bach-brown leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 