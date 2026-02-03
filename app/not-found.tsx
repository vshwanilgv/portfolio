import Link from 'next/link';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
