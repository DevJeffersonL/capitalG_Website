import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'home-hero');

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center text-center">
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 text-white">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-md">
              Empowering Your Financial Future.
            </h1>
            <div className="mt-8">
              <Link href="blob:https://github.com/08af1f6f-863c-4be1-bf57-0e65ca09d964" download="app-release.apk">
                <Button size="lg">
                  Download
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
