import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-sm max-w-xs text-center md:text-left">
              Your partner in financial success. We provide expert advice and innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="grid gap-2">
              <h4 className="font-semibold text-foreground">Company</h4>
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
              <Link href="#" className="hover:text-primary">
                Careers
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <Link href="#" className="hover:text-primary">
                Blog
              </Link>
              <Link href="#" className="hover:text-primary">
                Case Studies
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
            <div className="grid gap-2">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm">
          © {new Date().getFullYear()} CapitalG. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
