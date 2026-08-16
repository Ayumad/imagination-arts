# Adding your logo and real studio photos

This first launch intentionally uses no stock or AI-generated photography. The site is prepared for your real logo and photos when they are ready.

## Recommended files

| Use | File name | Recommended size | Notes |
| --- | --- | --- | --- |
| Logo | `public/brand/logo.svg` or `logo.png` | SVG preferred; 600 × 220 px PNG fallback | Keep generous clear space around the mark. |
| Hero studio photo | `public/images/hero-studio.jpg` | 2400 × 1600 px | Show real making, natural light, and no distracting background. |
| Classroom moment | `public/images/classroom-01.jpg` | 1600 × 1200 px | Landscape image with room around the subject for responsive cropping. |
| Student artwork | `public/images/artwork-01.jpg` | 1600 × 1600 px | Photograph flat and evenly lit; include a caption if desired. |
| Instructor portrait | `public/images/instructor.jpg` | 1200 × 1500 px | Vertical, friendly, and well lit. |

## Privacy and accessibility

- Only use student photographs with the appropriate parent or adult permission.
- Avoid putting full names in image file names.
- Write alternative text that describes the image, not just its file name. Example: “Two elementary-age students paint bright abstract shapes at a shared studio table.”
- Keep captions factual. Do not add awards, class dates, or testimonials unless they are verified.

## Where to update the site

When photos are ready, add the files under `public/images/`, then replace the CSS photo reserve on the About page and add gallery entries to the shared site data. The temporary wordmark lives in `src/components/site-header.tsx`; replace it with the official logo while preserving the accessible home link.
