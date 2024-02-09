import { JobFilterValues } from "@/lib/validation";
import JobFilterSidebar from "./_sections/job-filter-sidebar";
import JobResults from "./_sections/job-results";
interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {

  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="max-w-screen-2xl m-auto space-y-10 px-3 py-8">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
