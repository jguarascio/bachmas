import Navigation from '@/components/Navigation';

const bachsprache = [
  {"bwv": 4, "work": "Christ lag in Todesbanden", "emotion": "Resurrection / Triumph over death"},
  {"bwv": 12, "work": "Weinen, Klagen, Sorgen, Zagen", "emotion": "Sorrow / Lamentation"},
  {"bwv": 21, "work": "Ich hatte viel Bekümmernis", "emotion": "Inner Turmoil / Spiritual Struggle"},
  {"bwv": 23, "work": "Du wahrer Gott und Davids Sohn", "emotion": "Hope / Divine Petition"},
  {"bwv": 38, "work": "Aus tiefer Not schrei ich zu dir", "emotion": "Desperation / Calling from the depths"},
  {"bwv": 56, "work": "Ich will den Kreuzstab gerne tragen", "emotion": "Acceptance / Spiritual endurance"},
  {"bwv": 61, "work": "Nun komm, der Heiden Heiland", "emotion": "Advent / Awaiting the Savior"},
  {"bwv": 82, "work": "Ich habe genug", "emotion": "Peace / Contentment in death"},
  {"bwv": 106, "work": "Gottes Zeit ist die allerbeste Zeit (Actus Tragicus)", "emotion": "Death / Eternal Time"},
  {"bwv": 140, "work": "Wachet auf, ruft uns die Stimme", "emotion": "Awakening / Readiness"},
  {"bwv": 147, "work": "Herz und Mund und Tat und Leben", "emotion": "Joy / Devotion"},
  {"bwv": 198, "work": "Laß, Fürstin, laß noch einen Strahl", "emotion": "Mourning / Nobility"},
  {"bwv": 208, "work": "Was mir behagt, ist nur die muntre Jagd (Hunt Cantata)", "emotion": "Playfulness / Pleasure"},
  {"bwv": 232, "work": "Mass in B Minor", "emotion": "Majesty / Sacred Totality"},
  {"bwv": 244, "work": "St. Matthew Passion", "emotion": "Sacrifice / Divine Suffering"},
  {"bwv": 245, "work": "St. John Passion", "emotion": "Conflict / Intensity of Passion"},
  {"bwv": 531, "work": "Prelude and Fugue in C major (Youthful)", "emotion": "Freshness / Joyful Brilliance"},
  {"bwv": 532, "work": "Prelude and Fugue in D major (Festive)", "emotion": "Celebration / Boldness"},
  {"bwv": 533, "work": "Prelude and Fugue in E minor (Cathedral)", "emotion": "Solemnity / Echoes of Eternity"},
  {"bwv": 534, "work": "Prelude and Fugue in F minor", "emotion": "Reflection / Introspection"},
  {"bwv": 535, "work": "Prelude and Fugue in G minor (Little)", "emotion": "Energy / Agile Intellect"},
  {"bwv": 536, "work": "Prelude and Fugue in A major (Lively)", "emotion": "Cheerfulness / Unrestrained Spirit"},
  {"bwv": 537, "work": "Fantasia and Fugue in C minor", "emotion": "Determination / Strength in Suffering"},
  {"bwv": 538, "work": "Toccata and Fugue in D minor (Dorian)", "emotion": "Mystery / Ancient Power"},
  {"bwv": 539, "work": "Prelude and Fugue in D minor", "emotion": "Duality / Inner Conflict"},
  {"bwv": 540, "work": "Toccata and Fugue in F major", "emotion": "Rustic Joy / Bucolic Imagery"},
  {"bwv": 542, "work": "Fantasy and Fugue in G minor (Great)", "emotion": "Grandeur / Heroic Struggle"},
  {"bwv": 543, "work": "Prelude and Fugue in A minor", "emotion": "Precision / Swiftness"},
  {"bwv": 544, "work": "Prelude and Fugue in B minor", "emotion": "Melancholy / Thoughtful Resignation"},
  {"bwv": 545, "work": "Prelude and Fugue in C major (Balanced)", "emotion": "Clarity / Symmetry"},
  {"bwv": 546, "work": "Prelude and Fugue in C minor (Architectural)", "emotion": "Monumental Structure / Stern Intellect"},
  {"bwv": 547, "work": "Prelude and Fugue in A major", "emotion": "Lightness / Joyful Resolve"},
  {"bwv": 548, "work": "Prelude and Fugue in E minor (Wedge)", "emotion": "Rising Tension / Angular Conflict"},
  {"bwv": 549, "work": "Prelude and Fugue in C minor (Simple)", "emotion": "Sobriety / Minimalism"},
  {"bwv": 550, "work": "Prelude and Fugue in G major (Dancing)", "emotion": "Playfulness / Rhythmic Delight"},
  {"bwv": 565, "work": "Toccata and Fugue in D minor", "emotion": "Drama / Power / Gothic"},
  {"bwv": 578, "work": "Fugue in G minor (Little Fugue)", "emotion": "Spark / Quick Intellect / Iconic Clarity"},
  {"bwv": 582, "work": "Passacaglia and Fugue in C minor", "emotion": "Infinity / Cosmic Order / Gravity"},
  {"bwv": 772, "work": "Inventions and Sinfonias", "emotion": "Clarity / Musical Logic"},
  {"bwv": 988, "work": "Goldberg Variations", "emotion": "Reflection / Intricacy"},
  {"bwv": 1041, "work": "Violin Concerto in A minor", "emotion": "Restlessness / Elegance"},
  {"bwv": 1042, "work": "Violin Concerto in E major", "emotion": "Radiance / Confidence"},
  {"bwv": 1052, "work": "Harpsichord Concerto in D minor", "emotion": "Tension / Determination"},
  {"bwv": 1065, "work": "Concerto for Four Harpsichords", "emotion": "Unity / Conversation"},
  {"bwv": 1079, "work": "The Musical Offering", "emotion": "Gift / Work of Service"},
  {"bwv": 1080, "work": "The Art of Fugue", "emotion": "Contemplation / Solving a Problem"}
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
            <p className="text-bach-brown leading-relaxed">
              Bachsprache is a system of communication that uses the BWV numbers to represent 
              emotions, ideas, or specific text which come from the works they are associated with.
            </p>  
            <p className="text-bach-brown leading-relaxed">
              To communicate using Bachsprache, simply reference the BWV number that best represents 
              your intended emotion, situation, or idea. For example, you might tell someone to wake up by saying &quot;Time to 140!&quot; 
              (&quot;Wachet auf&quot;), or you might give someone a gift by saying &quot;I got you a 1079&quot; 
              (A Musical Offering).
            </p>
            <p className="text-bach-brown leading-relaxed">
              Below are some ideas to get you started. This is a work in progress.
            </p>  
          </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BWV
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Work
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Associated Emotion/Idea/Text
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bachsprache.map((item) => (
                  <tr key={item.bwv} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.bwv}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.work}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {item.emotion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
    </main>
  );
} 