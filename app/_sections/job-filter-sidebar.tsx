import { jobTypes } from "@/lib/job-types";
import Input from "../_components/input";
import Select from "../_components/select";
import { getDistinctLocations } from "@/services/job-services";
import Button from "../_components/button";
import { filterJobs } from "../_actions/job-actions";

export default async function JobFilterSidebar() {
  const distinctLocations = await getDistinctLocations();

  return (
    <aside className="sticky top-0 h-fit rounded-lg border p-4 md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="q">Search</label>
            <Input id="q" name="q" placeholder="Title, company, etc." />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Select id="type" name="type" defaultValue="">
              <option value="">All types</option>
              {jobTypes.map((type: string) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">Location</label>
            <Select id="location" name="location" defaultValue="">
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Input id="remote"
              name="remote"
              type="checkbox"
              className="accent-red-500 h-6 w-6"
            />
            <label htmlFor="remote">Remote</label>
          </div>
          <Button type="submit" className="w-full">
            Filter jobs
          </Button>
        </div>
      </form>
    </aside>
  );
}