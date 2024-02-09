import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getAllJobs({
  where
}: {
  where: Prisma.JobWhereInput
}) {
  return await prisma.job.findMany({
    where,
    orderBy: { createdAt: 'desc' }
  });
}

export async function getDistinctLocations() {
  return (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];
}