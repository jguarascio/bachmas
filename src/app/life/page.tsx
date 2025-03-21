import Navigation from '@/components/Navigation';
import Image from 'next/image';
import YouTube from '@/components/YouTube';

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
    <main className="min-h-screen bg-bach-parchment">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-serif text-bach-brown mb-8">Life of Bach</h1>
          
          {/* Example YouTube video */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-bach-brown mb-4">Bach&apos;s Legacy</h2>
            <YouTube 
              videoId="Nnuq9PXbywA" 
              title="Bach's Legacy"
              className="max-w-3xl mx-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Johann Sebastian Bach was born in Eisenach, Germany, in 1685. His father, Johann Ambrosius Bach, was the director of the town musicians, and all of his uncles were professional musicians. His father taught him to play violin and harpsichord, and his brother, Johann Christoph Bach, taught him the clavichord and exposed him to much contemporary music.
            </p>
            <p>
              Bach&apos;s mother died in 1694, and his father died eight months later. The 10-year-old Bach moved in with his oldest brother, Johann Christoph Bach, the organist at St. Michael&apos;s Church in Ohrdruf, Saxe-Gotha-Altenburg. There he studied, performed, and copied music, including his own brother&apos;s, despite being forbidden to do so because scores were so valuable and private and blank ledger paper of that type was costly.
            </p>
            <p>
              Bach&apos;s musical style arose from his skill in contrapuntal invention and motivic control, his flair for improvisation at the keyboard, his exposure to North and South German, Italian and French music, and his apparent devotion to the Lutheran liturgy. His access to musicians, scores and instruments as a child and a young man and his emerging talent for writing densely woven textures of sacred and instrumental music enabled him to develop an eclectic, energetic musical style in which foreign influences were injected into an intensified version of the pre-existing German musical language.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 