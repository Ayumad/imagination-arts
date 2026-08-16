import type { Metadata } from "next";
import { AgeGroupPage } from "@/components/age-group-page";
import { programs } from "@/lib/site-data";

const program = programs.find((item) => item.slug === "ages-11-13")!;
export const metadata: Metadata = { title: "Ages 11–13", description: "Middle School Studio art classes for students ages eleven to thirteen in Fremont." };
export default function AgesElevenToThirteenPage() { return <AgeGroupPage program={program} />; }
