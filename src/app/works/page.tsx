import Navigation from '@/components/Navigation';

const bvwCategories = [
  {
    range: 'BWV 1-224',
    title: 'Cantatas',
    description: 'Sacred and secular cantatas',
    popular: ['BWV 140 - Wachet auf, ruft uns die Stimme', 'BWV 147 - Herz und Mund und Tat und Leben'],
  },
  {
    range: 'BWV 225-242',
    title: 'Motets',
    description: 'Choral motets',
    popular: ['BWV 227 - Jesu, meine Freude', 'BWV 229 - Komm, Jesu, komm'],
  },
  {
    range: 'BWV 243-249',
    title: 'Oratorios',
    description: 'Large-scale vocal works',
    popular: ['BWV 244 - St. Matthew Passion', 'BWV 245 - St. John Passion'],
  },
  {
    range: 'BWV 250-438',
    title: 'Chorales',
    description: 'Four-part chorales and sacred songs',
    popular: ['BWV 253-438 - 371 Four-Part Chorales'],
  },
  {
    range: 'BWV 439-524',
    title: 'Songs and Arias',
    description: 'Songs and arias',
    popular: ['BWV 508 - Bist du bei mir', 'BWV 515 - So oft ich meine Tobackspfeife'],
  },
  {
    range: 'BWV 525-771',
    title: 'Organ Works',
    description: 'Works for organ',
    popular: ['BWV 565 - Toccata and Fugue in D minor', 'BWV 582 - Passacaglia and Fugue in C minor'],
  },
  {
    range: 'BWV 772-994',
    title: 'Keyboard Works',
    description: 'Works for harpsichord and clavichord',
    popular: ['BWV 846-893 - The Well-Tempered Clavier', 'BWV 988 - Goldberg Variations'],
  },
  {
    range: 'BWV 995-1013',
    title: 'Lute and Chamber Music',
    description: 'Works for lute and chamber ensembles',
    popular: ['BWV 1007 - Cello Suite No. 1', 'BWV 1013 - Partita for Flute'],
  },
  {
    range: 'BWV 1014-1040',
    title: 'Orchestral Works',
    description: 'Concertos and orchestral suites',
    popular: ['BWV 1046-1051 - Brandenburg Concertos', 'BWV 1066-1069 - Orchestral Suites'],
  },
  {
    range: 'BWV 1041-1071',
    title: 'Canons and Musical Offering',
    description: 'Canons and the Musical Offering',
    popular: ['BWV 1079 - The Musical Offering', 'BWV 1080 - The Art of Fugue'],
  },
];

export default function Works() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display text-bach-brown mb-8 text-center">
            Works of Johann Sebastian Bach
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-display text-bach-brown mb-4">
              The BWV System
            </h2>
            <p className="text-bach-brown leading-relaxed">
              The Bach-Werke-Verzeichnis (BWV) is a catalogue of Johann Sebastian Bach's compositions. 
              It was first published in 1950 and is now the standard way to reference Bach's works. 
              The works are organized by genre and instrumentation, with sacred vocal works (cantatas, 
              motets, passions, etc.) appearing first, followed by secular vocal works, organ works, 
              keyboard works, and instrumental works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bvwCategories.map((category) => (
              <div key={category.range} className="bg-bach-brown/5 p-6 rounded-lg">
                <div className="text-lg font-display text-bach-brown mb-2">
                  {category.range}
                </div>
                <h3 className="text-xl font-semibold text-bach-brown mb-2">
                  {category.title}
                </h3>
                <p className="text-bach-brown mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-bach-brown">
                    Popular Works:
                  </div>
                  <ul className="list-disc list-inside text-sm text-bach-brown">
                    {category.popular.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 