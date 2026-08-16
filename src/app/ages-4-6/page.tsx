import type { Metadata } from "next";
import { AgeGroupPage } from "@/components/age-group-page";
import { programs } from "@/lib/site-data";

const program = programs.find((item) => item.slug === "ages-4-6")!;
export const metadata: Metadata = { title: "Ages 4–6", description: "Creative Beginnings art classes for children ages four to six in Fremont." };
export default function AgesFourToSixPage() { return <AgeGroupPage program={program} />; }
