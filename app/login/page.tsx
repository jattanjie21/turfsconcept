import { SiteHeader } from '@/components/site-header';

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p>Login form will be displayed here.</p>
      </main>
    </>
  );
}