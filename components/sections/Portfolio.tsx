"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Logos and branding",
  "Packaging design",
  "Brochures & Ebooks",
  "Branded Apparel",
  "Social media graphics",
  "Stickers & badges",
  "Custom illustrations",
  "Flyers",
  "Presentations",
  "Business cards",
  "Signage",
  "And much more",
  "Invitation design",
  "Brand guidelines",
] as const;

type Category = (typeof categories)[number];
type ProjectCategory = Exclude<Category, "All">;

interface Project {
  title: string;
  image: string;
  categories: ProjectCategory[];
}

const projects: Project[] = [
  { title: "Hawthorn Brewery", image: "/assets/sign-board-mockup-1-9cd8e019.png", categories: ["Logos and branding", "Packaging design"] },
  { title: "Promox 2024 Trade Show", image: "/assets/untitled395-20241031165021-33aeee4b.png", categories: ["Brochures & Ebooks"] },
  { title: "Branded Apparel for Peak Fitness", image: "/assets/untitled400-20241103171114-680871b0.png", categories: ["Logos and branding", "Branded Apparel"] },
  { title: "Metro Luxe Real Estate", image: "/assets/business-card-front-page-0001-33a28450.jpg", categories: ["Logos and branding"] },
  { title: "FreshBoost Juices", image: "/assets/untitled454-20241119210206-396fec41.png", categories: ["Packaging design", "Logos and branding", "Social media graphics"] },
  { title: "AfroVibes Festival", image: "/assets/afro0-d519334a.png", categories: ["Stickers & badges"] },
  { title: "Stellar Horizon", image: "/assets/untitled584-20250107151346-b295f6be.png", categories: ["Custom illustrations"] },
  { title: "Sunday Indie Vibes", image: "/assets/untitled591-20250109215332-755eb5f4.png", categories: ["Flyers", "Custom illustrations"] },
  { title: "Focus Flow - Productivity app", image: "/assets/instagram-post-17-0ffc39bc.png", categories: ["Social media graphics"] },
  { title: "Zoey's Zoo", image: "/assets/untitled601-20250114130518-35cf3f79.png", categories: ["Custom illustrations"] },
  { title: "StreetFit Apparel", image: "/assets/untitled633-20250121155345-9340513f.png", categories: ["Branded Apparel"] },
  { title: "Paysmart", image: "/assets/paysmart-b55147f6.jpg", categories: ["Presentations"] },
  { title: "Carter & Winslow LLP", image: "/assets/mockup-1-1-4da486bf.png", categories: ["Business cards", "Logos and branding"] },
  { title: "Brightpath tutors", image: "/assets/untitled662-20250131193951-dee9b88d.png", categories: ["Signage", "And much more"] },
  { title: "Apexcare Services", image: "/assets/untitled663-20250131214251-5fd9a997.png", categories: ["Signage"] },
  { title: "Pulsefit", image: "/assets/untitled664-20250201020827-e884cd60.png", categories: ["Signage"] },
  { title: "Sweetescape", image: "/assets/chcoclate-bar-sample-1-584c9169.png", categories: ["Packaging design"] },
  { title: "Pureglow skincare", image: "/assets/flyer-1-759c697d.png", categories: ["Flyers"] },
  { title: "NutriSnack", image: "/assets/flyer-3-0c169b67.png", categories: ["Flyers"] },
  { title: "Swiftmove Logistics", image: "/assets/flyer-2-b2441478.png", categories: ["Flyers"] },
  { title: "T-shirt Inscriptions", image: "/assets/free-t-shirt-mannequin-mockup-1-20250206192919-f49125c5.png", categories: ["Branded Apparel", "Custom illustrations"] },
  { title: "Branded T-shirts", image: "/assets/free-t-shirt-mannequin-mockup-1-20250206191252-8a563f27.png", categories: ["Branded Apparel", "Custom illustrations"] },
  { title: "Dreamwise Ebook Design", image: "/assets/0-2-31d7e464.jpg", categories: ["Brochures & Ebooks", "Flyers"] },
  { title: "Wedding Invitation Templates", image: "/assets/artboard-2-copy-5-95ebe14f.jpg", categories: ["Invitation design"] },
  { title: "Brand design for Event startup", image: "/assets/boothmate-c78a29b0.jpg", categories: ["Logos and branding", "And much more"] },
  { title: "Social media graphics for web awards platform", image: "/assets/artboard-1-copy-7-5900bd33.jpg", categories: ["Flyers", "Social media graphics"] },
  { title: "Brochure design for Luxe", image: "/assets/1-2c8b859f.png", categories: ["Brochures & Ebooks"] },
  { title: "Branding for Primecrest", image: "/assets/brand-presentation-prime-farmsartboard-1-copy-2-6e881acb.jpg", categories: ["Logos and branding", "Brand guidelines"] },
  { title: "Rebranding for Nocode agency", image: "/assets/add-a-heading-4500-x-4500-px-6-58de7265.jpg", categories: ["Logos and branding", "Social media graphics"] },
  { title: "Brand design for Obaro", image: "/assets/obaro-pdfa-.pdf.zip-6-d2435b7a.jpg", categories: ["Logos and branding", "Branded Apparel"] },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [visibleCategory, setVisibleCategory] = useState<Category>("All");
  const [isFaded, setIsFaded] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(
    () => () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    },
    [],
  );

  const visibleProjects =
    visibleCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(visibleCategory as ProjectCategory),
        );

  function filterProjects(category: Category) {
    if (category === selectedCategory) return;

    setSelectedCategory(category);
    setIsFaded(true);
    if (transitionTimer.current) clearTimeout(transitionTimer.current);

    transitionTimer.current = setTimeout(() => {
      setVisibleCategory(category);
      requestAnimationFrame(() => setIsFaded(false));
    }, 200);
  }

  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-[60px]">
        <header className="text-center">
          <p className="font-sans text-sm text-brand-dark sm:text-base">
            Our portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="mx-auto mt-4 max-w-4xl text-balance font-display text-3xl font-semibold leading-[1.3] tracking-[-0.035em] text-brand-dark sm:text-4xl sm:leading-[1.28] lg:text-[60px] lg:leading-[1.22]"
          >
            We transform ideas into design success stories
          </h2>
        </header>

        <div
          role="group"
          aria-label="Filter portfolio projects"
          className="mx-auto mt-10 flex max-w-[920px] flex-wrap justify-center gap-2 sm:mt-12"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => filterProjects(category)}
                className={cn(
                  "min-h-10 rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2",
                  isActive
                    ? "bg-brand-primary text-white"
                    : "bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className={cn(
            "mx-auto mt-14 grid max-w-[1000px] grid-cols-1 justify-items-center gap-10 transition-opacity duration-200 ease-in sm:mt-16 md:grid-cols-2",
            isFaded ? "opacity-0" : "opacity-100",
          )}
        >
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="w-full max-w-[480px] min-w-0 bg-white"
            >
              <div className="relative aspect-[3/2] w-full max-w-[480px] overflow-hidden rounded-2xl bg-brand-dark/5">
                <Image
                  src={assetPath(project.image)}
                  alt={`${project.title} design project`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 767px) calc(100vw - 40px), 480px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-[-0.02em] text-brand-dark sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 font-sans text-sm leading-5 text-brand-dark">
                {project.categories.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
