import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  { id: 'team-member-1', name: 'Alice Johnson', role: 'CEO & Founder' },
  { id: 'team-member-2', name: 'Bob Williams', role: 'Chief Financial Officer' },
  { id: 'team-member-3', name: 'Charlie Brown', role: 'Head of Investments' },
];

export default function AboutPage() {
  const aboutMissionImage = PlaceHolderImages.find((p) => p.id === 'about-mission');
  const teamImages = PlaceHolderImages.filter((p) => p.id.startsWith('team-member'));

  return (
    <div className="bg-background text-foreground">
      <header className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About CapitalG</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Learn about our journey, our values, and the people who drive our success.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 md:py-24 space-y-24">
        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Mission & Vision</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower our clients to achieve financial prosperity and security through personalized,
              expert guidance and unwavering dedication. We strive to be the most trusted financial partner, known for
              our integrity, innovation, and commitment to excellence.
            </p>
            <p className="mt-4 text-muted-foreground">
              We envision a world where everyone has the knowledge and support to make sound financial decisions. Our
              goal is to demystify finance and make wealth creation accessible to all, fostering a future of economic
              stability and growth for our clients and their communities.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            {aboutMissionImage && (
              <Image
                src={aboutMissionImage.imageUrl}
                alt={aboutMissionImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutMissionImage.imageHint}
              />
            )}
          </div>
        </section>

        {/* Our History */}
        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our History</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2005, CapitalG started with a simple idea: to provide transparent and effective financial
              advice. From our humble beginnings in a small office, we have grown into a leading financial services
              firm, serving clients nationwide. Our growth is a testament to the trust our clients place in us and the
              consistent results we deliver.
            </p>'
          </div>
        </section>

        {/* Meet the Team */}
        <section>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The driving force behind our success is our team of dedicated and experienced professionals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const memberImage = teamImages.find((img) => img.id === member.id);
              return (
                <Card key={member.name} className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} />}
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
