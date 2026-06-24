const services = [
  "Packaging design",
  "Logos and branding",
  "Brochures & Ebooks",
  "Presentations",
  "Branded Apparel",
  "Stickers & badges",
  "Brand guidelines",
  "Signage",
  "Business cards",
  "Custom illustrations",
  "Social media graphics",
  "Icons",
  "Email graphics",
  "Blog graphics",
  "Infographic design",
  "Flyers",
  "Invitation design",
  "And much more",
] as const;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-brand-light pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-[60px] lg:pt-[100px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-[60px]">
        <header className="text-center">
          <p className="font-sans text-sm font-normal uppercase tracking-normal text-brand-dark sm:text-base lg:text-xl">
            Our services
          </p>
          <h2
            id="services-heading"
            className="mx-auto mt-8 max-w-[1600px] text-balance font-display text-3xl font-semibold leading-[1.3] tracking-[-0.04em] text-brand-dark sm:mt-10 sm:text-5xl sm:leading-[1.2] lg:text-[60px] lg:leading-[1.2] xl:whitespace-nowrap"
          >
            Comprehensive – Design Capabilities
          </h2>
        </header>

        <ul className="mx-auto mt-12 grid max-w-[650px] grid-cols-2 gap-x-5 gap-y-8 sm:mt-[60px] sm:gap-x-10 lg:gap-x-[50px]">
          {services.map((service) => (
            <li
              key={service}
              className="flex min-h-[50px] items-end border-b border-brand-dark px-0 pb-3 font-sans text-sm font-normal leading-snug text-brand-dark sm:text-base lg:text-[22px] lg:leading-[1.45]"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
