import Navigation from '@/components/Navigation';

export default function Traditions() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display text-bach-brown mb-8 text-center">
            Bachmas Traditions
          </h1>

          <div className="space-y-8">
            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                Celebration of Bach's Music
              </h2>
              <p className="text-bach-brown leading-relaxed">
                On this joyous day, Bachmas, we celebrate the birth of our savior of music, Johann Sebastian Bach. 
                The day begins with the sound of Bach's music filling the air, as families gather to perform his 
                timeless works together. From the playing through all 48 preludes and fugues of the Well Tempered Clavier, 
                performing the Sontatas for Violin, Flute, and Cello, and the singing of Cantatas, the music of Bach 
                brings us together in harmony and celebration.
              </p>
            </section>

            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                Gifts of Music and Music-Related Gifts
              </h2>
              <p className="text-bach-brown leading-relaxed">
                In the morning, children rush to find gifts mysteriously placedunder the harpsichord. Each gift is carefully 
                chosen to inspire musical creativity: perhaps a new instrument, sheet music, or a book about music 
                theory. The excitement of opening these musical treasures fills the air with joy and anticipation.
              </p>
            </section>

            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                The Bachmas Feast
              </h2>
              <p className="text-bach-brown leading-relaxed">
                The celebration continues with a grand Bachmas feast, featuring traditional German fare. 
                Tables are laden with bratwurst, potato pancakes, and other German delicacies. Families and 
                friends gather to share in this festive meal, creating memories that will last a lifetime.
              </p>
            </section>

            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                Bachmas Chorales
              </h2>
              <p className="text-bach-brown leading-relaxed">
                As the day draws to a close, everyone joins in singing Bachmas Chorales around the harpsichord. The rich 
                harmonies of Bach's chorales fill the room, creating a sense of unity and celebration. 
                "Merry Bachmas to all, and to all a good fugue!" rings out as the final notes fade away.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 