import Navigation from '@/components/Navigation';
import YouTube from '@/components/YouTube';

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
                Celebration of Bach&apos;s Music
              </h2>
              <p className="text-bach-brown leading-relaxed">
                On this joyous day, Bachmas, we celebrate the birth of our savior of music, Johann Sebastian Bach. 
                The day begins with the sound of Bach&apos;s music filling the air, as families gather to perform his 
                timeless works together. Activities might include playing through all 48 preludes and fugues of the Well Tempered Clavier, 
                performing the Sontatas for Violin, Flute, and Cello, and the singing of Cantatas. The music of Bach 
                brings us together in harmony and celebration.
              </p>
            </section>

            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                Gifts of Music and Music-Related Gifts
              </h2>
              <p className="text-bach-brown leading-relaxed">
                In the morning, children rush to find gifts mysteriously placed under the harpsichord. Each gift is carefully 
                chosen to inspire musical creativity: perhaps a new instrument, sheet music, or a book about music 
                theory. The excitement of opening these musical treasures fills the air with joy and anticipation.
              </p>
            </section>

            <section className="bg-bach-brown/5 p-6 rounded-lg">
              <h2 className="text-2xl font-display text-bach-brown mb-4">
                Enjoy a Bachmas Movie or Documentary
              </h2>
              <p className="text-bach-brown leading-relaxed">
                Kids and adults alike will love &quot;Bach&apos;s Fight for Freedom&quot;.
              </p>
                <YouTube videoId="X3InTvPWWAU" title="Bach&apos;s Fight for Freedom" />
              <p className="text-bach-brown leading-relaxed">
                This is a phenomenal documentary about Bach&apos;s life and music.
              </p>
              <YouTube videoId="iOMZHmk15e4" title="Encountering Bach" />
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
                harmonies of Bach&apos;s chorales fill the room, creating a sense of unity and celebration. 
                &quot;Merry Bachmas to all, and to all a good fugue!&quot; rings out as the final notes fade away.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 