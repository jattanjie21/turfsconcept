import { SiteHeader } from '@/components/site-header';

export default function TournamentsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Tournaments</h1>
        <p>List of tournaments will be displayed here.</p>
      </main>
    </>
  );
}