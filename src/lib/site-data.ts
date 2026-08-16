export type Program = { slug: string; route: string; name: string; age: string; shortDescription: string; description: string; tone: "coral" | "sky" | "teal" | "berry"; focuses: string[]; pageTitle: string; pageIntro: string; idealFor: string[] };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://imaginationarts.studio";

export const contact = {
  email: "anubhutik@gmail.com",
  phoneDisplay: "(510) 378-1238",
  phoneInternational: "+15103781238",
  neighborhood: "Ardenwood, Fremont, California",
};

export const programs: Program[] = [
  { slug: "ages-4-6", route: "/ages-4-6", name: "Creative Beginnings", age: "Ages 4–6", tone: "coral", shortDescription: "A warm first studio experience for young artists.", description: "Stories, color, texture, and playful projects help the youngest makers build confidence with every new material.", focuses: ["Process art", "Color play", "Fine-motor skills"], pageTitle: "A colorful first studio experience.", pageIntro: "Creative Beginnings gives four- to six-year-olds a gentle, joy-filled place to explore materials, make choices, and feel proud of their ideas.", idealFor: ["Artists who are ready to make independently", "Kids who love stories, color, and sensory play", "Families looking for a friendly introduction to art class"] },
  { slug: "ages-7-10", route: "/ages-7-10", name: "Young Artists", age: "Ages 7–10", tone: "sky", shortDescription: "Big ideas, brave marks, and foundational skills.", description: "Young artists explore drawing, painting, and mixed media while building creative confidence one project at a time.", focuses: ["Drawing", "Painting", "Mixed media"], pageTitle: "A studio for bright ideas and growing skills.", pageIntro: "Young Artists balances playful exploration with approachable art foundations, giving students a comfortable place to try, practice, and share.", idealFor: ["Kids eager to learn new ways to draw and paint", "Artists who enjoy hands-on projects", "Students building confidence in a supportive group"] },
  { slug: "ages-11-13", route: "/ages-11-13", name: "Middle School Studio", age: "Ages 11–13", tone: "teal", shortDescription: "More technique, more independence, still plenty of play.", description: "A supportive next step for artists ready to deepen drawing, painting, design thinking, and personal projects.", focuses: ["Foundations", "Design", "Personal projects"], pageTitle: "More tools for bigger creative ideas.", pageIntro: "Middle School Studio offers focused guidance and room for independence as students develop technique, design thinking, and a stronger sense of their own visual voice.", idealFor: ["Artists ready for longer-form projects", "Students interested in drawing, painting, and design", "Kids who want more choice in what they make"] },
  { slug: "high-school", route: "/high-school", name: "High School Studio", age: "High school", tone: "berry", shortDescription: "Focused creative development for ambitious teen artists.", description: "Develop technical range, stronger ideas, and a body of work that feels thoughtful and distinctly yours.", focuses: ["Portfolio guidance", "Skill building", "Artist voice"], pageTitle: "Make work that feels like your own.", pageIntro: "High School Studio supports teens who want to strengthen their skills, develop meaningful projects, and build a body of work over time.", idealFor: ["Teens looking for sustained creative practice", "Students exploring portfolio development", "Artists ready to develop their own visual voice"] },
  { slug: "adults", route: "/adults", name: "Adult Creative Studio", age: "Adults", tone: "coral", shortDescription: "A restorative place to learn, make, and reconnect.", description: "Accessible workshops and studio sessions for adults who want a little more creativity in their week.", focuses: ["Beginner friendly", "Workshops", "Open exploration"], pageTitle: "Make room for creativity again.", pageIntro: "Adult Creative Studio welcomes beginners, returning makers, and anyone who wants a bright, low-pressure place to learn and create.", idealFor: ["Adults starting something new", "Creative people returning to art", "Friends looking for a hands-on workshop"] },
];

export const faqs = [
  ["How do I choose the right class?", "Tell us your artist’s age, interests, and experience in the inquiry form. We’ll help you find a welcoming starting point."],
  ["Do students need previous art experience?", "No. Each program is designed to meet artists where they are, from very first marks to more focused creative goals."],
  ["What should we bring?", "We’ll confirm materials and any project-specific details when we respond to your inquiry."],
  ["Where is the studio?", "Imagination Arts is in the Ardenwood area of Fremont. Exact arrival details are shared directly with enrolled families."],
  ["Can I ask about camps, parties, or workshops?", "Absolutely. Choose the offering that interests you in the inquiry form, and we’ll share current availability."],
];
