import type { Metadata } from "next";
import { AgeGroupPage } from "@/components/age-group-page";
import { programs } from "@/lib/site-data";

const program = programs.find((item) => item.slug === "adults")!;
export const metadata: Metadata = { title: "Adults", description: "Adult art classes, workshops, and creative studio sessions in Fremont." };
export default function AdultsPage() { return <AgeGroupPage program={program} />; }
