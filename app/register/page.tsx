import { SiteHeader } from '@/components/site-header';

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <p>Registration form will be displayed here.</p>
      </main>
    </>
  );
}