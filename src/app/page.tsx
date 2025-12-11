import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Briefcase, Target, TrendingUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Financial Consulting',
    description: 'Strategic advice to optimize your financial performance and achieve long-term goals.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Investment Management',
    description: 'Personalized investment portfolios designed to grow your wealth and manage risk.',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to inform your business and investment decisions.',
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'home-hero');
  const aboutSummaryImage = PlaceHolderImages.find((p) => p.id === 'about-summary');

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="relative container mx-auto h-full flex flex-col items-start justify-end pb-16 md:pb-24 text-white">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-md">
              Navigate Your Financial Future
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
              Expert guidance for a complex world. CapitalG is your trusted partner in achieving financial clarity and
              success.
            </p>
            <Link href="/services" className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* About Us Summary */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Who We Are</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                At CapitalG, we are dedicated to providing exceptional financial services tailored to your unique needs.
                With decades of combined experience, our team of experts is committed to your success. We believe in
                building long-term relationships based on trust, integrity, and proven results.
              </p>
              <Link href="/about" className="mt-6 inline-block">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              {aboutSummaryImage && (
                <Image
                  src={aboutSummaryImage.imageUrl}
                  alt={aboutSummaryImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutSummaryImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Our Core Services</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                We offer a comprehensive suite of services to meet the diverse needs of our clients.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      {service.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/services">
                <Button size="lg" variant="secondary">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
