import type { Metadata } from "next";
import { AgeGroupPage } from "@/components/age-group-page";
import { programs } from "@/lib/site-data";

const program = programs.find((item) => item.slug === "high-school")!;
export const metadata: Metadata = { title: "High School", description: "High School Studio art classes and portfolio guidance for teens in Fremont." };
export default function HighSchoolPage() { return <AgeGroupPage program={program} />; }
