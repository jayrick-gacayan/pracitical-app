import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import JobListItem from "../_components/job-list-item";
import { getAllJobs } from "@/services/job-services";

interface JobResultsProps {
  filterValues: JobFilterValues;
}

export default async function JobResults({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
      OR: [
        { title: { search: searchString } },
        { companyName: { search: searchString } },
        { type: { search: searchString } },
        { locationType: { search: searchString } },
        { location: { search: searchString } },
      ],
    }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  const jobs = await getAllJobs({ where });

  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
      {jobs.length === 0 && (
        <p className="m-auto text-center">
          No jobs found. Try adjusting your search filters.
        </p>
      )}
    </div>
  );
}