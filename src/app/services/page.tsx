import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, TrendingUp, Target, BarChart2, ShieldCheck, Scale } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const servicesList = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Financial Consulting',
    description: 'We provide strategic financial advice to businesses and individuals, helping you navigate complex financial landscapes and optimize performance.',
    features: ['Business Planning', 'Profitability Analysis', 'Cash Flow Management', 'Succession Planning'],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Investment Management',
    description: 'Our team designs and manages personalized investment portfolios to help you grow your wealth and achieve your long-term financial goals.',
    features: ['Portfolio Diversification', 'Risk Assessment', 'Retirement Planning', 'Asset Allocation'],
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Market Analysis & Research',
    description: 'Gain a competitive edge with our in-depth market research, trend analysis, and actionable insights for your business or investments.',
    features: ['Industry Reports', 'Competitor Analysis', 'Economic Forecasting', 'Consumer Behavior Studies'],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate financial risks to protect your assets and ensure the stability of your financial future.',
    features: ['Insurance Advisory', 'Regulatory Compliance', 'Fraud Prevention', 'Business Continuity'],
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Estate & Tax Planning',
    description: 'Comprehensive planning to preserve your wealth for future generations while minimizing tax liabilities.',
    features: ['Trust & Will Creation', 'Tax Minimization Strategies', 'Charitable Giving', 'Wealth Transfer'],
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Corporate Finance',
    description: 'Specialized financial services for corporations, including mergers and acquisitions, capital raising, and valuation.',
    features: ['M&A Advisory', 'Capital Structuring', 'Due Diligence', 'Valuation Services'],
  },
];

export default function ServicesPage() {
  const bannerImage = PlaceHolderImages.find(p => p.id === 'services-banner');

  return (
    <div className="bg-background text-foreground">
      <header className="relative w-full h-[40vh]">
        {bannerImage && (
           <Image
              src={bannerImage.imageUrl}
              alt={bannerImage.description}
              fill
              className="object-cover"
              data-ai-hint={bannerImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Comprehensive solutions designed for your financial success.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
          {servicesList.map((service) => (
            <Card key={service.title} className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <p className="mt-1 text-muted-foreground">{service.description}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
