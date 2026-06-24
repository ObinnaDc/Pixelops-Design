import Image from "next/image";

import { assetPath } from "@/lib/paths";

const problemImage = "/assets/webinar/frame-39-1663b569.svg";

const problemItems = [
  "Your designer is booked 3 times out",
  "Your marketing manager will get to it in the next quarter",
  "Last webinar's recording has 47 views in your library",
  "You're planning the next webinar while the last one generates zero ROI",
] as const;

export default function WebinarProblem() {
  return (
    <section className="bg-white px-5 py-12 sm:px-0 sm:pb-16 sm:pt-10 lg:pb-12 lg:pt-12">
      <div className="w-full px-0 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-sans text-base font-normal uppercase tracking-[0.01em] text-brand-coral lg:text-xl">
              Problem
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,8vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.045em] text-brand-dark sm:text-[42px] sm:leading-[50px] lg:text-[45px] lg:leading-[54px]">
              The Webinar Content Problem Every B2B Team Faces
            </h2>
            <p className="mt-5 font-sans text-base leading-7 text-brand-dark sm:text-lg lg:text-[22px] lg:leading-[1.45]">
              You know repurposing webinar content drives leads. Your team just
              doesn&apos;t have the bandwidth to do it consistently.
            </p>

            <h3 className="mt-7 font-sans text-base font-semibold text-brand-dark sm:text-lg lg:text-[21px]">
              The reality is:
            </h3>
            <ul className="mt-4 space-y-3 pl-5 font-sans text-sm leading-6 text-scraped-steel sm:text-base lg:text-[18px] lg:leading-7">
              {problemItems.map((item) => (
                <li key={item} className="list-disc pl-1">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-xl border border-brand-coral px-5 py-4 font-sans text-base leading-6 text-scraped-steel sm:text-lg sm:leading-7 lg:text-[20px]">
              Meanwhile, your webinar content contains everything you need:
              frameworks, case studies, insights your prospects actually want.
              <strong className="block font-medium text-brand-coral">
                The gap isn&apos;t content quality. It&apos;s execution
              </strong>
            </div>
          </div>

          <div className="relative min-h-[300px] w-full overflow-hidden rounded-[24px] bg-brand-paper sm:min-h-[360px] lg:h-full lg:min-h-0">
            <Image
              src={assetPath(problemImage)}
              alt="Overworked marketer sitting at a desk"
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), calc(50vw - 108px)"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
