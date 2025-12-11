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
        <section className="relative w-full h-screen flex items-center justify-center text-center">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 text-white">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-md">
              Empowering Your Financial Future.
            </h1>
            <div className="mt-8">
              <Link href="https://upnow-prod.ff45e40d1a1c8f7e7de4e976d0c9e555.r2.cloudflarestorage.com/5Dr81NHDXbepsoROD9GWlp5Lkoq1/4b578229-4eb7-4a43-8e87-ac59e6f6212f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=2f488bd324502ec20fee5b40e9c9ed39%2F20251211%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20251211T074326Z&X-Amz-Expires=43200&X-Amz-Signature=a995dfa622ca78e8d9d0ffec9a899064dd321a19b1786fdd7914f64758a960dd&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22app-release.apk%22" download="app-release.apk">
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
