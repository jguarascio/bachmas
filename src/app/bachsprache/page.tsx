import Navigation from '@/components/Navigation';

const bachspracheExamples = [
  {
    category: 'Emotions',
    examples: [
      { bvw: 'BWV 140', meaning: 'Joy and anticipation', work: 'Wachet auf, ruft uns die Stimme' },
      { bvw: 'BWV 244', meaning: 'Sorrow and reflection', work: 'St. Matthew Passion' },
      { bvw: 'BWV 988', meaning: 'Peace and contentment', work: 'Goldberg Variations' },
    ],
  },
  {
    category: 'Situations',
    examples: [
      { bvw: 'BWV 1068', meaning: 'Celebration and festivity', work: 'Orchestral Suite No. 3' },
      { bvw: 'BWV 565', meaning: 'Drama and intensity', work: 'Toccata and Fugue in D minor' },
      { bvw: 'BWV 846', meaning: 'Learning and discovery', work: 'Well-Tempered Clavier, Book 1' },
    ],
  },
  {
    category: 'Messages',
    examples: [
      { bvw: 'BWV 147', meaning: 'Good wishes and blessings', work: 'Herz und Mund und Tat und Leben' },
      { bvw: 'BWV 227', meaning: 'Friendship and loyalty', work: 'Jesu, meine Freude' },
      { bvw: 'BWV 1046', meaning: 'Welcome and hospitality', work: 'Brandenburg Concerto No. 1' },
    ],
  },
];

export default function Bachsprache() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display text-bach-brown mb-8 text-center">
            Bachsprache
          </h1>

          <div className="mb-12">
            <h2 className="text-2xl font-display text-bach-brown mb-4">
              The Language of Bach
            </h2>
            <p className="text-bach-brown leading-relaxed">
              Bachsprache is a unique system of communication that uses Bach&apos;s BWV numbers to express 
              emotions, situations, and messages. Each BWV number carries with it the emotional and 
              musical character of the work, allowing us to communicate complex feelings and ideas 
              through the universal language of Bach&apos;s music.
            </p>
          </div>

          <div className="space-y-8">
            {bachspracheExamples.map((category) => (
              <div key={category.category} className="bg-bach-brown/5 p-6 rounded-lg">
                <h2 className="text-xl font-display text-bach-brown mb-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.examples.map((example) => (
                    <div key={example.bvw} className="border-b border-bach-brown/10 pb-4 last:border-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-semibold text-bach-brown">
                            {example.bvw}
                          </div>
                          <div className="text-sm text-bach-brown/80">
                            {example.work}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-bach-brown">
                            {example.meaning}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-bach-brown/5 p-6 rounded-lg">
            <h2 className="text-xl font-display text-bach-brown mb-4">
              How to Use Bachsprache
            </h2>
            <p className="text-bach-brown leading-relaxed">
              To communicate using Bachsprache, simply reference the BWV number that best represents 
              your intended meaning. For example, wishing someone joy might be expressed as &quot;BWV 140&quot; 
              (from the joyful cantata &quot;Wachet auf&quot;), or expressing sorrow as &quot;BWV 244&quot; (from the 
              St. Matthew Passion). The beauty of Bachsprache lies in its ability to convey complex 
              emotions and situations through the universal language of Bach&apos;s music.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 