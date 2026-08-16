import type { Metadata } from "next";
import { AgeGroupPage } from "@/components/age-group-page";
import { programs } from "@/lib/site-data";

const program = programs.find((item) => item.slug === "ages-7-10")!;
export const metadata: Metadata = { title: "Ages 7–10", description: "Young Artists art classes for children ages seven to ten in Fremont." };
export default function AgesSevenToTenPage() { return <AgeGroupPage program={program} />; }
